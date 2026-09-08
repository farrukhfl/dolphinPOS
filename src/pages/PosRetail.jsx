import { useState } from 'react'
import { Check, Receipt } from 'lucide-react'
import Reveal from '../components/Reveal'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'
import FinalCTA from '../components/FinalCTA'
import {
  commandCenterPoints, faqs, featuresGrid, hardwareFitPoints, retailIndustries, timeline,
} from '../data/posRetailContent'

export default function PosRetail() {
  const [activeStep, setActiveStep] = useState(2)

  return (
    <>
      <section className="dot-grid px-5 pb-16 pt-20 text-center lg:px-8 lg:pt-28">
        <Reveal className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-dolphin-700">POS RETAIL</p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Built for Retail. Designed for However You Sell.
          </h1>
        </Reveal>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="EVERY AISLE" title="Dolphin for Retail" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {retailIndustries.map(({ name, icon: Icon, points }, i) => (
              <Reveal key={name} delay={i * 0.07}>
                <Card className="interactive-card h-full p-7">
                  <span className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={22} /></span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{name}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check size={15} className="mt-0.5 shrink-0 text-dolphin-600" /> {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="LIVE AT CHECKOUT" title="See dual pricing in action" align="center" className="mx-auto" /></Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
                <p className="text-xs font-bold tracking-[0.2em] text-slate-400">CASH PRICE</p>
                <p className="mt-3 text-5xl font-extrabold text-ink">$10.00</p>
                <p className="mt-2 text-sm text-slate-500">No fees applied</p>
              </div>
              <div className="rounded-2xl border-2 border-dolphin-500 bg-dolphin-50 p-8 text-center">
                <p className="text-xs font-bold tracking-[0.2em] text-dolphin-700">CARD PRICE</p>
                <p className="mt-3 text-5xl font-extrabold text-dolphin-800">$10.35</p>
                <p className="mt-2 text-sm text-dolphin-700">Fee covered by the customer, not your margin</p>
              </div>
            </div>
            <div className="mx-auto mt-6 flex max-w-sm items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-dolphin-50 text-dolphin-700"><Receipt size={18} /></span>
              <p className="text-sm text-slate-600">Every receipt and end-of-day report shows the dual pricing breakdown automatically.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="A DAY ON DOLPHIN" title="Built for every hour of retail" align="center" className="mx-auto" /></Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14 flex gap-2 overflow-x-auto pb-2">
              {timeline.map((item, i) => (
                <button
                  key={item.time}
                  onClick={() => setActiveStep(i)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${activeStep === i ? 'bg-dolphin-600 text-white' : 'bg-white text-slate-500 hover:text-dolphin-700'} border border-slate-200`}
                >
                  {item.time}
                </button>
              ))}
            </div>
            <Card className="mt-6 p-8 sm:p-10">
              <p className="text-xs font-bold tracking-[0.2em] text-dolphin-700">{timeline[activeStep].time}</p>
              <h3 className="mt-3 text-2xl font-extrabold text-ink">{timeline[activeStep].title}</h3>
              <p className="mt-3 max-w-xl leading-7 text-slate-600">{timeline[activeStep].body}</p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="FEATURES" title="Everything a retail counter needs" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {featuresGrid.map(({ title, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.05}>
                <div className="interactive-card flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center">
                  <span className="icon-lift flex h-11 w-11 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={20} /></span>
                  <span className="text-xs font-bold leading-4 text-ink">{title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full p-8">
              <h3 className="text-lg font-bold text-ink">Retail command center</h3>
              <ul className="mt-6 space-y-4">
                {commandCenterPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-dolphin-600" />
                    <span className="text-slate-600">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="h-full p-8">
              <h3 className="text-lg font-bold text-ink">POS hardware that fits your business</h3>
              <ul className="mt-6 space-y-4">
                {hardwareFitPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-dolphin-600" />
                    <span className="text-slate-600">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>

      <FAQAccordion items={faqs} title="Questions from retail merchants" body="What retail owners ask most before switching to Dolphin POS." />

      <FinalCTA />
    </>
  )
}
