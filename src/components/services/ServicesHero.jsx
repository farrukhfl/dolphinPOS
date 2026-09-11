import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { CalendarCheck, Sparkles, Wallet } from 'lucide-react'
import Button from '../ui/Button'
import TiltCard from '../ui/TiltCard'
import { servicesHero } from '../../data/servicesContent'
import { useBookDemo } from '../../lib/BookDemoContext'

const WORDS = ['Work', 'anywhere.']

const CHIPS = [
  { icon: CalendarCheck, title: 'Booked in advance', note: 'Or walked in today', tone: 'bg-dolphin-50 text-dolphin-700', pos: '-left-3 top-10 lg:-left-7', drift: '0s' },
  { icon: Wallet, title: 'Paid on the spot', note: 'Card, cash or invoice', tone: 'bg-emerald-50 text-emerald-600', pos: '-right-3 bottom-12 lg:-right-7', drift: '1.1s' },
]

const TRUST = ['No long-term contract', 'Free card reader', 'Live in 1-3 days']

export default function ServicesHero() {
  const { openModal } = useBookDemo()
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 60])

  return (
    <section
      ref={ref}
      className="aurora relative overflow-hidden bg-gradient-to-br from-dolphin-50 via-white to-dolphin-50/60 px-5 pb-20 pt-12 sm:pt-16 lg:px-8 lg:pb-28 lg:pt-20"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,#000,transparent_70%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700"
          >
            POS for service businesses
          </motion.p>

          <h1 className="mx-auto max-w-2xl text-balance text-[2.5rem] font-extrabold leading-[1.05] text-ink sm:text-5xl lg:mx-0 lg:text-[3.6rem]">
            {WORDS.map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.22em] inline-block"
                initial={reduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.05 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="text-gradient inline-block"
              initial={reduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              Get paid everywhere.
            </motion.span>
          </h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0"
          >
            Book the job, do the work, take payment on site. Dual pricing keeps card processing
            costs off the invoice and out of your margin.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3.5 lg:justify-start"
          >
            <Button onClick={openModal} className="shine w-full px-7 py-3.5 text-base sm:w-auto">Book a Demo</Button>
            <Button to="/pricing" variant="secondary" className="w-full px-7 py-3.5 text-base sm:w-auto">See POS Plans</Button>
          </motion.div>

          <motion.ul
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
          </motion.ul>
        </div>

        {/* The banner is a mosaic of real counters, so it needs no framing
            beyond a soft plate to sit the rounded tiles on. */}
        <motion.div style={{ y: visualY }} className="relative mx-auto w-full max-w-2xl lg:mx-0">
          <TiltCard max={5} scale={1.015} className="relative">
            <div
              className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-abyss-800 via-abyss-900 to-black p-1.5 shadow-[0_50px_110px_-40px_rgba(4,11,19,0.65)] sm:p-2"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="pointer-events-none absolute -left-16 top-1/4 h-64 w-64 rounded-full bg-dolphin-500/25 blur-3xl animate-float-slow" aria-hidden="true" />
              <motion.img
                src={servicesHero.image}
                alt={servicesHero.alt}
                width="1536"
                height="1024"
                fetchpriority="high"
                decoding="async"
                className="relative block w-full rounded-[26px]"
                style={reduceMotion ? undefined : { transform: 'translateZ(40px)' }}
                initial={reduceMotion ? false : { opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {CHIPS.map(({ icon: Icon, title, note, tone, pos, drift }, i) => (
              <motion.div
                key={title}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.7 + i * 0.16 }}
                style={{
                  ...(reduceMotion ? {} : { transform: 'translateZ(90px)' }),
                  animationDelay: drift,
                }}
                className={`animate-bob absolute hidden items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-xl sm:flex ${pos}`}
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${tone}`}>
                  <Icon size={16} />
                </span>
                <div className="text-left">
                  <p className="text-[11px] font-bold leading-tight text-ink">{title}</p>
                  <p className="text-[10px] leading-tight text-slate-400">{note}</p>
                </div>
              </motion.div>
            ))}
          </TiltCard>
        </motion.div>
      </div>
    </section>
  )
}
