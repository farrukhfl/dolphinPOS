import { Check } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../Reveal'
import Button from '../ui/Button'
import Marquee from '../ui/Marquee'
import LivePricingDemo from './LivePricingDemo'
import { paymentMethods, switchPoints } from '../../data/homeContent'
import { useBookDemo } from '../../lib/BookDemoContext'

export default function SwitchSection() {
  const { openModal } = useBookDemo()
  const reduceMotion = useReducedMotion()

  return (
    <section className="overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right" className="order-2 lg:order-1">
            <LivePricingDemo />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">Switch today</p>
              <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
                Switch without the strings
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                No hidden hardware fees, no rate creep, no exit penalty. Just a POS that keeps
                processing costs off your books.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-9 space-y-1">
                {switchPoints.map(({ title, body }, i) => (
                  <motion.li
                    key={title}
                    initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="group flex items-start gap-3.5 rounded-2xl p-3 transition duration-300 hover:bg-dolphin-50/70"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dolphin-100 text-dolphin-700 transition duration-300 group-hover:scale-110 group-hover:bg-dolphin-600 group-hover:text-white">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <div>
                      <p className="font-bold text-ink">{title}</p>
                      <p className="mt-0.5 text-sm leading-6 text-slate-600">{body}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9">
                <Button onClick={openModal} className="shine px-7 py-3.5 text-base">Book a Demo</Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Payments rail */}
        <div className="mt-24 lg:mt-32">
          <Reveal>
            <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
              Accept every way your customers pay
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Marquee className="mt-8" speed="slow">
              {paymentMethods.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="mx-2 inline-flex shrink-0 items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 shadow-sm transition-colors duration-300 hover:border-dolphin-300"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-dolphin-50 text-dolphin-700">
                    <Icon size={16} />
                  </span>
                  <span className="whitespace-nowrap text-sm font-bold text-ink">{name}</span>
                </span>
              ))}
            </Marquee>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
