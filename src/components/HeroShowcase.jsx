import { motion } from 'framer-motion'
import { ShieldCheck, TrendingUp, Zap } from 'lucide-react'

const lineItems = [
  { label: 'Espresso x2', price: '$8.00' },
  { label: 'Breakfast Sandwich', price: '$7.50' },
  { label: 'Bottled Water', price: '$2.50' },
]

export default function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0">
      <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-dolphin-300/40 blur-3xl animate-float-slow" aria-hidden="true" />
      <div className="absolute -bottom-10 -right-6 h-64 w-64 rounded-full bg-dolphin-500/30 blur-3xl animate-float-slower" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-dolphin-900/10 sm:p-6"
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-dolphin-400" />
          </div>
          <span className="text-xs font-bold text-slate-400">Dolphin POS · Checkout</span>
        </div>

        <div className="mt-4 space-y-3">
          {lineItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between text-sm">
              <span className="text-slate-500">{item.label}</span>
              <span className="font-semibold text-ink">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
          <div className="rounded-xl border border-slate-200 p-3.5 text-center">
            <p className="text-[11px] font-bold tracking-wide text-slate-400">CASH</p>
            <p className="mt-1 text-2xl font-extrabold text-ink">$18.00</p>
          </div>
          <div className="rounded-xl border-2 border-dolphin-500 bg-dolphin-50 p-3.5 text-center">
            <p className="text-[11px] font-bold tracking-wide text-dolphin-700">CARD</p>
            <p className="mt-1 text-2xl font-extrabold text-dolphin-800">$18.62</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 rounded-lg bg-dolphin-50 py-2 text-xs font-bold text-dolphin-700">
          <Zap size={13} /> Fee covered automatically
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="animate-bob absolute -left-12 -top-10 hidden items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-dolphin-50 text-dolphin-700"><ShieldCheck size={18} /></span>
        <div>
          <p className="text-xs font-bold text-ink">PCI Compliant</p>
          <p className="text-[11px] text-slate-400">Bank-level security</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="animate-bob absolute -bottom-16 -right-10 hidden items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex"
        style={{ animationDelay: '1.2s' }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><TrendingUp size={18} /></span>
        <div>
          <p className="text-xs font-bold text-ink">Today's Sales</p>
          <p className="text-[11px] font-semibold text-emerald-600">+12.4% vs. last week</p>
        </div>
      </motion.div>
    </div>
  )
}
