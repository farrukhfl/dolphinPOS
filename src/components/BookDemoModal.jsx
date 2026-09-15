import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, Check, X } from 'lucide-react'
import { useBookDemo } from '../lib/BookDemoContext'
import { ApiError, submitContact } from '../lib/api'
import { useBotGuard } from '../lib/useBotGuard'

const PRODUCTS = ['Dolphin POS', 'Dolphin Software', 'Dolphin Hardware']

// toISOString() converts to UTC, which rolls over to the next day hours
// before local midnight west of UTC (e.g. ~4pm PST) — that made "today" an
// invalid date-picker choice for most US visitors for a chunk of every
// evening. Build the date from local components instead.
const todayLocalISODate = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const initialForm = { name: '', email: '', phone: '', businessName: '', businessWebsite: '', date: '', product: PRODUCTS[0], consent: false }

export default function BookDemoModal() {
  const { isOpen, closeModal } = useBookDemo()
  const { honeypotProps, isBot } = useBotGuard()
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const dialogRef = useRef(null)
  const previouslyFocused = useRef(null)

  const handleClose = () => {
    closeModal()
    setTimeout(() => { setSubmitted(false); setForm(initialForm); setError(''); setSubmitting(false) }, 300)
  }

  // Standard dialog behavior: Escape closes it, Tab/Shift+Tab stay looped inside
  // it while open, and focus returns to whatever opened it once it closes.
  useEffect(() => {
    if (!isOpen) return undefined
    previouslyFocused.current = document.activeElement
    dialogRef.current?.focus()

    const getFocusable = () => {
      const dialog = dialogRef.current
      if (!dialog) return []
      return Array.from(dialog.querySelectorAll('a[href], button, input, select, textarea, [tabindex]'))
        .filter((el) => !el.disabled && el.tabIndex !== -1 && el.offsetParent !== null)
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        handleClose()
        return
      }
      if (event.key !== 'Tab') return
      const focusable = getFocusable()
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    // Capture phase: fires before any other document-level keydown listener
    // (and isn't skipped if something else in the bubble chain stops
    // propagation), which is what made Escape-to-close intermittent in
    // WebKit/Firefox under automated testing.
    document.addEventListener('keydown', onKeyDown, true)
    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
      previouslyFocused.current?.focus?.()
    }
  }, [isOpen])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitting) return
    if (isBot()) { setSubmitted(true); return }
    if (!form.name || !form.email || !form.phone || !form.businessName || !form.businessWebsite || !form.date) {
      setError('Please fill in all required fields.')
      return
    }
    if (!form.consent) { setError('Please confirm you agree to be contacted about your appointment.'); return }
    setError('')
    setSubmitting(true)
    try {
      await submitContact({
        fullName: form.name,
        phoneNo: form.phone,
        email: form.email,
        businessName: form.businessName,
        businessWebsite: form.businessWebsite,
        yourRequire: 'Demo',
        message: `Requested a demo of ${form.product} for ${form.date}.`,
      })
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const update = (field) => (event) => {
    const value = field === 'consent' ? event.target.checked : event.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="absolute inset-0 bg-dolphin-900/70 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />
          <motion.div
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-demo-title"
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl outline-none sm:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className="absolute right-5 top-5 rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-ink" onClick={handleClose} aria-label="Close">
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-dolphin-50 text-dolphin-700">
                  <Check size={28} />
                </div>
                <h2 className="text-2xl font-extrabold text-ink">You're all set!</h2>
                <p className="mt-3 text-slate-600">
                  Thanks, {form.name.split(' ')[0] || 'there'}. We'll reach out to confirm your appointment on {form.date || 'your selected date'} for {form.product}.
                </p>
                <button className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-dolphin-700 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-dolphin-800" onClick={handleClose}>
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="mb-1 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-dolphin-700">
                  <CalendarDays size={15} /> SCHEDULE A DEMO
                </div>
                <h2 id="book-demo-title" className="text-2xl font-extrabold text-ink sm:text-3xl">Book a Demo</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">See dual pricing and Dolphin POS in action — pick a date and we'll confirm a time that works for you.</p>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                  <input type="text" {...honeypotProps} />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="demo-name" className="mb-1.5 block text-xs font-semibold text-slate-600">Full Name</label>
                      <input id="demo-name" type="text" value={form.name} onChange={update('name')} className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400" placeholder="Jane Smith" />
                    </div>
                    <div>
                      <label htmlFor="demo-email" className="mb-1.5 block text-xs font-semibold text-slate-600">Email</label>
                      <input id="demo-email" type="email" value={form.email} onChange={update('email')} className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400" placeholder="jane@business.com" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="demo-phone" className="mb-1.5 block text-xs font-semibold text-slate-600">Phone</label>
                      <input id="demo-phone" type="tel" value={form.phone} onChange={update('phone')} className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400" placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label htmlFor="demo-date" className="mb-1.5 block text-xs font-semibold text-slate-600">Preferred Date</label>
                      <input id="demo-date" type="date" value={form.date} onChange={update('date')} min={todayLocalISODate()} className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-ink" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="demo-business" className="mb-1.5 block text-xs font-semibold text-slate-600">Business Name</label>
                      <input id="demo-business" type="text" value={form.businessName} onChange={update('businessName')} className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400" placeholder="Business name" />
                    </div>
                    <div>
                      <label htmlFor="demo-website" className="mb-1.5 block text-xs font-semibold text-slate-600">Business Website</label>
                      <input id="demo-website" type="text" value={form.businessWebsite} onChange={update('businessWebsite')} className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-400" placeholder="yourbusiness.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="demo-product" className="mb-1.5 block text-xs font-semibold text-slate-600">Select Product</label>
                    <select id="demo-product" value={form.product} onChange={update('product')} className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-ink">
                      {PRODUCTS.map((product) => <option key={product} value={product}>{product}</option>)}
                    </select>
                  </div>

                  <label className="flex items-start gap-2.5 text-xs leading-5 text-slate-500">
                    <input type="checkbox" checked={form.consent} onChange={update('consent')} className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-dolphin-600 focus:ring-dolphin-500" />
                    I agree to be contacted by Dolphin POS about my appointment via phone, text, or email.
                  </label>

                  {error && <p className="text-xs font-semibold text-red-600">{error}</p>}

                  <button type="submit" disabled={submitting} className="mt-2 w-full min-h-12 rounded-full bg-dolphin-700 text-sm font-bold text-white transition hover:bg-dolphin-800 disabled:opacity-60">
                    {submitting ? 'Scheduling…' : 'Schedule Appointment'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
