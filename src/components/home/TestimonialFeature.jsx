import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import Reveal from '../Reveal'
import AnimatedNumber from '../AnimatedNumber'
import { testimonials } from '../../data/homeContent'

const ROTATE_MS = 8000

export default function TestimonialFeature() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (paused || reduceMotion) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [paused, reduceMotion])

  const go = (delta) => setIndex((i) => (i + delta + testimonials.length) % testimonials.length)
  const active = testimonials[index]

  return (
    <section
      className="deep-sea relative isolate overflow-hidden px-5 py-24 lg:px-8 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Ambient counter photograph, deliberately far enough back to read as
          texture rather than as this particular merchant's store. */}
      <motion.img
        src="/homepage/industries/services.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.22]"
        initial={reduceMotion ? false : { scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-abyss-950 via-abyss-950/85 to-abyss-950/60" aria-hidden="true" />
      <div className="grid-lines-dark pointer-events-none absolute inset-0" aria-hidden="true" />
      <Quote
        className="pointer-events-none absolute -left-8 top-10 text-white/[0.04] lg:left-10"
        size={280}
        strokeWidth={1}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_.65fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-8 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-400">Merchant stories</p>
            </Reveal>

            <div className="min-h-[19rem] sm:min-h-[16rem]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 20, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={reduceMotion ? {} : { opacity: 0, y: -16, filter: 'blur(6px)' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-6 flex gap-1 text-dolphin-400">
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <Star key={i} size={17} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-balance text-2xl font-bold leading-[1.35] text-white sm:text-3xl lg:text-[2.4rem] lg:leading-[1.28]">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-dolphin-500 to-dolphin-700 text-base font-extrabold text-white">
                      {active.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-bold text-white">{active.name}</p>
                      <p className="text-sm text-slate-400">{active.location}</p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous story"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-dolphin-400 hover:bg-white/5"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next story"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-dolphin-400 hover:bg-white/5"
              >
                <ArrowRight size={17} />
              </button>
              <div className="ml-2 flex gap-1.5">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Story ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-dolphin-400' : 'w-4 bg-white/20 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Outcome card */}
          <Reveal direction="left" delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">What the math looks like</p>
              <p className="tabular mt-4 text-6xl font-extrabold leading-none text-white">
                $<AnimatedNumber value={17400} triggerOnView />
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                A year of processing fees on $50,000 in monthly card volume at a 2.9% effective
                rate. Dual pricing moves that cost off your margin.
              </p>
              <div className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm">
                {[
                  ['Setup time', '1–3 days'],
                  ['Contract length', 'None'],
                  ['Early exit fee', '$0'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-slate-400">{label}</span>
                    <span className="font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
