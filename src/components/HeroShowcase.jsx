import { motion } from 'framer-motion'
import { ShieldCheck, TrendingUp } from 'lucide-react'

export default function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:mx-0">
      <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-dolphin-300/40 blur-3xl animate-float-slow" aria-hidden="true" />
      <div className="absolute -bottom-10 -right-6 h-64 w-64 rounded-full bg-dolphin-500/30 blur-3xl animate-float-slower" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="relative overflow-hidden rounded-3xl shadow-2xl shadow-dolphin-900/20"
      >
        <img
          src="/homepage/hero-banner.webp"
          alt="Dolphin POS terminal automatically splitting cash and card pricing at checkout"
          className="aspect-[2/3] w-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="animate-bob absolute -left-10 top-8 hidden items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex"
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
        className="animate-bob absolute -bottom-6 -right-8 hidden items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:flex"
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
