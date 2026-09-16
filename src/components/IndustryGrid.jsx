import Reveal from './Reveal'
import SectionHeading from './ui/SectionHeading'
import { industries } from '../data/industries'

export default function IndustryGrid({ eyebrow = 'INDUSTRIES', title = 'Built for how you sell', body = 'Dolphin POS adapts its features, compliance, and checkout flow to the way your business actually runs.' }) {
  return (
    <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal><SectionHeading eyebrow={eyebrow} title={title} body={body} align="center" className="mx-auto" /></Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ name, icon: Icon, photo }, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <div className="interactive-card group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-abyss-900 shadow-soft">
                <img
                  src={photo}
                  alt={`Dolphin POS at a ${name.toLowerCase()} checkout counter`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.06] sm:aspect-square"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss-950 via-abyss-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4">
                  <span className="icon-lift flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-dolphin-600 text-white shadow-lg">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-bold text-white">{name}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
