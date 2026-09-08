import Reveal from './Reveal'
import SectionHeading from './ui/SectionHeading'
import { hardware } from '../data/hardware'

export default function HardwareShowcase({ eyebrow = 'HARDWARE', title = 'Hardware built for the counter', body = 'Everything you need to start taking payments, in the box.', showDescriptions = true }) {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal><SectionHeading eyebrow={eyebrow} title={title} body={body} align="center" className="mx-auto" /></Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {hardware.map(({ name, icon: Icon, description }, i) => (
            <Reveal key={name} delay={i * 0.06}>
              <div className="interactive-card group flex h-full flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <span className="icon-lift flex h-14 w-14 items-center justify-center rounded-2xl bg-dolphin-50 text-dolphin-700">
                  <Icon size={26} />
                </span>
                <span className="text-sm font-bold text-ink">{name}</span>
                {showDescriptions && <span className="text-xs leading-5 text-slate-500">{description}</span>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
