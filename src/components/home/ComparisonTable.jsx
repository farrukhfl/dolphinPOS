import { motion, useReducedMotion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import Reveal from '../Reveal'
import { comparisonRows } from '../../data/homeContent'

const HIGHLIGHT = 'bg-dolphin-50/80 border-x border-dolphin-200'

function Cell({ value, highlight }) {
  if (typeof value === 'boolean') {
    return value
      ? (
        <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${highlight ? 'bg-dolphin-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
          <Check size={14} strokeWidth={3} />
        </span>
      )
      : (
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-300">
          <X size={14} strokeWidth={3} />
        </span>
      )
  }
  return <span className={highlight ? 'font-extrabold text-dolphin-700' : 'text-slate-500'}>{value}</span>
}

/**
 * Side-by-side with the Dolphin column visually lifted out of the table so the
 * comparison reads as a recommendation, not a neutral spec sheet.
 */
export default function ComparisonTable() {
  const reduceMotion = useReducedMotion()

  return (
    <Reveal>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-left text-sm">
            <caption className="sr-only">Dolphin POS compared with a traditional point-of-sale system</caption>
            <colgroup>
              <col className="w-[40%]" />
              <col className="w-[30%]" />
              <col className="w-[30%]" />
            </colgroup>
            <thead>
              <tr className="border-b border-slate-200">
                <th scope="col" className="px-6 py-5 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Feature</th>
                {/* Dolphin column is tinted cell-by-cell so the highlight can never
                    drift out of alignment the way an absolute overlay would. */}
                <th scope="col" className={`${HIGHLIGHT} border-t-0 px-6 py-5`}>
                  <span className="flex items-center gap-2 text-base font-extrabold text-dolphin-700">
                    <span className="h-2 w-2 rounded-full bg-dolphin-600" /> Dolphin POS
                  </span>
                </th>
                <th scope="col" className="px-6 py-5 text-base font-bold text-slate-400">Traditional POS</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="border-b border-slate-100 last:border-0"
                >
                  <th scope="row" className="px-6 py-5 text-left font-semibold text-ink">{row.feature}</th>
                  <td className={`${HIGHLIGHT} px-6 py-5`}><Cell value={row.dolphin} highlight /></td>
                  <td className="px-6 py-5"><Cell value={row.traditional} /></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  )
}
