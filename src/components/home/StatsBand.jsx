import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../Reveal'
import AnimatedNumber from '../AnimatedNumber'
import { bigStats } from '../../data/homeContent'

/**
 * Full-bleed photo band. The image sits in an oversized layer that slides
 * against the page scroll, so the counter behind the numbers drifts as you
 * pass it. Overlays are stacked heavily enough that the type stays legible
 * over any part of the photograph.
 */
export default function StatsBand() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.12, 1.05])

  return (
    <section ref={ref} className="relative isolate overflow-hidden px-5 py-28 lg:px-8 lg:py-40">
      <motion.div
        className="absolute inset-0 -z-20 h-[124%] -translate-y-[12%]"
        style={reduceMotion ? undefined : { y, scale }}
        aria-hidden="true"
      >
        <img
          src="/homepage/industries/convenience-store.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Legibility stack, kept light enough that the counter still reads:
          a brand wash, a soft vertical darkening, then a vignette that only
          deepens behind the outer columns. */}
      <div className="absolute inset-0 -z-10 bg-dolphin-900/45 mix-blend-multiply" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-abyss-950/70 via-abyss-900/40 to-abyss-950/75" aria-hidden="true" />
      {/* Darkens only the horizontal band the numbers sit in, so the top and
          bottom of the photograph stay bright */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(4,11,19,0.62) 32%, rgba(4,11,19,0.62) 68%, transparent 100%)' }}
        aria-hidden="true"
      />
      <div className="grid-lines-dark pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-12 text-center text-xs font-bold uppercase tracking-[0.22em] text-dolphin-300">
            What switching actually changes
          </p>
        </Reveal>

        <div className="grid gap-12 sm:grid-cols-3 sm:gap-6">
          {bigStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12}>
              <div className="text-center sm:border-l sm:border-white/20 sm:px-6 sm:first:border-l-0 lg:px-10">
                <p className="tabular text-5xl font-extrabold leading-none text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-7xl">
                  {stat.prefix}
                  <AnimatedNumber value={stat.value} format={stat.format} triggerOnView />
                  {stat.suffix}
                </p>
                <p className="mx-auto mt-4 max-w-xs text-sm font-semibold leading-6 text-slate-200">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
