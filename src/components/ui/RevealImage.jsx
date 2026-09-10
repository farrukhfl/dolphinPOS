import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * Photo that wipes into view behind a clip-path curtain, then drifts on a slow
 * Ken Burns zoom while it stays on screen. `parallax` additionally slides the
 * image against the page scroll, which reads as depth on tall sections.
 *
 * The wrapper owns the aspect ratio and the overflow, so the image can be
 * oversized without ever pushing the layout around.
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

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax])

  return (
    <div ref={ref} className={`relative overflow-hidden ${aspect} ${className}`}>
      {/* Only overscan the image when parallax needs the slack. Without
          parallax it fills the frame exactly, so a photo whose subject runs
          to the edges is never trimmed. */}
      <motion.div
        className={parallax ? 'absolute inset-x-0 -inset-y-[8%]' : 'absolute inset-0'}
        style={reduceMotion || !parallax ? undefined : { y }}
        initial={reduceMotion ? false : { clipPath: 'inset(0 0 100% 0)' }}
        whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className={`h-full w-full object-cover ${imgClassName}`}
          // Settles at scale 1 so the finished state shows the whole frame
          initial={reduceMotion || !kenBurns ? false : { scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 2.4, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
      {overlay}
    </div>
  )
}
