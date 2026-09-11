import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../Reveal'
import SpotlightCard from '../ui/SpotlightCard'
import { keepMorePoints } from '../../data/servicesContent'

/**
 * Four benefit renders on a dark band. The artwork is rendered on black, so a
 * dark section lets each image bleed into its card instead of sitting in a
 * pale box with a hard edge.
 *
 * Two across rather than four: the renders carry readable detail (an invoice,
 * a payment confirmation, a price comparison) that disappears at quarter
 * width.
 */
export default function ServiceBenefits() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="deep-sea relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid-lines-dark pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-400">More per job</p>
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              Keep more from{' '}
              <span className="text-gradient-light">every job you finish.</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              The work is the same. What lands in your account at the end of it is not.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {keepMorePoints.map(({ title, body, image }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <SpotlightCard
                dark
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur transition duration-500 hover:border-dolphin-400/40"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.06]"
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.09 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-2.5 leading-7 text-slate-400">{body}</p>
                  <span
                    className="mt-5 h-0.5 w-10 origin-left rounded-full bg-dolphin-500 transition-transform duration-500 group-hover:scale-x-[2.6]"
                    aria-hidden="true"
                  />
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
