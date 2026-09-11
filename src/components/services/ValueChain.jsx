import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Reveal from '../Reveal'
import { valueChain } from '../../data/servicesContent'

/**
 * The five stages of a job, drawn as a connected chain. The rail fills once
 * the row is in view and each node pops in behind it, so the order reads as a
 * sequence rather than five separate cards.
 */
export default function ValueChain() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const reduceMotion = useReducedMotion()

  return (
    <section className="overflow-hidden px-5 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">One system, start to finish</p>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              From the booking to the deposit
            </h2>
          </div>
        </Reveal>

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 overflow-hidden rounded-full bg-dolphin-100 lg:block" aria-hidden="true">
            <motion.div
              className="h-full w-full rounded-full bg-gradient-to-r from-dolphin-300 via-dolphin-500 to-reef-500"
              style={{ transformOrigin: 'left' }}
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {valueChain.map(({ title, body, icon: Icon }, i) => (
              <motion.div
                key={title}
                className="group relative text-center"
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white bg-dolphin-600 text-white shadow-lg shadow-dolphin-900/25 transition duration-500 group-hover:scale-110"
                  initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.28 + i * 0.14 }}
                >
                  <Icon size={22} />
                </motion.span>
                <h3 className="mt-5 text-base font-bold text-ink">{title}</h3>
                <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-6 text-slate-600">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
