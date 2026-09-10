import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { PlayCircle, ShieldCheck, Sparkles, Star, TrendingUp, Wifi } from 'lucide-react'
import Button from '../ui/Button'
import AnimatedNumber from '../AnimatedNumber'
import TiltCard from '../ui/TiltCard'
import { heroStats, heroTrustPoints, overviewVideoLabel } from '../../data/homeContent'
import { useBookDemo } from '../../lib/BookDemoContext'

const HEADLINE_LEAD = ['Stop', 'absorbing', 'credit', 'card', 'fees.']

/*
  All three chips live in the corners. The render carries its own Cash Price
  card on the left and Card Price card on the right, both at mid-height, and
  those are the whole point of the image — anything parked beside the device
  vertically centred covers one of them.
*/
const CHIPS = [
  {
    icon: TrendingUp,
    title: "Today's Sales",
    note: '+12.4% vs. last week',
    tone: 'bg-emerald-50 text-emerald-600',
    noteTone: 'font-semibold text-emerald-600',
    pos: '-right-3 top-8 lg:-right-7',
    delay: 0.75,
    drift: '0s',
  },
  {
    icon: Wifi,
    title: 'Offline Ready',
    note: 'Keeps ringing sales',
    tone: 'bg-amber-50 text-amber-600',
    noteTone: 'text-slate-400',
    pos: '-left-3 top-14 lg:-left-7',
    delay: 0.9,
    drift: '0.7s',
  },
  {
    icon: ShieldCheck,
    title: 'PCI Compliant',
    note: 'Bank-level security',
    tone: 'bg-dolphin-50 text-dolphin-700',
    noteTone: 'text-slate-400',
    pos: '-right-2 bottom-12 lg:-right-5',
    delay: 1.05,
    drift: '1.4s',
  },
]

export default function Hero({ onWatchVideo }) {
  const { openModal } = useBookDemo()
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 70])

  return (
    <section
      ref={ref}
      className="aurora relative overflow-hidden bg-gradient-to-br from-dolphin-50 via-white to-dolphin-50/60 px-5 pb-20 pt-10 sm:pt-14 lg:px-8 lg:pb-28 lg:pt-16"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,#000,transparent_70%)]" aria-hidden="true" />

      {/*
        Two copy blocks rather than one, so phones can slot the product visual
        between the buttons and the proof points. That puts the hardware just
        under the primary call to action instead of below three more blocks of
        text. On desktop both blocks stack back into column one.
      */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-10">
        <div className="order-1 text-center lg:col-start-1 lg:row-start-1 lg:text-left">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-dolphin-200 bg-white/85 px-4 py-1.5 text-xs font-bold text-dolphin-700 shadow-sm backdrop-blur lg:mx-0"
          >
            <span className="flex text-dolphin-500">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="currentColor" strokeWidth={0} />)}
            </span>
            Rated 4.9/5 by 1,000+ merchants
          </motion.div>

          <h1 className="mx-auto mt-7 max-w-2xl text-balance text-[2.6rem] font-extrabold leading-[1.04] text-ink sm:text-6xl lg:mx-0 lg:text-[3.15rem] xl:text-[4.05rem]">
            {HEADLINE_LEAD.map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.22em] inline-block"
                initial={reduceMotion ? false : { opacity: 0, y: 26, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="text-gradient inline-block"
              initial={reduceMotion ? false : { opacity: 0, y: 26, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            >
              Keep every dollar you earn.
            </motion.span>
          </h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8 lg:mx-0"
          >
            Dolphin POS shows the cash price beside the card price on every ticket, so card
            processing fees stop coming out of your margin.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-3.5 lg:justify-start"
          >
            <Button onClick={openModal} className="shine w-full px-7 py-3.5 text-base sm:w-auto">Book a Demo</Button>
            <button
              type="button"
              onClick={onWatchVideo}
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-bold text-ink shadow-sm backdrop-blur transition duration-300 hover:border-dolphin-600 hover:bg-white hover:text-dolphin-700 sm:w-auto"
            >
              <span className="relative flex h-6 w-6 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-dolphin-500/25 animate-pulse-ring" aria-hidden="true" />
                <PlayCircle size={19} className="relative text-dolphin-600" />
              </span>
              {overviewVideoLabel}
            </button>
          </motion.div>
        </div>

        {/*
          The product itself is the hero visual now. The render ships on a
          black ground, so it sits on a dark plate where it reads as a lit
          object rather than a cut-out, and the plate tilts toward the cursor.
        */}
        <motion.div
          style={{ y: visualY }}
          className="relative order-2 mx-auto w-full max-w-md lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:max-w-lg lg:self-center"
        >
          <TiltCard max={6} scale={1.015} className="relative">
            <div
              className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-abyss-700 via-abyss-900 to-black shadow-[0_50px_110px_-40px_rgba(4,11,19,0.7)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
              <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-dolphin-500/30 blur-3xl animate-float-slow" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-reef-400/20 blur-3xl animate-float-slower" aria-hidden="true" />

              <motion.img
                src="/homepage/hero-banner.webp"
                alt="A Dolphin POS handheld terminal at checkout showing the cash price of $363.83 beside the card price of $376.56"
                width="1024"
                height="1536"
                fetchpriority="high"
                decoding="async"
                className="relative mx-auto block w-[88%] max-w-[23rem] py-6 sm:py-8"
                style={reduceMotion ? undefined : { transform: 'translateZ(50px)' }}
                initial={reduceMotion ? false : { opacity: 0, y: 44, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Signal chips sit outside the plate so they can overhang its edge */}
            {CHIPS.map(({ icon: Icon, title, note, tone, noteTone, pos, delay, drift }) => (
              <motion.div
                key={title}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, delay }}
                style={{
                  ...(reduceMotion ? {} : { transform: 'translateZ(95px)' }),
                  animationDelay: drift,
                }}
                className={`animate-bob absolute hidden items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-xl sm:flex ${pos}`}
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${tone}`}>
                  <Icon size={16} />
                </span>
                <div className="text-left">
                  <p className="text-[11px] font-bold leading-tight text-ink">{title}</p>
                  <p className={`text-[10px] leading-tight ${noteTone}`}>{note}</p>
                </div>
              </motion.div>
            ))}
          </TiltCard>
        </motion.div>

        <div className="order-3 text-center lg:col-start-1 lg:row-start-2 lg:text-left">
          <motion.ul
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500 lg:mt-6 lg:justify-start"
          >
            {heroTrustPoints.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <Sparkles size={13} className="text-dolphin-500" /> {point}
              </li>
            ))}
          </motion.ul>

          {/* Above the fold, so these count up on load rather than on scroll */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mx-auto mt-7 grid max-w-md grid-cols-3 gap-4 border-t border-slate-200 pt-7 sm:gap-6 lg:mx-0 lg:mt-8 lg:pt-8"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="tabular text-2xl font-extrabold text-ink sm:text-3xl">
                  {stat.prefix}<AnimatedNumber value={stat.value} format={stat.format} />{stat.suffix}
                </p>
                <p className="mt-1 text-xs font-semibold leading-4 text-slate-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
