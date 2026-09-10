import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import Reveal from '../Reveal'
import Button from '../ui/Button'
import { industries } from '../../data/industries'
import { useBookDemo } from '../../lib/BookDemoContext'

const AUTO_ADVANCE_MS = 6000

export default function IndustryTabs() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const { openModal } = useBookDemo()

  useEffect(() => {
    if (paused || reduceMotion) return undefined
    const id = setInterval(() => setActive((i) => (i + 1) % industries.length), AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [paused, reduceMotion])

  const item = industries[active]
  const Icon = item.icon

  return (
    <section
      className="overflow-hidden bg-slate-50 px-5 py-24 lg:px-8 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">Built for your counter</p>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Every category runs differently. So does every setup.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Pick your business and see the register you would actually get.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-10">
          {/* Vertical selector — desktop */}
          <Reveal direction="right" className="hidden lg:block">
            <div className="space-y-1.5">
              {industries.map((ind, i) => {
                const isActive = i === active
                const TabIcon = ind.icon
                return (
                  <button
                    key={ind.name}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group relative flex w-full items-center gap-3.5 overflow-hidden rounded-2xl px-4 py-3.5 text-left transition duration-300 ${isActive ? 'bg-white shadow-soft' : 'hover:bg-white/60'}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="industry-rail"
                        className="absolute inset-y-2 left-0 w-1 rounded-full bg-dolphin-600"
                        transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                      />
                    )}
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition duration-300 ${isActive ? 'bg-dolphin-600 text-white' : 'bg-white text-slate-400 group-hover:text-dolphin-600'}`}>
                      <TabIcon size={18} />
                    </span>
                    <span className={`text-sm font-bold transition ${isActive ? 'text-ink' : 'text-slate-500'}`}>{ind.name}</span>

                    {isActive && !paused && !reduceMotion && (
                      <motion.span
                        key={active}
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-dolphin-200"
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
          </Reveal>

          {/* Horizontal selector — mobile */}
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:hidden">
            {industries.map((ind, i) => (
              <button
                key={ind.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${i === active ? 'border-dolphin-600 bg-dolphin-600 text-white' : 'border-slate-200 bg-white text-slate-500'}`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <Reveal direction="left">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_36px_80px_-40px_rgba(8,71,128,0.4)]">
              {/* Matches the source artwork's 3:2 so the signage at the top of
                  each counter shot is not sliced off */}
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                {/* Crossfade, not mode="wait" — the images are stacked absolutely,
                    so swapping one out first would flash the empty panel. */}
                <AnimatePresence initial={false}>
                  <motion.img
                    key={item.image}
                    src={item.image}
                    alt={`Dolphin POS at a ${item.name.toLowerCase()} checkout counter`}
                    // Eases out to scale 1 well inside the auto-advance
                    // interval, so each frame is fully visible while it rests
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.07 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduceMotion ? {} : { opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                      scale: { duration: 4, ease: [0.16, 1, 0.3, 1] },
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex items-end gap-4 p-6 sm:p-8">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-dolphin-600 text-white shadow-lg">
                    <Icon size={22} />
                  </span>
                  <div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={item.name}
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduceMotion ? {} : { opacity: 0, y: -8 }}
                        transition={{ duration: 0.35 }}
                      >
                        <h3 className="text-xl font-bold text-white sm:text-2xl">{item.name}</h3>
                        <p className="mt-1 max-w-lg text-sm leading-6 text-white/80">{item.blurb}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Turned on for you</p>
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={item.name}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? {} : { opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-4 grid gap-3 sm:grid-cols-2"
                  >
                    {item.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.06 }}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dolphin-100 text-dolphin-700">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>

                <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-6">
                  <Button onClick={openModal} className="shine">See it on your counter</Button>
                  <p className="text-xs font-semibold text-slate-400">Setup in 1&ndash;3 business days</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
