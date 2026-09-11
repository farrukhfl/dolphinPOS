import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Reveal from '../Reveal'
import RevealImage from '../ui/RevealImage'
import { howItWorks } from '../../data/homeContent'

const DESKTOP = '(min-width: 1024px)'

/** Tracks the breakpoint, because the dimming below cannot be a CSS class. */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(DESKTOP).matches,
  )

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP)
    const onChange = (e) => setIsDesktop(e.matches)
    mq.addEventListener('change', onChange)
    setIsDesktop(mq.matches)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return isDesktop
}

function Step({ item, index, isActive, onEnter, dimInactive }) {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      onViewportEnter={() => onEnter(index)}
      viewport={{ margin: '-45% 0px -45% 0px' }}
      className="relative py-10 lg:py-20"
    >
      <div className="flex gap-5 sm:gap-7">
        <div className="relative flex flex-col items-center">
          <motion.span
            animate={{
              backgroundColor: isActive ? '#0C79F7' : '#ffffff',
              color: isActive ? '#ffffff' : '#94a3b8',
              borderColor: isActive ? '#0C79F7' : '#e2e8f0',
              scale: isActive ? 1.06 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="tabular z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 text-sm font-extrabold shadow-sm"
          >
            {item.step}
          </motion.span>
        </div>

        {/* Dimming only makes sense next to the pinned pane. On phones each
            step carries its own image, so fading two of the three would just
            read as disabled content. */}
        <motion.div
          animate={{ opacity: !dimInactive || isActive ? 1 : 0.45 }}
          transition={{ duration: 0.4 }}
          className="pt-1"
        >
          <h3 className="text-2xl font-bold text-ink sm:text-3xl">{item.title}</h3>
          <p className="mt-3 max-w-md text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{item.body}</p>

          {/* Mobile-only inline visual, since the sticky pane is desktop-only */}
          <RevealImage
            src={item.image}
            alt=""
            aspect="aspect-[3/2]"
            className="mt-6 rounded-2xl border border-slate-200 shadow-lg lg:hidden"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

/**
 * Scroll-linked walkthrough: the step list scrolls while a single framed
 * visual stays pinned and cross-fades to match whichever step is centered.
 */
export default function StickySteps() {
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const isDesktop = useIsDesktop()
  const current = howItWorks[active] ?? howItWorks[0]

  return (
    <section className="relative px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">How it works</p>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Three steps at the counter. Zero steps for your staff.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The whole thing happens inside a normal checkout. Nobody has to remember a rule.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-20">
          {/* Sticky visual */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              {/* 3:2 matches the source artwork exactly, so object-cover has
                  nothing to crop and the shopper and cashier at the outer
                  edges of each frame both stay in shot. */}
              <div className="relative aspect-[3/2] overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-[0_40px_90px_-40px_rgba(8,71,128,0.5)]">
                {/* Stacked and crossfaded so the pane never collapses mid-swap */}
                <AnimatePresence initial={false}>
                  <motion.img
                    key={current.image}
                    src={current.image}
                    alt={current.title}
                    // Pushes out rather than in, so it settles at scale 1 with
                    // the full frame visible instead of a zoomed-in crop.
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.07 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduceMotion ? {} : { opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      scale: { duration: 6, ease: [0.16, 1, 0.3, 1] },
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                    decoding="async"
                  />
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-7 pt-16">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.title}
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? {} : { opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-dolphin-300">Step {current.step}</p>
                      <p className="mt-1.5 text-xl font-bold text-white">{current.title}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Progress rail */}
              <div className="mt-6 flex gap-2">
                {howItWorks.map((s, i) => (
                  <div key={s.step} className="h-1 flex-1 overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      className="h-full rounded-full bg-dolphin-600"
                      animate={{ scaleX: i <= active ? 1 : 0 }}
                      style={{ transformOrigin: 'left' }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="divide-y divide-slate-100 lg:divide-y-0">
            {howItWorks.map((item, i) => (
              <Step
                key={item.step}
                item={item}
                index={i}
                isActive={active === i}
                onEnter={setActive}
                dimInactive={isDesktop}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
