import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../Reveal'
import SpotlightCard from '../ui/SpotlightCard'
import { featuresGrid } from '../../data/posRetailContent'

/**
 * The ten brand-drawn feature icons. They are flat SVGs with their own
 * dolphin-blue fill baked in, so they render as images and are not recoloured
 * on hover — the card moves instead.
 */
export default function FeatureIconGrid() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-dolphin-100/50 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">Features</p>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Everything a retail counter needs
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {featuresGrid.map(({ title, icon }, i) => (
            <motion.div
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 5) * 0.07 + Math.floor(i / 5) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <SpotlightCard className="group flex h-full flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 text-center transition duration-500 hover:-translate-y-2 hover:border-dolphin-200 hover:shadow-[0_30px_60px_-30px_rgba(8,71,128,0.4)]">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-dolphin-50 transition duration-500 group-hover:bg-dolphin-100">
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    width="34"
                    height="34"
                    loading="lazy"
                    decoding="async"
                    className="h-[34px] w-[34px] transition duration-500 group-hover:scale-110"
                  />
                </span>
                <span className="text-sm font-bold leading-5 text-ink">{title}</span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
