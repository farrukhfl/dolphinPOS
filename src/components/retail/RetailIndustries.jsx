import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import Reveal from '../Reveal'
import { retailIndustries } from '../../data/posRetailContent'

/*
  Bento of counter photography. The first two tiles run wide so the row does
  not read as a uniform grid, and the feature list stays hidden behind the
  gradient until hover on pointer devices — on touch it is always shown,
  since there is no hover to reveal it.
*/
const SPANS = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2']

export default function RetailIndustries() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">Every aisle</p>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Dolphin for retail, aisle by aisle
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The same register, configured for what your category actually has to handle.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-6">
          {retailIndustries.map(({ name, icon: Icon, image, points }, i) => (
            <Reveal key={name} delay={i * 0.08} className={SPANS[i] ?? 'lg:col-span-2'}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-abyss-900 shadow-soft transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-35px_rgba(8,71,128,0.5)]">
                <motion.img
                  src={image}
                  alt={`Dolphin POS at a ${name.toLowerCase()} counter`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.08]"
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/55 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-dolphin-600 text-white shadow-lg transition duration-500 group-hover:scale-110">
                      <Icon size={18} />
                    </span>
                    <h3 className="text-lg font-bold text-white">{name}</h3>
                    <ArrowUpRight
                      size={18}
                      className="ml-auto text-white/40 transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-dolphin-300"
                    />
                  </div>

                  {/* Collapsed on pointer devices, open on touch */}
                  <ul className="mt-0 grid max-h-40 grid-cols-1 gap-1.5 overflow-hidden opacity-100 transition-all duration-500 sm:mt-4 lg:max-h-0 lg:opacity-0 lg:group-hover:mt-4 lg:group-hover:max-h-40 lg:group-hover:opacity-100">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs leading-5 text-white/85">
                        <Check size={13} strokeWidth={3} className="mt-0.5 shrink-0 text-dolphin-300" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
