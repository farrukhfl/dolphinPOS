import { useState } from 'react'
import { Check, Search } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import Field, { inputClass } from '../components/ui/Field'
import { benefits, hiringProcess, whyItMatters } from '../data/careersContent'
import { ApiError, submitCareers } from '../lib/api'
import { useBotGuard } from '../lib/useBotGuard'

export default function Careers() {
  const { honeypotProps, isBot } = useBotGuard()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const update = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }))
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitting) return
    if (isBot()) { setSubmitted(true); return }
    setError('')
    setSubmitting(true)
    try {
      await submitCareers({
        fullName: form.name,
        phoneNo: form.phone,
        email: form.email,
        coverLetter: form.message,
      })
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="dot-grid px-5 pb-16 pt-20 text-center lg:px-8 lg:pt-28">
        <Reveal className="mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-dolphin-700">HOW TO SET UP</p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl">Work at Dolphin</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Build your career designing and marketing technology and products that shape how businesses work and thrive.
          </p>
          <p className="mt-3 text-xs font-semibold text-slate-400">On-site, remote, and hybrid opportunities available.</p>
        </Reveal>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="WHY OUR WORK MATTERS" title="We build smarter commerce technology for growing businesses." />
            <p className="mt-5 leading-7 text-slate-600">
              Too many businesses get priced out of the tools that could help them grow, forced into upgrades and add-ons just to access features that should be standard.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              We build the opposite: technology that solves real problems without the hidden cost, so the businesses we serve can actually afford to grow.
            </p>
            <Button to="/job-openings" className="mt-7">Search Open Roles</Button>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {whyItMatters.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <Check size={18} className="mt-0.5 shrink-0 text-dolphin-600" />
                  <span className="text-sm font-semibold text-ink">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="OUR HIRING PROCESS" title="Benefit from straightforward hiring" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {hiringProcess.map(({ title, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-5 text-center">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={19} /></span>
                  <p className="mt-3 text-xs font-bold leading-4 text-ink">{title}</p>
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-dolphin-600 px-2 py-0.5 text-[10px] font-bold text-white">{i + 1}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 text-center lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="OPEN ROLES" title="Explore available roles" align="center" className="mx-auto" />
          <Button to="/job-openings" variant="secondary" className="mx-auto mt-8"><Search size={16} className="mr-1" /> Search Jobs</Button>
        </Reveal>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="BENEFITS" title="A wide range of benefits" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ title, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <div className="interactive-card flex h-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={20} /></span>
                  <span className="font-bold text-ink">{title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-xl">
          <Card className="p-8 sm:p-10">
            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-dolphin-50 text-dolphin-700"><Check size={28} /></div>
                <h3 className="text-2xl font-extrabold text-ink">You're in the network!</h3>
                <p className="mt-3 text-slate-600">We'll reach out to {form.name.split(' ')[0] || 'you'} when a matching role opens up.</p>
              </div>
            ) : (
              <>
                <p className="text-xs font-bold tracking-[0.2em] text-dolphin-700">DON'T SEE THE RIGHT ROLE?</p>
                <h3 className="mt-2 text-2xl font-extrabold text-ink">Join our Talent Network</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Upload your resume. We'll reach out when something fits.</p>
                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                  <input type="text" {...honeypotProps} />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" htmlFor="careers-name">
                      <input id="careers-name" type="text" required value={form.name} onChange={update('name')} className={inputClass} placeholder="Jane Smith" />
                    </Field>
                    <Field label="Email" htmlFor="careers-email">
                      <input id="careers-email" type="email" required value={form.email} onChange={update('email')} className={inputClass} placeholder="jane@email.com" />
                    </Field>
                  </div>
                  <Field label="Phone (optional)" htmlFor="careers-phone">
                    <input id="careers-phone" type="tel" value={form.phone} onChange={update('phone')} className={inputClass} placeholder="(555) 123-4567" />
                  </Field>
                  <Field label="Message (optional)" htmlFor="careers-message">
                    <textarea id="careers-message" rows={3} value={form.message} onChange={update('message')} className={inputClass} placeholder="Tell us what you're looking for..." />
                  </Field>

                  {error && <p className="text-xs font-semibold text-red-600">{error}</p>}

                  <button type="submit" disabled={submitting} className="w-full min-h-12 rounded-full bg-dolphin-600 text-sm font-bold text-white transition hover:bg-dolphin-700 disabled:opacity-60">
                    {submitting ? 'Submitting…' : 'Submit Application'}
                  </button>
                </form>
              </>
            )}
          </Card>
        </Reveal>
      </section>
    </>
  )
}
