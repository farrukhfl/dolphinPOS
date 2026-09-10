import { useMemo, useState } from 'react'
import { PiggyBank, Receipt, TrendingUp } from 'lucide-react'
import Card from './ui/Card'
import Button from './ui/Button'
import AnimatedNumber from './AnimatedNumber'
import { useBookDemo } from '../lib/BookDemoContext'

const DOLPHIN_FEE_PER_TRANSACTION = 0.47

const formatWhole = (value) => Math.round(value).toLocaleString('en-US')

function Field({ label, prefix, suffix, value, onChange, min, max, step }) {
  const progress = ((value - min) / (max - min)) * 100
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-sm font-semibold text-slate-600">{label}</label>
        <div className="flex items-center rounded-lg border border-slate-300 bg-white px-2.5 py-1">
          {prefix && <span className="text-sm font-bold text-slate-400">{prefix}</span>}
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-20 border-none bg-transparent p-0 text-right text-sm font-bold text-ink focus:outline-none focus:ring-0"
          />
          {suffix && <span className="text-sm font-bold text-slate-400">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ '--range-progress': `${progress}%` }}
        className="w-full"
        aria-label={label}
      />
    </div>
  )
}

export default function SavingsCalculator({ showHeading = true }) {
  const [monthlySales, setMonthlySales] = useState(50000)
  const [avgTicket, setAvgTicket] = useState(25)
  const [rate, setRate] = useState(2.9)
  const { openModal } = useBookDemo()

  const { annualSavings, monthlySavings, currentAnnualFees, monthlyTransactions } = useMemo(() => {
    const safeAvgTicket = Math.max(avgTicket, 1)
    const transactions = monthlySales / safeAvgTicket
    const currentMonthlyFees = monthlySales * (rate / 100)
    const dolphinMonthlyCost = transactions * DOLPHIN_FEE_PER_TRANSACTION
    const savings = Math.max(currentMonthlyFees - dolphinMonthlyCost, 0)
    return {
      annualSavings: savings * 12,
      monthlySavings: savings,
      currentAnnualFees: currentMonthlyFees * 12,
      monthlyTransactions: Math.round(transactions),
    }
  }, [monthlySales, avgTicket, rate])

  return (
    <Card className="grid overflow-hidden lg:grid-cols-2">
      <div className="flex flex-col p-8 sm:p-10">
        {showHeading && (
          <>
            <p className="mb-1 text-xs font-bold tracking-[0.2em] text-dolphin-700">SAVINGS CALCULATOR</p>
            <h3 className="text-2xl font-extrabold text-ink">See what dual pricing saves you</h3>
          </>
        )}
        <div className={`space-y-7 ${showHeading ? 'mt-8' : ''}`}>
          <Field label="Monthly Credit Card Sales" prefix="$" value={monthlySales} onChange={setMonthlySales} min={1000} max={500000} step={1000} />
          <Field label="Average Ticket Size" prefix="$" value={avgTicket} onChange={setAvgTicket} min={5} max={200} step={1} />
          <Field label="Current Processing Rate" suffix="%" value={rate} onChange={setRate} min={1} max={5} step={0.1} />
        </div>
        <p className="mt-auto pt-8 text-xs leading-5 text-slate-400">
          Estimate based on your current effective rate versus a flat $0.47 per transaction on
          Dolphin POS. Your quote is confirmed against a real statement during the demo.
        </p>
      </div>

      <div className="flex flex-col justify-center bg-gradient-to-br from-dolphin-500 to-dolphin-700 p-8 text-white sm:p-10">
        <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-dolphin-200">
          <PiggyBank size={16} /> YOUR POTENTIAL ANNUAL SAVINGS
        </div>
        <p className="mt-3 text-5xl font-extrabold tabular-nums sm:text-6xl">
          $<AnimatedNumber value={annualSavings} format={formatWhole} />
        </p>
        <p className="mt-2 text-sm text-dolphin-100">
          That's ${formatWhole(monthlySavings)} back in your pocket every month.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/15 pt-6">
          <div className="flex items-start gap-2.5">
            <Receipt size={17} className="mt-0.5 shrink-0 text-dolphin-300" />
            <div>
              <p className="text-xs text-dolphin-200">Fees you pay today</p>
              <p className="text-sm font-bold tabular-nums">${formatWhole(currentAnnualFees)}/yr</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <TrendingUp size={17} className="mt-0.5 shrink-0 text-dolphin-300" />
            <div>
              <p className="text-xs text-dolphin-200">Est. monthly transactions</p>
              <p className="text-sm font-bold tabular-nums">{monthlyTransactions.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <Button variant="light" onClick={openModal} className="mt-8 w-full justify-center">Book a Demo</Button>
      </div>
    </Card>
  )
}
