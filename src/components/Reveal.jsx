import { motion, useReducedMotion } from 'framer-motion'

const offsets = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
}

export default function Reveal({ children, className = '', direction = 'up', delay = 0, amount = 0.15 }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, ...offsets[direction] }} whileInView={reduceMotion ? {} : { opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}
