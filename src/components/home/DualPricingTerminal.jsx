import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Banknote, CheckCircle2, CreditCard } from 'lucide-react'

const LINES = [
  { name: 'Deli Sandwich', qty: 1, price: 12.0 },
  { name: 'Cold Brew Coffee', qty: 1, price: 4.5 },
  { name: 'Kettle Chips', qty: 1, price: 2.25 },
]

const SUBTOTAL = LINES.reduce((sum, line) => sum + line.price * line.qty, 0)
const CARD_TOTAL = SUBTOTAL * 1.0399
const CYCLE_MS = 3600

const money = (n) => n.toFixed(2)

const MODES = [
  { id: 'cash', label: 'Cash', icon: Banknote, total: SUBTOTAL },
  { id: 'card', label: 'Card', icon: CreditCard, total: CARD_TOTAL },
]

/**
 * Auto-cycling checkout showing the cash price and the card price side by
 * side, with the processing fee never landing on the merchant. Visitors can
 * click a tab to take over; the cycle then stops.
 */
export default function DualPricingTerminal() {
  const reduceMotion = useReducedMotion()
  const [mode, setMode] = useState('cash')
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    if (locked || reduceMotion) return undefined
    const id = setInterval(() => setMode((m) => (m === 'cash' ? 'card' : 'cash')), CYCLE_MS)
    return () => clearInterval(id)
  }, [locked, reduceMotion])

  const active = MODES.find((m) => m.id === mode)
  const feeAbsorbed = CARD_TOTAL - SUBTOTAL

  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        // Opaque on purpose: the card now sits over a photograph, and any
        // translucency let the scene behind muddy the receipt.
        className="relative overflow-hidden rounded-[28px] bg-white ring-1 ring-slate-900/5 shadow-[0_50px_100px_-30px_rgba(4,11,19,0.55)]"
      >
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-dolphin-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">Dolphin POS</span>
          </div>
          <span className="tabular text-[11px] font-semibold text-slate-400">Order #1042</span>
        </div>

        <div className="space-y-3 px-6 pt-6">
          {LINES.map((line, i) => (
            <motion.div
              key={line.name}
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-slate-600">
                <span className="mr-2 inline-block w-4 tabular font-bold text-slate-400">{line.qty}&times;</span>
                {line.name}
              </span>
              <span className="tabular font-semibold text-ink">${money(line.price)}</span>
            </motion.div>
          ))}
        </div>

        <div className="mx-6 mt-5 border-t border-dashed border-slate-200 pt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Subtotal</span>
            <span className="tabular font-semibold text-slate-500">${money(SUBTOTAL)}</span>
          </div>
        </div>

        <div className="px-6 pt-5">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Customer pays with</p>
          <div className="relative flex gap-1 rounded-2xl bg-slate-100 p-1">
            {MODES.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => { setMode(id); setLocked(true) }}
                aria-pressed={mode === id}
                className={`relative flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition-colors ${mode === id ? 'text-white' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {mode === id && (
                  <motion.span
                    layoutId="pay-mode-pill"
                    className="absolute inset-0 rounded-xl bg-dolphin-600 shadow-lg shadow-dolphin-600/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {/* z-10 keeps the label above the pill, which framer-motion
                    can raise mid-layout-animation */}
                <span className="relative z-10 flex items-center gap-2"><Icon size={15} /> {label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 pb-6 pt-5">
          <div className="flex items-end justify-between">
            <span className="pb-1.5 text-sm font-bold text-ink">Total due</span>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={mode}
                initial={reduceMotion ? false : { opacity: 0, y: 14, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={reduceMotion ? {} : { opacity: 0, y: -14, filter: 'blur(6px)' }}
                transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                className="tabular text-4xl font-extrabold text-ink"
              >
                ${money(active.total)}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Keyed but never unmounted: an AnimatePresence exit here would leave
              a visible empty gap on every cycle of the auto-advance. */}
          <motion.div
            key={mode}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`mt-4 flex min-h-[3.75rem] items-start gap-2.5 rounded-2xl px-4 py-3 text-xs font-semibold leading-5 ${mode === 'cash' ? 'bg-dolphin-50 text-dolphin-800' : 'bg-emerald-50 text-emerald-800'}`}
          >
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            {mode === 'cash'
              ? <span>Cash discount applied automatically. You keep the full ${money(SUBTOTAL)}.</span>
              : <span>The ${money(feeAbsorbed)} processing fee is covered at checkout. Your margin stays untouched.</span>}
          </motion.div>
        </div>

        <div className="border-t border-slate-100 bg-slate-50/70 px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">You deposit</span>
            <span className="tabular text-lg font-extrabold text-emerald-600">${money(SUBTOTAL)}</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
