import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { industries } from '../data/industries'

const AUTO_ADVANCE_MS = 4500

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
    <section className="border-y border-slate-200 bg-white px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-xs font-bold tracking-[0.25em] text-slate-400">TRUSTED ACROSS EVERY KIND OF RETAIL</p>

        <div
          className="flex flex-wrap justify-center gap-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
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

        <div
          className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 shadow-2xl shadow-slate-900/10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/2] w-full sm:aspect-[16/8]"
            >
              <img src={item.image} alt={`Dolphin POS at a ${item.name.toLowerCase()} checkout counter`} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 p-6 sm:p-8">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-dolphin-600 text-white shadow-lg sm:h-12 sm:w-12">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">{item.name}</h3>
                  <p className="mt-0.5 max-w-xl text-sm leading-6 text-white/80 sm:text-base">{item.blurb}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
