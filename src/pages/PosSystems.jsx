import { m, useReducedMotion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import FAQAccordion from '../components/FAQAccordion'
import FinalCTA from '../components/FinalCTA'
import ImageSplit from '../components/ImageSplit'
import PosSystemsHero from '../components/possystems/PosSystemsHero'
import BusinessPaths from '../components/possystems/BusinessPaths'
import BusinessTabs from '../components/possystems/BusinessTabs'
import {
  builtInSavings, dualPricingFeatures, dualPricingPanel, faqs, reportingFeatures, reportingPanel,
} from '../data/posSystemsContent'

/** Blue band closing the reporting story, with the full counter set-up on it. */
function BuiltInSavings() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="px-5 py-24 lg:px-8 lg:py-28">
      <div className="blue-glow relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-gradient-to-br from-dolphin-600 via-dolphin-700 to-dolphin-900 px-6 py-14 sm:px-12 lg:py-16">
        <div className="grid-lines-dark pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float-slow" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-reef-400/20 blur-3xl animate-float-slower" aria-hidden="true" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-100">Built-in savings</p>
              <h2 className="text-balance text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl">
                Every Dolphin POS system comes with dual pricing built in.
              </h2>
              <p className="mt-4 text-lg leading-8 text-dolphin-100">
                See exactly how much you could save on processing fees.
              </p>
              <div className="mt-8">
                <Button variant="light" to="/dual-pricing" className="shine mx-auto lg:mx-0">See Dual Pricing</Button>
              </div>
            </Reveal>
          </div>

          {/* Transparent cutout, so it sits straight on the band with no frame */}
          <m.img
            src={builtInSavings.image}
            alt={builtInSavings.alt}
            loading="lazy"
            decoding="async"
            className="block w-full [filter:drop-shadow(0_24px_40px_rgba(4,11,19,0.45))]"
            initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </section>
  )
}

export default function PosSystems() {
  return (
    <>
      <PosSystemsHero />

      <BusinessPaths />

      <ImageSplit
        eyebrow="Reporting"
        title={reportingPanel.title}
        body={reportingPanel.body}
        image={reportingPanel.image}
        alt={reportingPanel.alt}
        points={reportingFeatures.map((f) => f.title)}
        tone="tint"
      />

      <ImageSplit
        eyebrow="Dual pricing"
        title={dualPricingPanel.title}
        body={dualPricingPanel.body}
        image={dualPricingPanel.image}
        alt={dualPricingPanel.alt}
        points={dualPricingFeatures.map((f) => f.title)}
        reverse
      />

      <BuiltInSavings />

      <BusinessTabs />

      <FAQAccordion
        items={faqs}
        title="Questions about Dolphin POS systems"
        body="Everything merchants ask before rolling out Dolphin POS."
      />

      <FinalCTA />
    </>
  )
}
