import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { industries } from '../data/industries'

const AUTO_ADVANCE_MS = 4000

export default function IndustrySpotlight() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return undefined
    const id = setInterval(() => setActive((i) => (i + 1) % industries.length), AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [paused])

  const item = industries[active]
  const Icon = item.icon

  return (
    <section className="border-y border-slate-200 bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-center text-xs font-bold tracking-[0.25em] text-slate-400">TRUSTED ACROSS EVERY KIND OF RETAIL</p>

        <div
          className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {industries.map((ind, i) => {
              const isActive = i === active
              return (
                <button
                  key={ind.name}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`relative overflow-hidden rounded-full border px-4 py-2 text-sm font-bold transition ${isActive ? 'border-dolphin-600 bg-dolphin-600 text-white' : 'border-slate-200 text-slate-500 hover:border-dolphin-300 hover:text-dolphin-700'}`}
                >
                  {ind.name}
                  {isActive && !paused && (
                    <motion.span
                      key={active}
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-white/70"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
                      style={{ transformOrigin: 'left' }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-dolphin-50 p-6"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-dolphin-600 text-white">
                <Icon size={26} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{item.name}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.blurb}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
