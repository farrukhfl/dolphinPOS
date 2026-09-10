import { useReducedMotion } from 'framer-motion'

const speeds = {
  slow: 'animate-marquee-slow',
  normal: 'animate-marquee',
  reverse: 'animate-marquee-reverse',
}

/**
 * Seamless infinite rail. Children are rendered twice and the track slides by
 * exactly -50%, so the loop has no visible seam. Pauses on hover, and renders
 * as a plain scrollable row when the visitor prefers reduced motion.
 */
export default function Marquee({ children, speed = 'normal', className = '', fade = true }) {
  const reduceMotion = useReducedMotion()
  const items = <div className="flex shrink-0 items-center">{children}</div>

  if (reduceMotion) {
    return (
      <div className={`flex gap-4 overflow-x-auto ${className}`}>
        {items}
      </div>
    )
  }

  return (
    <div className={`marquee-pause overflow-hidden ${fade ? 'fade-x' : ''} ${className}`}>
      <div className={`marquee-track ${speeds[speed]}`}>
        {items}
        <div className="flex shrink-0 items-center" aria-hidden="true">{children}</div>
      </div>
    </div>
  )
}
