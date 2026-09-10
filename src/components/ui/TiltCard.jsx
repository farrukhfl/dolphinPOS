import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

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

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const spring = { stiffness: 180, damping: 22, mass: 0.6 }
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring)
  const s = useSpring(1, spring)

  if (reduceMotion) {
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
