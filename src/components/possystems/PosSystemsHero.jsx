import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import TiltCard from '../ui/TiltCard'
import { posSystemsHero } from '../../data/posSystemsContent'
import { useBookDemo } from '../../lib/BookDemoContext'

const WORDS = ['Complete', 'business', 'control.']
const TRUST = ['No long-term contract', 'Free card reader', 'Live in 1-3 days']

export default function PosSystemsHero() {
  const { openModal } = useBookDemo()
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 65])

  return (
    <section
      ref={ref}
      className="aurora relative overflow-hidden bg-gradient-to-br from-dolphin-50 via-white to-dolphin-50/60 px-5 pb-20 pt-12 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,#000,transparent_70%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <m.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700"
          >
            POS systems
          </m.p>

          <h1 className="mx-auto max-w-2xl text-balance text-[2.5rem] font-extrabold leading-[1.05] text-ink sm:text-5xl lg:mx-0 lg:text-[3.5rem]">
            {WORDS.map((word, i) => (
              <m.span
                key={word}
                className="mr-[0.22em] inline-block"
                initial={reduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.05 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </m.span>
            ))}
            <m.span
              className="text-gradient inline-block"
              initial={reduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              Sell more, keep more.
            </m.span>
          </h1>

          <m.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0"
          >
            Sales, inventory, staff and payments in one system, with dual pricing built into
            every terminal from the day it arrives.
          </m.p>

          <m.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3.5 lg:justify-start"
          >
            <Button onClick={openModal} className="shine w-full px-7 py-3.5 text-base sm:w-auto">Book a Demo</Button>
            <Button to="/pricing" variant="secondary" className="w-full px-7 py-3.5 text-base sm:w-auto">See POS Plans</Button>
          </m.div>

          <m.ul
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500 lg:justify-start"
          >
            {TRUST.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <Sparkles size={13} className="text-dolphin-500" /> {point}
              </li>
            ))}
          </m.ul>
        </div>

        {/* No plate here. This render is a transparent cutout whose own
            capability labels are already coloured pills — a dark or tinted
            frame behind it fights them. A drop-shadow follows its real edge. */}
        <m.div style={{ y: visualY }} className="relative mx-auto w-full max-w-2xl lg:mx-0">
          <TiltCard max={5} scale={1.02}>
            <m.img
              src={posSystemsHero.image}
              alt={posSystemsHero.alt}
              width="1536"
              height="1024"
              fetchpriority="high"
              decoding="async"
              className="block w-full [filter:drop-shadow(0_26px_40px_rgba(8,71,128,0.22))]"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.05, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            />
          </TiltCard>
        </m.div>
      </div>
    </section>
  )
}
