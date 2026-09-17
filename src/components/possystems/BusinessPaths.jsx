import { m, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import { businessTypes } from '../../data/posSystemsContent'

/**
 * The three routes into the product.
 *
 * Caption sits under the artwork rather than over it, and the frame is square
 * to match the source files. These are not clean single scenes like the
 * counter shots elsewhere — the retail one is a labelled collage of seven
 * categories — so a 4:3 crop sliced through its own labels and an overlaid
 * title landed on top of them.
 *
 * The restaurant build is not shipping yet, so its card is desaturated,
 * carries a badge and is not a link.
 */
function PathCard({ item, index }) {
  const reduceMotion = useReducedMotion()
  const { title, body, icon: Icon, image, alt, disabled } = item

  const inner = (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border bg-white transition duration-500 ${
        disabled
          ? 'border-slate-200'
          : 'border-slate-200 hover:-translate-y-1.5 hover:border-dolphin-200 hover:shadow-[0_40px_80px_-35px_rgba(8,71,128,0.45)]'
      }`}
    >
      <div className="relative overflow-hidden bg-slate-100">
        <m.img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`aspect-square w-full object-cover transition duration-[900ms] ease-out ${
            disabled ? 'grayscale' : 'group-hover:scale-[1.06]'
          }`}
          initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />

        {disabled && (
          <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-600 shadow-sm backdrop-blur">
            Coming soon
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-3">
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-sm transition duration-500 ${
              disabled ? 'bg-slate-400' : 'bg-dolphin-600 group-hover:scale-110'
            }`}
          >
            <Icon size={20} />
          </span>
          <h3 className={`text-xl font-bold ${disabled ? 'text-slate-500' : 'text-ink'}`}>{title}</h3>
          {!disabled && (
            <ArrowUpRight
              size={18}
              className="ml-auto text-slate-300 transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-dolphin-600"
            />
          )}
        </div>
        <p className={`mt-3 text-sm leading-6 ${disabled ? 'text-slate-500' : 'text-slate-600'}`}>{body}</p>
      </div>
    </article>
  )

  return (
    <Reveal delay={index * 0.09}>
      {disabled
        ? <div className="h-full cursor-not-allowed">{inner}</div>
        : <Link to={item.to} className="block h-full">{inner}</Link>}
    </Reveal>
  )
}

export default function BusinessPaths() {
  return (
    <section className="overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">Choose your path</p>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Built for your business
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The same platform underneath, configured for the way your counter actually works.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {businessTypes.map((item, i) => <PathCard key={item.title} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}
