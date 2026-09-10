import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowUpRight, CloudOff, Layers, LineChart, Lock, Plug, RefreshCw, Store,
} from 'lucide-react'
import Reveal from '../Reveal'
import SpotlightCard from '../ui/SpotlightCard'

/** Animated proof for the hero bento tile: fees on a traditional POS vs. Dolphin. */
function FeeBars() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduceMotion = useReducedMotion()

  const bars = [
    { label: 'Traditional POS', value: '2.9% + 30¢', width: '86%', tone: 'bg-gradient-to-r from-rose-500/80 to-rose-400/60', text: 'text-rose-200' },
    { label: 'Dolphin POS', value: '$0', width: '8%', tone: 'bg-gradient-to-r from-reef-400 to-dolphin-400', text: 'text-reef-400' },
  ]

  return (
    <div ref={ref} className="mt-auto space-y-5 pt-10">
      {bars.map((bar, i) => (
        <div key={bar.label}>
          <div className="mb-2 flex items-center justify-between text-xs font-bold">
            <span className="text-slate-400">{bar.label}</span>
            <span className={`tabular ${bar.text}`}>{bar.value}</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.07]">
            <motion.div
              className={`h-full rounded-full ${bar.tone}`}
              initial={reduceMotion ? { width: bar.width } : { width: 0 }}
              animate={inView ? { width: bar.width } : {}}
              transition={{ duration: 1.1, delay: 0.15 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      ))}
      <p className="pt-1 text-xs leading-5 text-slate-500">
        Monthly cost on $50,000 in card volume. The difference lands in your account, not the processor&apos;s.
      </p>
    </div>
  )
}

/** Small looping uptime strip for the offline tile. */
function OfflineStrip() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="mt-6 flex items-end gap-1.5" aria-hidden="true">
      {Array.from({ length: 22 }).map((_, i) => {
        const dropped = i === 9 || i === 10
        return (
          <motion.span
            key={i}
            className={`w-full rounded-sm ${dropped ? 'bg-amber-400/70' : 'bg-dolphin-400/60'}`}
            style={{ height: `${dropped ? 14 : 10 + ((i * 37) % 24)}px` }}
            initial={reduceMotion ? false : { scaleY: 0.2, opacity: 0.3 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.03 }}
          />
        )
      })}
    </div>
  )
}

const SMALL_TILES = [
  { title: 'Inventory that counts itself', body: 'Live stock levels, low-stock alerts, and vendor tracking across every register.', icon: Layers },
  { title: 'One dashboard, every location', body: 'Pricing, staff permissions, and reporting for all your stores in one place.', icon: LineChart },
  { title: 'Connects to what you use', body: 'Accounting, eCommerce, and loyalty tools plug straight in — no middleware.', icon: Plug },
]

export default function PlatformBento() {
  return (
    <section className="deep-sea relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid-lines-dark pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-400">The platform</p>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              One system that runs the register and{' '}
              <span className="text-gradient-light">protects the margin.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
              Not a payments add-on bolted onto a POS. Dual pricing is wired into the checkout
              itself, so it works on every sale without anyone thinking about it.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {/* Hero tile */}
          <Reveal className="lg:col-span-7">
            <SpotlightCard dark className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition duration-500 hover:border-dolphin-400/40 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-dolphin-500/15 text-dolphin-300 ring-1 ring-inset ring-dolphin-400/25">
                <RefreshCw size={22} />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-white sm:text-[1.7rem]">Dual pricing that runs itself</h3>
              <p className="mt-3 max-w-lg leading-7 text-slate-400">
                Cash and card prices are calculated at the moment of sale and printed on the
                receipt. No manual math, no separate terminal, no awkward conversation.
              </p>
              <FeeBars />
            </SpotlightCard>
          </Reveal>

          {/* Right column */}
          <div className="grid gap-4 lg:col-span-5">
            <Reveal delay={0.08}>
              <SpotlightCard dark className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition duration-500 hover:border-dolphin-400/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 ring-1 ring-inset ring-amber-400/25">
                  <CloudOff size={22} />
                </span>
                <h3 className="mt-6 text-xl font-bold text-white">The internet drops. You keep selling.</h3>
                <p className="mt-2.5 text-sm leading-6 text-slate-400">
                  Offline mode holds every transaction locally and syncs the second you reconnect.
                </p>
                <OfflineStrip />
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.16}>
              <SpotlightCard dark className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-dolphin-600/25 to-transparent p-8 backdrop-blur transition duration-500 hover:border-dolphin-400/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-inset ring-white/20">
                  <Store size={22} />
                </span>
                <h3 className="mt-6 text-xl font-bold text-white">Configured for your counter</h3>
                <p className="mt-2.5 text-sm leading-6 text-slate-400">
                  Age verification, weighted produce, EBT, appointments — you get the tools your
                  category needs and none of the ones it does not.
                </p>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Bottom row */}
          {SMALL_TILES.map(({ title, body, icon: Icon }, i) => (
            <Reveal key={title} delay={0.08 * i} className="lg:col-span-4">
              <SpotlightCard dark className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition duration-500 hover:border-dolphin-400/40">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.07] text-dolphin-300 ring-1 ring-inset ring-white/10">
                    <Icon size={20} />
                  </span>
                  <ArrowUpRight size={18} className="text-slate-600 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-dolphin-300" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
              </SpotlightCard>
            </Reveal>
          ))}

          {/* Security strip */}
          <Reveal delay={0.1} className="lg:col-span-12">
            <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-6 backdrop-blur sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-reef-500/15 text-reef-400 ring-1 ring-inset ring-reef-400/25">
                  <Lock size={20} />
                </span>
                <p className="text-sm leading-6 text-slate-300">
                  <span className="font-bold text-white">PCI-compliant end to end.</span>{' '}
                  Point-to-point encryption and tokenized card data on every transaction.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                {['PCI DSS', 'P2PE', 'EMV', 'Tokenized'].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">{tag}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
