import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../components/Reveal'
import SpotlightCard from '../components/ui/SpotlightCard'
import HardwareShowcase from '../components/HardwareShowcase'
import FAQAccordion from '../components/FAQAccordion'
import FinalCTA from '../components/FinalCTA'
import ServicesHero from '../components/services/ServicesHero'
import ServiceBenefits from '../components/services/ServiceBenefits'
import ValueChain from '../components/services/ValueChain'
import { featuresGrid, faqs } from '../data/servicesContent'

function FeatureGrid() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-slate-50 px-5 py-24 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-dolphin-100/60 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">Features</p>
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Everything a service business needs
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuresGrid.map(({ title, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 + Math.floor(i / 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <SpotlightCard className="group flex h-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-500 hover:-translate-y-1 hover:border-dolphin-200 hover:shadow-[0_26px_54px_-28px_rgba(8,71,128,0.4)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700 transition duration-500 group-hover:bg-dolphin-600 group-hover:text-white">
                  <Icon size={21} />
                </span>
                <span className="font-bold leading-6 text-ink">{title}</span>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <ServicesHero />

      <ValueChain />

      <ServiceBenefits />

      <FeatureGrid />

      <HardwareShowcase
        eyebrow="HARDWARE"
        title="Hardware that goes where the job goes"
        body="Take payment from the counter, the truck, or the client's front door."
      />

      <FAQAccordion
        items={faqs}
        title="Questions from service businesses"
        body="What service pros ask before switching to Dolphin POS."
      />

      <FinalCTA />
    </>
  )
}
