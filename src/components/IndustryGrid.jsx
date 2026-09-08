import Reveal from './Reveal'
import SectionHeading from './ui/SectionHeading'
import { industries } from '../data/industries'

export default function IndustryGrid({ eyebrow = 'INDUSTRIES', title = 'Built for how you sell', body = 'Dolphin POS adapts its features, compliance, and checkout flow to the way your business actually runs.' }) {
  return (
    <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal><SectionHeading eyebrow={eyebrow} title={title} body={body} align="center" className="mx-auto" /></Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ name, icon: Icon }, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <div className="interactive-card group flex h-full flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <span className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700">
                  <Icon size={24} />
                </span>
                <span className="text-sm font-bold text-ink">{name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
