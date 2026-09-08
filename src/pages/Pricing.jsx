import Reveal from '../components/Reveal'
import PricingTable from '../components/PricingTable'
import FinalCTA from '../components/FinalCTA'

export default function Pricing() {
  return (
    <>
      <section className="dot-grid px-5 pb-12 pt-20 text-center lg:px-8 lg:pt-28">
        <Reveal className="mx-auto max-w-3xl">
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Find the right POS solution for your business
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Pay $0 credit card processing with built-in dual pricing. Cancel or switch anytime. No strings attached. No hidden fees.
          </p>
          <p className="mt-4 text-xs font-semibold text-slate-400">Prices shown are only available online.</p>
        </Reveal>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <Reveal className="mx-auto max-w-6xl">
          {/* TODO: confirm real tier pricing with Farrukh/backend before launch */}
          <PricingTable />
          <p className="mt-6 text-center text-sm text-slate-500">All plans offer built-in dual pricing, automatically applied at checkout.</p>
        </Reveal>
      </section>

      <FinalCTA />
    </>
  )
}
