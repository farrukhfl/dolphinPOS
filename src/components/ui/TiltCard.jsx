import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

const NO_HOVER = '(hover: none), (pointer: coarse)'

/** Touch devices never fire the mouse events that drive the tilt, so the
 * perspective/preserve-3d context this component switches on for them would
 * be pure cost: WebKit in particular rasterizes children of a 3D transform
 * context through a softer, non-native-resolution texture pass, which reads
 * as a blurry banner photo on phones even though the same image is crisp on
 * desktop. Skipping the whole 3D wrapper there removes that texture pass. */
function useIsCoarsePointer() {
  const [coarse, setCoarse] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(NO_HOVER).matches,
  )

  useEffect(() => {
    const mq = window.matchMedia(NO_HOVER)
    const onChange = (e) => setCoarse(e.matches)
    mq.addEventListener('change', onChange)
    setCoarse(mq.matches)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return coarse
}

/**
 * Mouse-driven 3D tilt. The pointer position drives two springs, so the card
 * settles rather than snapping, and children can be pushed forward on the Z
 * axis by giving them their own translateZ.
 *
 * Motion values are used throughout, so moving the cursor never re-renders.
 */
export default function TiltCard({
  children,
  className = '',
  max = 9,
  scale = 1.02,
  perspective = 1100,
}) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const coarsePointer = useIsCoarsePointer()

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const spring = { stiffness: 180, damping: 22, mass: 0.6 }
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring)
  const s = useSpring(1, spring)

  if (reduceMotion || coarsePointer) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        px.set((event.clientX - rect.left) / rect.width)
        py.set((event.clientY - rect.top) / rect.height)
      }}
      onMouseEnter={() => s.set(scale)}
      onMouseLeave={() => { px.set(0.5); py.set(0.5); s.set(1) }}
      style={{ perspective, rotateX, rotateY, scale: s, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
