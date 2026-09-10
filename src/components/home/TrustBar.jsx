import { motion, useReducedMotion } from 'framer-motion'
import Marquee from '../ui/Marquee'
import Reveal from '../Reveal'
import { extraBusinessTypes } from '../../data/homeContent'
import { industries } from '../../data/industries'

function PhotoCard({ item }) {
  const Icon = item.icon
  return (
    <div className="group relative mx-2 h-44 w-72 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition duration-500 hover:shadow-xl sm:h-52 sm:w-80">
      <img
        src={item.image}
        alt={`Dolphin POS running at a ${item.name.toLowerCase()} counter`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover grayscale-[55%] transition duration-[900ms] ease-out group-hover:scale-110 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss-900/85 via-abyss-900/20 to-transparent transition duration-500 group-hover:from-abyss-900/70" />
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur transition duration-500 group-hover:bg-dolphin-600">
          <Icon size={15} />
        </span>
        <span className="text-sm font-bold text-white">{item.name}</span>
      </div>
    </div>
  )
}

export default function TrustBar() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50/70 py-12 lg:py-16">
      <Reveal>
        <p className="mb-9 px-5 text-center text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
          Running the register for 1,000+ independent operators
        </p>
      </Reveal>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Marquee speed="slow">
          {industries.map((item) => <PhotoCard key={item.name} item={item} />)}
        </Marquee>
      </motion.div>

      <Marquee className="mt-4" speed="reverse">
        {extraBusinessTypes.map((label) => (
          <span
            key={label}
            className="mx-1.5 inline-flex shrink-0 items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-600 shadow-sm transition-colors duration-300 hover:border-dolphin-300 hover:text-dolphin-700"
          >
            {label}
          </span>
        ))}
      </Marquee>
    </section>
  )
}
