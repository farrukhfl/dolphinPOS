import { useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import Reveal from '../Reveal'
import Button from '../ui/Button'
import { businessTabs } from '../../data/posSystemsContent'

/**
 * Business-type switcher. The panel image crossfades rather than swapping, and
 * settles at scale 1 so each frame ends fully visible instead of held at a
 * zoomed crop.
 */
export default function BusinessTabs() {
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const tab = businessTabs[active]

  return (
    <section className="overflow-hidden bg-slate-50 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">Find your fit</p>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Choose your business type
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-1.5 rounded-full border border-slate-200 bg-white p-1.5">
            {businessTabs.map(({ key, label, icon: Icon }, i) => (
              <button
                key={key}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-300 ${
                  active === i ? 'text-white' : 'text-slate-500 hover:text-dolphin-700'
                }`}
              >
                {active === i && (
                  <m.span
                    layoutId="business-tab-pill"
                    className="absolute inset-0 rounded-full bg-dolphin-700"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2"><Icon size={16} /> {label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft lg:grid lg:grid-cols-2">
            <div className="relative aspect-[3/2] w-full overflow-hidden lg:aspect-auto lg:min-h-[26rem]">
              {/* Stacked and crossfaded so the panel never flashes empty */}
              <AnimatePresence initial={false}>
                <m.img
                  key={tab.image}
                  src={tab.image}
                  alt={tab.alt}
                  loading="lazy"
                  decoding="async"
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.07 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? {} : { opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    scale: { duration: 4, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="p-8 sm:p-10">
              <AnimatePresence mode="wait">
                <m.div
                  key={tab.key}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? {} : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-2xl font-extrabold text-ink sm:text-3xl">{tab.label}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{tab.body}</p>

                  <ul className="mt-6 grid gap-3">
                    {tab.features.map((feature, i) => (
                      <m.li
                        key={feature}
                        initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.08 + i * 0.06 }}
                        className="flex items-start gap-2.5 text-sm font-semibold text-ink"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dolphin-100 text-dolphin-700">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {feature}
                      </m.li>
                    ))}
                  </ul>
                </m.div>
              </AnimatePresence>

              <Button to="/pricing" className="shine mt-8">Pick Your Plan</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
