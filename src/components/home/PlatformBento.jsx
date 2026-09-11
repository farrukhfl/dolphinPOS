import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, CloudOff, Layers, LineChart, Lock, Plug, Store } from 'lucide-react'
import Reveal from '../Reveal'
import SpotlightCard from '../ui/SpotlightCard'

const CARD = 'rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur transition duration-500 hover:border-dolphin-400/40'

/** Monthly cost of card volume, drawn as two bars. */
function FeeBars() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduceMotion = useReducedMotion()

  const bars = [
    { label: 'Traditional POS', value: '2.9% + 30¢', width: '86%', tone: 'bg-gradient-to-r from-rose-500/80 to-rose-400/60', text: 'text-rose-200' },
    { label: 'Dolphin POS', value: '$0', width: '8%', tone: 'bg-gradient-to-r from-reef-400 to-dolphin-400', text: 'text-reef-400' },
  ]

  return (
    <div ref={ref} className="mt-auto space-y-5 pt-8">
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
        On $50,000 of monthly card volume. The difference lands in your account.
      </p>
    </div>
  )
}

/**
 * Sales-per-minute strip with the outage flagged amber. The legend beneath it
 * both explains the amber bars and fills the card, which otherwise stretched
 * to the photo tile beside it and left a gap through its middle.
 */
function OfflineStrip() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="mt-auto pt-8">
      <div className="flex items-end gap-1.5" aria-hidden="true">
        {Array.from({ length: 26 }).map((_, i) => {
          const dropped = i === 11 || i === 12
          return (
            <motion.span
              key={i}
              className={`w-full rounded-sm ${dropped ? 'bg-amber-400/80' : 'bg-dolphin-400/60'}`}
              style={{ height: `${dropped ? 16 : 14 + ((i * 37) % 30)}px` }}
              initial={reduceMotion ? false : { scaleY: 0.2, opacity: 0.3 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
            />
          )
        })}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-4 text-xs font-semibold">
        <span className="flex items-center gap-2 text-slate-400">
          <span className="h-2.5 w-2.5 rounded-sm bg-dolphin-400/60" aria-hidden="true" />
          Connected
        </span>
        <span className="flex items-center gap-2 text-amber-300">
          <span className="h-2.5 w-2.5 rounded-sm bg-amber-400/80" aria-hidden="true" />
          Offline, still ringing sales
        </span>
      </div>
    </div>
  )
}

/**
 * Full-bleed photo tile. The section is dark, so a counter shot under a
 * gradient reads as part of the card rather than a pasted-in picture.
 */
function PhotoTile({ image, alt, icon: Icon, title, body, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  return (
    <Reveal delay={delay} className={className}>
      <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-abyss-900 transition duration-500 hover:border-dolphin-400/40">
        <motion.img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.07]"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Heavy enough at the foot that the copy never fights the signage
            and product detail these counter shots are full of */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/88 to-abyss-950/25" />

        <div className="relative flex min-h-[19rem] flex-col justify-end p-8 sm:min-h-[22rem] sm:p-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-dolphin-600 text-white shadow-lg transition duration-500 group-hover:scale-110">
            <Icon size={22} />
          </span>
          <h3 className="mt-5 text-2xl font-bold text-white sm:text-[1.6rem]">{title}</h3>
          <p className="mt-2.5 max-w-md leading-7 text-slate-300">{body}</p>
        </div>
      </article>
    </Reveal>
  )
}

const SMALL_TILES = [
  { title: 'Inventory that counts itself', body: 'Live counts, low-stock alerts, vendor tracking.', icon: Layers },
  { title: 'One dashboard, every location', body: 'Pricing, permissions and reporting in one place.', icon: LineChart },
  { title: 'Connects to what you use', body: 'Accounting, eCommerce and loyalty. No middleware.', icon: Plug },
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
              Dual pricing is wired into the checkout itself, not bolted on beside it. It works
              on every sale without anyone thinking about it.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {/* Anchor: the register doing the thing the section describes */}
          <PhotoTile
            className="lg:col-span-7"
            image="/retail/industries/restaurant.webp"
            alt="A Dolphin POS screen at a counter showing the card price beside the cash price"
            icon={Store}
            title="Dual pricing that runs itself"
            body="Both prices are calculated at the moment of sale and printed on the receipt. No manual math, no second terminal."
          />

          <Reveal delay={0.08} className="lg:col-span-5">
            <SpotlightCard dark className={`flex h-full flex-col p-8 sm:p-10 ${CARD}`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-dolphin-500/15 text-dolphin-300 ring-1 ring-inset ring-dolphin-400/25">
                <LineChart size={22} />
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">What accepting cards costs you</h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-400">
                Every card sale carries a fee. Dual pricing moves it off your margin.
              </p>
              <FeeBars />
            </SpotlightCard>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-7">
            <SpotlightCard dark className={`flex h-full flex-col p-8 sm:p-10 ${CARD}`}>
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

          <PhotoTile
            className="lg:col-span-5"
            image="/retail/industries/services.webp"
            alt="A Dolphin POS terminal configured for a salon counter, listing services rather than products"
            icon={Layers}
            title="Configured for your counter"
            body="Age verification, weighted produce, EBT, appointments. You get your category's tools and none of the rest."
            delay={0.08}
          />

          {SMALL_TILES.map(({ title, body, icon: Icon }, i) => (
            <Reveal key={title} delay={0.08 * i} className="lg:col-span-4">
              <SpotlightCard dark className={`group h-full p-8 ${CARD}`}>
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
