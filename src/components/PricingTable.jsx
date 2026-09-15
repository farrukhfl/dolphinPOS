import { Fragment, useRef } from 'react'
import { Check, ChevronRight, X } from 'lucide-react'
import { featureGroups, tiers } from '../data/pricingContent'
import { useScrollEdges } from '../lib/useScrollEdges'

export default function PricingTable() {
  const scrollRef = useRef(null)
  const { showLeftFade, showRightFade } = useScrollEdges(scrollRef)

  return (
    <div>
      {showRightFade && (
        <p className="mb-2 text-center text-xs font-semibold text-dolphin-700 sm:hidden">Swipe to compare all plans →</p>
      )}
      <div className="relative">
        {showRightFade && (
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-14 items-center justify-end bg-gradient-to-l from-white to-transparent pr-1.5" aria-hidden="true">
            <ChevronRight size={16} className="animate-pulse text-dolphin-400" />
          </div>
        )}
        {showLeftFade && (
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent" aria-hidden="true" />
        )}
        <div
          ref={scrollRef}
          className="overflow-x-auto rounded-2xl border border-slate-200 bg-white"
          role="region"
          aria-label="Pricing plan comparison"
          tabIndex={0}
        >
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="w-1/4 px-6 py-5 align-bottom font-bold text-slate-500">Plan</th>
                {tiers.map((tier) => (
                  <th key={tier.name} className="px-6 py-5 align-bottom">
                    <p className="text-base font-extrabold text-dolphin-700">{tier.name}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-6 py-5 font-semibold text-ink">Tagline</td>
                {tiers.map((tier) => (
                  <td key={tier.name} className="px-6 py-5 text-sm leading-6 text-slate-600">{tier.tagline}</td>
                ))}
              </tr>
              <tr className="border-b border-slate-200">
                <td className="px-6 py-5 font-semibold text-ink">Best For</td>
                {tiers.map((tier) => (
                  <td key={tier.name} className="px-6 py-5 text-sm font-semibold text-slate-700">{tier.bestFor}</td>
                ))}
              </tr>

              {featureGroups.map((group) => (
                <Fragment key={group.title}>
                  <tr className="bg-dolphin-50">
                    <td colSpan={4} className="px-6 py-3 text-xs font-bold tracking-[0.15em] text-dolphin-700">{group.title.toUpperCase()}</td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label} className="border-b border-slate-100 last:border-0">
                      <td className="px-6 py-4 text-slate-700">{row.label}</td>
                      {row.values.map((value, i) => (
                        <td key={i} className="px-6 py-4">
                          {value ? <Check className="text-dolphin-600" size={18} /> : <X className="text-slate-300" size={18} />}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
