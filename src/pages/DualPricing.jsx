import Reveal from '../components/Reveal'
import DualPricingHero from '../components/dualpricing/DualPricingHero'
import StepFlow from '../components/StepFlow'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import SavingsCalculator from '../components/SavingsCalculator'
import HardwareShowcase from '../components/HardwareShowcase'
import IndustryGrid from '../components/IndustryGrid'
import FAQAccordion from '../components/FAQAccordion'
import FinalCTA from '../components/FinalCTA'
import { benefitCards, faqs, howItWorks, insightsFeatures } from '../data/dualPricingContent'

export default function DualPricing() {
  return (
    <>
      <DualPricingHero />

      <section className="px-5 pb-24 pt-8 lg:px-8">
        <Reveal className="mx-auto max-w-5xl">
          <SavingsCalculator />
        </Reveal>
      </section>

      <StepFlow
        eyebrow="How it works"
        title="How dual pricing works"
        body="Three things happen at the counter. None of them need your staff to remember a rule."
        steps={howItWorks}
        variant="cover"
      />

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
