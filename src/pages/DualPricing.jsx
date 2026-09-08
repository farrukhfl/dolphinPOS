import Reveal from '../components/Reveal'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import SavingsCalculator from '../components/SavingsCalculator'
import HardwareShowcase from '../components/HardwareShowcase'
import IndustryGrid from '../components/IndustryGrid'
import FAQAccordion from '../components/FAQAccordion'
import FinalCTA from '../components/FinalCTA'
import { benefitCards, faqs, howItWorks, insightsFeatures, trustBadges } from '../data/dualPricingContent'

export default function DualPricing() {
  return (
    <>
      <section className="dot-grid px-5 pb-16 pt-20 text-center lg:px-8 lg:pt-28">
        <Reveal className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-dolphin-700">DUAL PRICING</p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Stop Paying Credit Card Processing Fees
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {trustBadges.map(({ label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-2.5 rounded-2xl border border-slate-200 bg-white p-5 text-center">
                <Icon size={20} className="text-dolphin-600" />
                <span className="text-xs font-bold leading-4 text-ink">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-5 pb-24 pt-8 lg:px-8">
        <Reveal className="mx-auto max-w-5xl">
          <SavingsCalculator />
        </Reveal>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="HOW IT WORKS" title="How Dual Pricing Works" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {howItWorks.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-8">
                  <span className="text-4xl font-extrabold text-dolphin-100">{item.step}</span>
                  <h3 className="mt-4 text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="WHY DUAL PRICING" title="Built to grow your bottom line" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefitCards.map(({ title, body, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <Card className="interactive-card h-full p-7">
                  <span className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={22} /></span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HardwareShowcase />

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="REAL-TIME INSIGHTS" title="See your savings as they happen" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {insightsFeatures.map(({ title, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <div className="interactive-card flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center">
                  <span className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={22} /></span>
                  <span className="text-sm font-bold text-ink">{title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <IndustryGrid />

      <FAQAccordion items={faqs} title="Dual pricing, answered" body="What merchants ask most before turning on dual pricing." />

      <FinalCTA />
    </>
  )
}
