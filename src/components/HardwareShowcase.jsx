import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './ui/SectionHeading'
import SpotlightCard from './ui/SpotlightCard'
import { hardware } from '../data/hardware'

/**
 * Product photography rather than icons. Every piece is a transparent cutout,
 * so each one floats on the card's own gradient and lifts on hover instead of
 * sitting in a tinted icon tile.
 */
export default function HardwareShowcase({
  eyebrow = 'HARDWARE',
  title = 'Hardware built for the counter',
  body = 'Everything you need to start taking payments, in the box.',
  showDescriptions = true,
}) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal><SectionHeading eyebrow={eyebrow} title={title} body={body} align="center" className="mx-auto" /></Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {hardware.map(({ name, image, description }, i) => (
            <Reveal key={name} delay={i * 0.08}>
              <SpotlightCard className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-dolphin-50/70 p-5 text-center transition duration-500 hover:-translate-y-1.5 hover:border-dolphin-200 hover:shadow-[0_30px_60px_-30px_rgba(8,71,128,0.45)] sm:p-6">
                <div className="relative flex h-32 w-full items-center justify-center sm:h-36">
                  {/* Contact shadow, so the cutout reads as standing on the card */}
                  <span
                    className="absolute bottom-1 h-3 w-2/3 rounded-[50%] bg-dolphin-900/15 blur-md transition duration-500 group-hover:w-3/4 group-hover:bg-dolphin-900/20"
                    aria-hidden="true"
                  />
                  <motion.img
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="relative max-h-full w-auto max-w-[85%] object-contain drop-shadow-lg transition duration-500 group-hover:scale-[1.07]"
                    initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.94 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.65, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>

                <span className="mt-4 text-sm font-bold leading-5 text-ink">{name}</span>
                {showDescriptions && <span className="mt-1.5 text-xs leading-5 text-slate-500">{description}</span>}
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
