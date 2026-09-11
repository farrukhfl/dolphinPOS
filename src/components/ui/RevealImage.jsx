import { useRef } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * Photo that wipes into view behind a clip-path curtain, then drifts on a slow
 * Ken Burns zoom. `parallax` additionally slides the image against the page
 * scroll, which reads as depth on tall sections.
 *
 * The in-view trigger is deliberately attached to the OUTER wrapper, not to
 * the clipped layer, and the animations are driven from that one flag.
 * Intersection Observer measures an element after its clip is applied, so a
 * layer starting at `inset(0 0 100% 0)` reports zero visible area — using it
 * as its own `whileInView` trigger deadlocks: the clip never opens because
 * the observer never fires, and the observer never fires because the clip is
 * shut. The wrapper is never clipped, so it always reports honestly.
 */
export default function RevealImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspect = 'aspect-[4/3]',
  parallax = 0,
  kenBurns = true,
  delay = 0,
  overlay = null,
  loading = 'lazy',
}) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax])

  const open = reduceMotion || inView

  return (
    <div ref={ref} className={`relative overflow-hidden ${aspect} ${className}`}>
      {/* Only overscan the image when parallax needs the slack. Without
          parallax it fills the frame exactly, so a photo whose subject runs
          to the edges is never trimmed. */}
      <motion.div
        className={parallax ? 'absolute inset-x-0 -inset-y-[8%]' : 'absolute inset-0'}
        style={reduceMotion || !parallax ? undefined : { y }}
        initial={false}
        animate={{ clipPath: open ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)' }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className={`h-full w-full object-cover ${imgClassName}`}
          initial={false}
          // Settles at scale 1 so the finished state shows the whole frame
          animate={{ scale: open || !kenBurns ? 1 : 1.08 }}
          transition={{ duration: 2.4, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
      {overlay}
    </div>
  )
}
