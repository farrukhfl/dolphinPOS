import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Reveal from '../Reveal'
import { pricingSteps } from '../../data/posRetailContent'

/**
 * Three-step checkout flow. The connecting rail draws itself once the row is
 * in view, then each panel lifts in behind it.
 *
 * The three artworks have different shapes — a wide price card, a tall
 * receipt, a wide chart — so each sits in a fixed-height box with
 * object-contain rather than a shared aspect ratio that would crop two of
 * the three.
 */
export default function PricingFlow() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-slate-50 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">Live at checkout</p>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Retail&apos;s smartest pricing strategy
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Dual pricing applies the cash and card price at checkout, recovering processing
              costs without changing how you do business.
            </p>
          </div>
        </Reveal>

        <div ref={ref} className="relative mt-20">
          {/* Rail behind the panels, drawn left to right */}
          <div className="absolute left-[16%] right-[16%] top-9 hidden h-0.5 overflow-hidden rounded-full bg-dolphin-100 md:block" aria-hidden="true">
            <motion.div
              className="h-full w-full rounded-full bg-gradient-to-r from-dolphin-400 to-dolphin-600"
              style={{ transformOrigin: 'left' }}
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {pricingSteps.map(({ title, body, image }, i) => (
              <motion.div
                key={title}
                className="relative flex flex-col items-center text-center"
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-4 border-slate-50 bg-dolphin-600 text-xl font-extrabold text-white shadow-lg shadow-dolphin-900/25"
                  initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.3 + i * 0.18 }}
                >
                  {i + 1}
                </motion.span>

                <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                {/* Reserved height keeps the three image panels on one line
                    even when a caption wraps to two */}
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600 md:min-h-[3rem]">{body}</p>

                <div className="group mt-6 flex w-full flex-1 items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition duration-500 hover:-translate-y-1.5 hover:border-dolphin-200 hover:shadow-[0_36px_70px_-34px_rgba(8,71,128,0.45)]">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="h-48 w-auto max-w-full object-contain transition duration-500 group-hover:scale-[1.06] sm:h-60"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
