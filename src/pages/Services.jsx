import { Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import HardwareShowcase from '../components/HardwareShowcase'
import FAQAccordion from '../components/FAQAccordion'
import FinalCTA from '../components/FinalCTA'
import { featuresGrid, faqs, keepMorePoints, valueChain } from '../data/servicesContent'

export default function Services() {
  return (
    <>
      <section className="dot-grid px-5 pb-20 pt-20 text-center lg:px-8 lg:pb-28 lg:pt-28">
        <Reveal className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-dolphin-700">SERVICES</p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Work Anywhere. Get Paid Everywhere.
          </h1>
        </Reveal>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-5">
            {valueChain.map(({ title, body, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={22} /></span>
                  <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="MORE PER JOB" title="Keep more from every job" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {keepMorePoints.map(({ title, body }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <Card className="h-full p-6">
                  <Check className="mb-4 text-dolphin-600" size={22} />
                  <h3 className="text-base font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="FEATURES" title="Everything a service business needs" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {featuresGrid.map(({ title, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.05}>
                <div className="interactive-card flex h-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={20} /></span>
                  <span className="font-bold text-ink">{title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HardwareShowcase eyebrow="HARDWARE" title="Hardware that goes where the job goes" body="Take payment from the counter, the truck, or the client's front door." showDescriptions={false} />

      <FAQAccordion items={faqs} title="Questions from service businesses" body="What service pros ask before switching to Dolphin POS." />

      <FinalCTA />
    </>
  )
}
