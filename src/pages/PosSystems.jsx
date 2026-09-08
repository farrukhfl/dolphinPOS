import { useState } from 'react'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'
import FinalCTA from '../components/FinalCTA'
import { businessTabs, businessTypes, dualPricingFeatures, faqs, reportingFeatures } from '../data/posSystemsContent'

export default function PosSystems() {
  const [activeTab, setActiveTab] = useState(businessTabs[0].key)
  const tab = businessTabs.find((t) => t.key === activeTab)

  return (
    <>
      <section className="dot-grid px-5 pb-20 pt-20 text-center lg:px-8 lg:pb-28 lg:pt-28">
        <Reveal className="mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-dolphin-700">POS SYSTEMS</p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Complete Business Control — Sell More. Keep More. Manage Everything.
          </h1>
        </Reveal>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="CHOOSE YOUR PATH" title="Built for your business" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {businessTypes.map(({ title, body, icon: Icon, to, disabled }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                {disabled ? (
                  <Card className="relative h-full cursor-not-allowed p-8 opacity-60">
                    <span className="absolute right-5 top-5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">Coming soon</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400"><Icon size={22} /></span>
                    <h3 className="mt-5 text-xl font-bold text-slate-500">{title}</h3>
                    <p className="mt-2 leading-6 text-slate-400">{body}</p>
                  </Card>
                ) : (
                  <Link to={to} className="block h-full">
                    <Card className="interactive-card h-full p-8">
                      <span className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={22} /></span>
                      <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
                      <p className="mt-2 leading-6 text-slate-600">{body}</p>
                    </Card>
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="REPORTING" title="Know what comes next" body="Real-time reporting and built-in dual pricing tools that keep you ahead of every shift." align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full p-8">
                <h3 className="text-lg font-bold text-ink">Reporting that keeps you ahead</h3>
                <ul className="mt-6 space-y-4">
                  {reportingFeatures.map(({ title, icon: Icon }) => (
                    <li key={title} className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-dolphin-50 text-dolphin-700"><Icon size={17} /></span>
                      <span className="font-semibold text-ink">{title}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full p-8">
                <h3 className="text-lg font-bold text-ink">Dual pricing, handled</h3>
                <ul className="mt-6 space-y-4">
                  {dualPricingFeatures.map(({ title }) => (
                    <li key={title} className="flex items-center gap-3">
                      <Check size={18} className="shrink-0 text-dolphin-600" />
                      <span className="font-semibold text-ink">{title}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="dot-grid relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-dolphin-500 to-dolphin-700 px-8 py-16 text-center sm:px-16">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-dolphin-200">BUILT-IN SAVINGS</p>
          <h2 className="text-balance mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Every Dolphin POS system comes with dual pricing built in.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-dolphin-100">See exactly how much you could save on processing fees.</p>
          <Button variant="light" to="/dual-pricing" className="mx-auto mt-8">See Dual Pricing</Button>
        </div>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="FIND YOUR FIT" title="Choose your business type" align="center" className="mx-auto" /></Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-2 rounded-full border border-slate-200 bg-white p-1.5">
              {businessTabs.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${activeTab === key ? 'bg-dolphin-600 text-white' : 'text-slate-500 hover:text-dolphin-700'}`}
                >
                  <Icon size={16} /> {label}
                </button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Card className="mx-auto mt-8 max-w-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-extrabold text-ink">{tab.label}</h3>
              <p className="mt-3 leading-7 text-slate-600">{tab.body}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {tab.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm font-semibold text-ink">
                    <Check size={17} className="mt-0.5 shrink-0 text-dolphin-600" /> {feature}
                  </li>
                ))}
              </ul>
              <Button to="/pricing" className="mt-8">Pick Your Plan</Button>
            </Card>
          </Reveal>
        </div>
      </section>

      <FAQAccordion items={faqs} title="Questions about Dolphin POS systems" body="Everything merchants ask before rolling out Dolphin POS." />

      <FinalCTA />
    </>
  )
}
