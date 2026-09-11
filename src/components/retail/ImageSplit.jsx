import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'
import Reveal from '../Reveal'
import Button from '../ui/Button'
import TiltCard from '../ui/TiltCard'
import { useBookDemo } from '../../lib/BookDemoContext'

/**
 * Product render on one side, checklist on the other. `reverse` flips the
 * sides so two of these stacked read as an alternating rhythm rather than a
 * repeated block. The render drifts against the page scroll for depth.
 */
export default function ImageSplit({
  eyebrow,
  title,
  body,
  image,
  alt,
  points,
  reverse = false,
  tone = 'light',
}) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { openModal } = useBookDemo()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 40, reduceMotion ? 0 : -40])

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32 ${tone === 'tint' ? 'bg-slate-50' : ''}`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <motion.div
          style={{ y }}
          className={`relative ${reverse ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}
        >
          {/* No frame around the render. These artworks ship with their own
              rounded light-blue ground, and wrapping them in a second tinted
              plate drew a visible box inside a box. A drop-shadow filter
              follows the image's real alpha edge instead. */}
          <TiltCard max={5} scale={1.02}>
            <motion.img
              src={image}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="block w-full [filter:drop-shadow(0_30px_45px_rgba(8,71,128,0.28))]"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.04, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </TiltCard>
        </motion.div>

        <div className={reverse ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
          <Reveal direction={reverse ? 'left' : 'right'}>
            {eyebrow && (
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">{eyebrow}</p>
            )}
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-[2.7rem]">
              {title}
            </h2>
            {body && <p className="mt-5 text-lg leading-8 text-slate-600">{body}</p>}
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="mt-8 space-y-1">
              {points.map((point, i) => (
                <motion.li
                  key={point}
                  initial={reduceMotion ? false : { opacity: 0, x: reverse ? -16 : 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group flex items-start gap-3.5 rounded-2xl p-3 transition duration-300 hover:bg-dolphin-50/70"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dolphin-100 text-dolphin-700 transition duration-300 group-hover:scale-110 group-hover:bg-dolphin-600 group-hover:text-white">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="leading-7 text-slate-600">{point}</span>
                </motion.li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <Button onClick={openModal} className="shine">Book a Demo</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
