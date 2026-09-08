import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const defaultFormat = (n) => Math.round(n).toLocaleString('en-US')

export default function AnimatedNumber({ value, format = defaultFormat, className = '', triggerOnView = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 90, damping: 22, mass: 1 })
  const [display, setDisplay] = useState(format(0))

  useEffect(() => {
    if (!triggerOnView || inView) motionValue.set(value)
  }, [value, inView, triggerOnView, motionValue])

  useEffect(() => {
    const unsubscribe = spring.on('change', (v) => setDisplay(format(v)))
    return unsubscribe
  }, [spring, format])

  return <span ref={ref} className={className}>{display}</span>
}
