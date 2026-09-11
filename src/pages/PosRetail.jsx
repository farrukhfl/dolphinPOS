import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Reveal from '../components/Reveal'
import FAQAccordion from '../components/FAQAccordion'
import FinalCTA from '../components/FinalCTA'
import RetailHero from '../components/retail/RetailHero'
import RetailIndustries from '../components/retail/RetailIndustries'
import PricingFlow from '../components/retail/PricingFlow'
import FeatureIconGrid from '../components/retail/FeatureIconGrid'
import ImageSplit from '../components/retail/ImageSplit'
import { commandCenter, faqs, hardwareFit, timeline } from '../data/posRetailContent'

function DayTimeline() {
  const [active, setActive] = useState(2)
  const reduceMotion = useReducedMotion()
  const item = timeline[active]

  return (
    <section className="overflow-hidden bg-slate-50 px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">A day on Dolphin</p>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Built for every hour of retail
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="-mx-5 mt-14 flex gap-2 overflow-x-auto px-5 pb-2">
            {timeline.map((step, i) => (
              <button
                key={step.time}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`relative shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition duration-300 ${
                  active === i
                    ? 'border-dolphin-600 bg-dolphin-600 text-white shadow-lg shadow-dolphin-900/20'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-dolphin-300 hover:text-dolphin-700'
                }`}
              >
                {step.time}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
            <div className="h-1 bg-slate-100">
              <motion.div
                className="h-full bg-gradient-to-r from-dolphin-400 to-dolphin-600"
                animate={{ width: `${((active + 1) / timeline.length) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <div className="min-h-[13rem] p-8 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.time}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? {} : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="tabular text-xs font-bold uppercase tracking-[0.2em] text-dolphin-700">{item.time}</p>
                  <h3 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-lg leading-8 text-slate-600">{item.body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function PosRetail() {
  return (
    <>
      <RetailHero />

      <RetailIndustries />

      <PricingFlow />

      <ImageSplit
        eyebrow="One dashboard"
        title={commandCenter.title}
        body={commandCenter.body}
        image={commandCenter.image}
        alt={commandCenter.alt}
        points={commandCenter.points}
      />

      <FeatureIconGrid />

      <ImageSplit
        eyebrow="Hardware"
        title={hardwareFit.title}
        body={hardwareFit.body}
        image={hardwareFit.image}
        alt={hardwareFit.alt}
        points={hardwareFit.points}
        reverse
        tone="tint"
      />

      <DayTimeline />

      <FAQAccordion
        items={faqs}
        title="Questions from retail merchants"
        body="What retail owners ask most before switching to Dolphin POS."
      />

      <FinalCTA />
    </>
  )
}
