import { Check, PlayCircle, Star, X } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import SavingsCalculator from '../components/SavingsCalculator'
import IndustryGrid from '../components/IndustryGrid'
import HardwareShowcase from '../components/HardwareShowcase'
import FAQAccordion from '../components/FAQAccordion'
import FinalCTA from '../components/FinalCTA'
import AnimatedNumber from '../components/AnimatedNumber'
import HeroShowcase from '../components/HeroShowcase'
import { useBookDemo } from '../lib/BookDemoContext'
import { industries } from '../data/industries'
import {
  allInOneCards, comparisonRows, faqs, featuresGrid, howItWorks, paymentMethods, switchPoints, testimonials,
} from '../data/homeContent'

const heroStats = [
  { value: 1000, format: (n) => Math.round(n).toLocaleString(), prefix: '', suffix: '+', label: 'Businesses powered' },
  { value: 50, format: (n) => Math.round(n).toLocaleString(), prefix: '$', suffix: 'M+', label: 'Processed annually' },
  { value: 4.9, format: (n) => n.toFixed(1), prefix: '', suffix: '/5', label: 'Average merchant rating' },
]

export default function Home() {
  const { openModal } = useBookDemo()

  return (
    <>
      <section className="dot-grid relative overflow-hidden px-5 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="pointer-events-none absolute -top-32 left-[8%] h-80 w-80 rounded-full bg-dolphin-200/50 blur-3xl animate-float-slow" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-6rem] right-[6%] h-96 w-96 rounded-full bg-dolphin-100/70 blur-3xl animate-float-slower" aria-hidden="true" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <Reveal>
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-dolphin-200 bg-white px-4 py-1.5 text-xs font-bold text-dolphin-700 shadow-sm lg:mx-0">
                <span className="flex text-dolphin-500">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={12} fill="currentColor" strokeWidth={0} />)}
                </span>
                Rated 4.9/5 by merchants nationwide
              </div>
              <h1 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:mx-0 lg:text-6xl">
                Stop Absorbing Credit Card Fees. <span className="text-gradient">Keep More of Every Sale.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 lg:mx-0">
                Dolphin POS automatically applies a cash discount at checkout, so card processing fees never come out of your margin again.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button onClick={openModal}>Book a Demo</Button>
                <button className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-ink transition duration-300 hover:border-dolphin-600 hover:text-dolphin-700">
                  <PlayCircle size={18} /> Watch a 30-sec Overview
                </button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mx-auto mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-slate-200 pt-8 lg:mx-0">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-extrabold tabular-nums text-ink sm:text-3xl">
                      {stat.prefix}<AnimatedNumber value={stat.value} format={stat.format} triggerOnView />{stat.suffix}
                    </p>
                    <p className="mt-1 text-xs font-semibold leading-4 text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.15} className="relative z-10">
            <HeroShowcase />
          </Reveal>
        </div>
      </section>

      <div className="overflow-hidden border-y border-slate-200 bg-white py-6">
        <p className="mb-4 text-center text-xs font-bold tracking-[0.25em] text-slate-400">TRUSTED ACROSS EVERY KIND OF RETAIL</p>
        <div className="flex w-max animate-marquee gap-12">
          {[...industries, ...industries].map(({ name, icon: Icon }, i) => (
            <div key={i} className="flex shrink-0 items-center gap-2 text-sm font-bold text-slate-400">
              <Icon size={16} className="text-dolphin-500" /> {name}
            </div>
          ))}
        </div>
      </div>

      <section className="px-5 py-24 lg:px-8">
        <Reveal className="mx-auto max-w-5xl">
          <SavingsCalculator />
        </Reveal>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="EVERY WAY THEY PAY" title="Accept every way your customers pay" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {paymentMethods.map(({ name, icon: Icon }, i) => (
              <Reveal key={name} delay={i * 0.03}>
                <div className="interactive-card group flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center">
                  <span className="icon-lift flex h-11 w-11 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs font-bold leading-4 text-ink">{name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="HOW IT WORKS" title="How Dolphin POS Works" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {howItWorks.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.1}>
                <div className="relative rounded-2xl border border-slate-200 bg-white p-8">
                  <span className="text-4xl font-extrabold text-dolphin-100">{item.step}</span>
                  <h3 className="mt-4 text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="ALL-IN-ONE" title="Meet your all-in-one POS" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {allInOneCards.map(({ title, body, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <Card className="interactive-card h-full p-7">
                  <span className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="FEATURES" title="Everything your business needs, built in" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuresGrid.map(({ title, body, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="interactive-card h-full rounded-2xl border border-slate-200 bg-white p-7">
                  <span className="icon-lift flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="THE COMPARISON" title="Dolphin POS vs. Traditional POS" align="center" className="mx-auto" /></Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-6 py-4 font-bold text-slate-500">Feature</th>
                    <th className="px-6 py-4 font-bold text-dolphin-700">Dolphin POS</th>
                    <th className="px-6 py-4 font-bold text-slate-500">Traditional POS</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-slate-100 last:border-0">
                      <td className="px-6 py-4 font-semibold text-ink">{row.feature}</td>
                      <td className="px-6 py-4">
                        {typeof row.dolphin === 'boolean'
                          ? (row.dolphin ? <Check className="text-dolphin-600" size={18} /> : <X className="text-slate-300" size={18} />)
                          : <span className="font-bold text-dolphin-700">{row.dolphin}</span>}
                      </td>
                      <td className="px-6 py-4">
                        {typeof row.traditional === 'boolean'
                          ? (row.traditional ? <Check className="text-slate-400" size={18} /> : <X className="text-slate-300" size={18} />)
                          : <span className="text-slate-500">{row.traditional}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <IndustryGrid />

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><SectionHeading eyebrow="SWITCH TODAY" title="Switch without the strings" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {switchPoints.map(({ title, body }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <Check className="mb-4 text-dolphin-600" size={22} />
                  <h3 className="text-base font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="MERCHANT STORIES" title="Trusted by merchants who used to absorb fees" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <Card className="h-full p-8">
                  <div className="flex gap-1 text-dolphin-500">
                    {Array.from({ length: t.rating }).map((_, idx) => <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />)}
                  </div>
                  <p className="mt-5 text-lg leading-8 text-ink">"{t.quote}"</p>
                  <p className="mt-6 text-sm font-bold text-slate-500">{t.name} · {t.location}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        items={faqs}
        title="Straight answers about Dolphin POS"
        body="What merchants usually want to know before switching to dual pricing."
      />

      <FinalCTA />
    </>
  )
}
