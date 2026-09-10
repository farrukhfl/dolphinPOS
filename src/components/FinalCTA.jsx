import { motion, useReducedMotion } from 'framer-motion'
import { Phone, PlayCircle } from 'lucide-react'
import Button from './ui/Button'
import { useBookDemo } from '../lib/BookDemoContext'
import { PHONE, PHONE_TEL } from '../lib/nav'
import { heroTrustPoints, overviewVideoLabel } from '../data/homeContent'

export default function FinalCTA({
  title = 'Stop absorbing credit card fees today.',
  body = 'See how Dolphin POS pays for itself in the first month.',
  onWatchVideo,
}) {
  const { openModal } = useBookDemo()
  const reduceMotion = useReducedMotion()

  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="blue-glow relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-gradient-to-br from-dolphin-500 via-dolphin-600 to-dolphin-800 px-6 py-20 text-center sm:px-16 lg:py-24">
        <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-80" aria-hidden="true" />
        <motion.div
          className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl"
          animate={reduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-reef-400/25 blur-3xl animate-float-slower" aria-hidden="true" />

        <div className="relative z-10">
          <h2 className="text-balance mx-auto max-w-3xl text-3xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-dolphin-100">{body}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Button variant="light" onClick={openModal} className="shine w-full px-8 py-4 text-base sm:w-auto">
              Book a Demo
            </Button>
            {onWatchVideo ? (
              <button
                type="button"
                onClick={onWatchVideo}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:bg-white/10 sm:w-auto"
              >
                <PlayCircle size={18} /> {overviewVideoLabel}
              </button>
            ) : (
              <a
                href={PHONE_TEL}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:bg-white/10 sm:w-auto"
              >
                <Phone size={17} /> Call {PHONE}
              </a>
            )}
          </div>

          <ul className="mx-auto mt-9 flex max-w-lg flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-dolphin-100">
            {heroTrustPoints.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-reef-400" /> {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
