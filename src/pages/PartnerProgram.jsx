import { useState } from 'react'
import { Check, Send } from 'lucide-react'
import Reveal from '../components/Reveal'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import Field, { inputClass } from '../components/ui/Field'
import { referredBenefits, steps, trustStats } from '../data/partnerProgramContent'

const initialForm = {
  fullName: '', email: '', phone: '',
  businessName: '', businessContact: '', businessPhone: '', businessType: '',
  consent: false,
}

const scrollToForm = () => document.getElementById('referral-form')?.scrollIntoView({ behavior: 'smooth' })

export default function PartnerProgram() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (field) => (event) => {
    const value = field === 'consent' ? event.target.checked : event.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.fullName || !form.email || !form.businessName) { setError('Please fill in your info and the referred business name.'); return }
    if (!form.consent) { setError('Please agree to the Privacy Policy to submit your referral.'); return }
    setError('')
    setSubmitted(true)
  }

  return (
    <>
      <section className="dot-grid px-5 pb-16 pt-20 text-center lg:px-8 lg:pt-28">
        <Reveal className="mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-dolphin-700">REFERRAL PARTNER PROGRAM</p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl">Refer. Succeed. Get $500!</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            For every business you refer to Dolphin POS that successfully signs up, you win $500. No fine print or strings attached.
          </p>
          <button onClick={scrollToForm} className="group mx-auto mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-dolphin-600 px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-dolphin-700">
            Become a Referral Partner
          </button>
        </Reveal>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {trustStats.map(({ value, label, icon: Icon }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={20} /></span>
                <p className="mt-4 text-3xl font-extrabold text-dolphin-700">{value}</p>
                <p className="mt-1 text-sm leading-5 text-slate-500">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="HOW IT WORKS" title="Three steps. That's it." align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map(({ title, body, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={22} /></span>
                  <h3 className="mt-4 text-xl font-bold text-ink">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="referral-form" className="px-5 py-24 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <Card className="p-8 sm:p-10">
            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-dolphin-50 text-dolphin-700"><Check size={28} /></div>
                <h2 className="text-2xl font-extrabold text-ink">Referral submitted!</h2>
                <p className="mt-3 text-slate-600">We'll reach out to {form.businessName} — and to you once your $500 reward is ready.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-extrabold text-ink">Start referring today</h2>
                {/* TODO: confirm referral form fields with backend before launch — live site had this form unbuilt (placeholder text) */}
                <form className="mt-6 space-y-8" onSubmit={handleSubmit}>
                  <div>
                    <p className="mb-4 text-xs font-bold tracking-[0.15em] text-dolphin-700">YOUR INFORMATION</p>
                    <div className="space-y-5">
                      <Field label="Full Name" htmlFor="ref-name">
                        <input id="ref-name" type="text" value={form.fullName} onChange={update('fullName')} className={inputClass} placeholder="Jane Smith" />
                      </Field>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Email" htmlFor="ref-email">
                          <input id="ref-email" type="email" value={form.email} onChange={update('email')} className={inputClass} placeholder="jane@email.com" />
                        </Field>
                        <Field label="Phone" htmlFor="ref-phone">
                          <input id="ref-phone" type="tel" value={form.phone} onChange={update('phone')} className={inputClass} placeholder="(555) 123-4567" />
                        </Field>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-xs font-bold tracking-[0.15em] text-dolphin-700">REFERRED BUSINESS INFORMATION</p>
                    <div className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Business Name" htmlFor="ref-biz-name">
                          <input id="ref-biz-name" type="text" value={form.businessName} onChange={update('businessName')} className={inputClass} placeholder="Business name" />
                        </Field>
                        <Field label="Business Contact Name" htmlFor="ref-biz-contact">
                          <input id="ref-biz-contact" type="text" value={form.businessContact} onChange={update('businessContact')} className={inputClass} placeholder="Contact name" />
                        </Field>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Business Phone" htmlFor="ref-biz-phone">
                          <input id="ref-biz-phone" type="tel" value={form.businessPhone} onChange={update('businessPhone')} className={inputClass} placeholder="(555) 123-4567" />
                        </Field>
                        <Field label="Business Type/Industry" htmlFor="ref-biz-type">
                          <input id="ref-biz-type" type="text" value={form.businessType} onChange={update('businessType')} className={inputClass} placeholder="e.g. Retail, Restaurant" />
                        </Field>
                      </div>
                    </div>
                  </div>

                  <label className="flex items-start gap-2.5 text-xs leading-5 text-slate-500">
                    <input type="checkbox" checked={form.consent} onChange={update('consent')} className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-dolphin-600 focus:ring-dolphin-500" />
                    By submitting this form, you agree to our Privacy Policy and consent to being contacted regarding our Referral Partner Program.
                  </label>

                  {error && <p className="text-xs font-semibold text-red-600">{error}</p>}

                  <button type="submit" className="flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-dolphin-600 text-sm font-bold text-white transition hover:bg-dolphin-700">
                    Submit Referral <Send size={15} />
                  </button>
                </form>
              </>
            )}
          </Card>
        </Reveal>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 text-center lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="NO LIMITS" title="Refer more. Earn more. Repeat nonstop." align="center" className="mx-auto" />
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            There are no caps, quotas, or monthly limits. Every successful referral earns you another $500, so your earning potential is entirely up to you.
          </p>
        </Reveal>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="THE PAYOFF" title="Why they'll thank you" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {referredBenefits.map(({ title, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="interactive-card flex h-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={20} /></span>
                  <span className="text-sm font-bold text-ink">{title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="dot-grid blue-glow relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-dolphin-500 to-dolphin-700 px-8 py-16 text-center sm:px-16">
          <h2 className="text-balance mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">Start earning $500 per referral today!</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-dolphin-100">Unlimited bonuses await you. Get started.</p>
          <button onClick={scrollToForm} className="mx-auto mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-dolphin-800 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-dolphin-50">
            Become a Referral Partner
          </button>
        </div>
      </section>
    </>
  )
}
