import { motion } from 'framer-motion'
import DualPricingTerminal from './DualPricingTerminal'

/**
 * The interactive half of the dual-pricing story. The hero shows the hardware;
 * this shows what the hardware does, with a checkout the visitor can drive.
 *
 * Only one screenshot rides along, and it sits entirely inside the wrapper's
 * top padding. The card is dense from its header to its deposit row, so
 * anything overlapping it covers a number — earlier passes landed on the
 * running total and on the deposit line. The taller receipt screenshot could
 * not clear the card without adding roughly 200px of dead space, so it is
 * left out here rather than parked on top of the figures.
 */
export default function LivePricingDemo() {
  return (
    <div className="relative mx-auto w-full max-w-md pt-36">
      {/* Soft brand halo so the white card has something to sit against */}
      <div className="pointer-events-none absolute inset-x-4 top-1/3 -z-10 h-1/2 rounded-full bg-dolphin-200/50 blur-3xl" aria-hidden="true" />

      {/* Inner box so the screenshot can anchor to the card's own top edge */}
      <div className="relative">
        <DualPricingTerminal />

        <motion.img
          src="/retail/sales-overview.png"
          alt="Sales overview showing total sales and processing savings for the month"
          loading="lazy"
          decoding="async"
          // bottom-full pins it above the card whatever height it renders at
          className="animate-bob absolute bottom-full right-0 mb-4 w-36 rounded-xl shadow-2xl ring-1 ring-slate-900/10 sm:-right-8 sm:w-44 lg:-right-12"
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
