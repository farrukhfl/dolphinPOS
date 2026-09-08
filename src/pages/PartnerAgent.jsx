import { useState } from 'react'
import { Check, Phone, Send, TrendingUp, Users2, Wallet } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import Field, { inputClass } from '../components/ui/Field'
import FAQAccordion from '../components/FAQAccordion'
import { PHONE, PHONE_TEL } from '../lib/nav'
import { experienceOptions, faqs, incomeSteps, trustBadges, valueProps } from '../data/partnerAgentContent'

const initialForm = { name: '', email: '', phone: '', company: '', experience: experienceOptions[0], consent: false }
const scrollToForm = () => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })

const dashboardStats = [
  { label: 'Active Merchants', value: '38', icon: Users2 },
  { label: 'Monthly Commission', value: '$4,120', icon: Wallet },
  { label: 'Portfolio Growth', value: '+12%', icon: TrendingUp },
]

export default function PartnerAgent() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (field) => (event) => {
    const value = field === 'consent' ? event.target.checked : event.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.email) { setError('Please fill in your name and email.'); return }
    if (!form.consent) { setError('Please agree to be contacted to submit your application.'); return }
    setError('')
    setSubmitted(true)
  }

  return (
    <>
      <section className="dot-grid px-5 pb-16 pt-20 text-center lg:px-8 lg:pt-28">
        <Reveal className="mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-dolphin-700">DOLPHIN POS PARTNER PROGRAM</p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Build Your Merchant Portfolio. Earn Every Month.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Partner with Dolphin POS to help businesses adopt a better POS system while earning recurring monthly commissions from your merchant portfolio.
          </p>
          <button onClick={scrollToForm} className="group mx-auto mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-dolphin-600 px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-dolphin-700">
            Become a Partner
          </button>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {trustBadges.map(({ label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-2.5 rounded-2xl border border-slate-200 bg-white p-5 text-center">
                <Icon size={20} className="text-dolphin-600" />
                <span className="text-xs font-bold leading-4 text-ink">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="HOW IT WORKS" title="How partnership becomes income" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {incomeSteps.map(({ title, body, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={20} /></span>
                  <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                  <span className="absolute -top-2.5 left-5 rounded-full bg-dolphin-600 px-2 py-0.5 text-[10px] font-bold text-white">{i + 1}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-4xl text-center">
          <SectionHeading eyebrow="THE HOOK" title="The benefit that sells itself: Built-in dual pricing" align="center" className="mx-auto" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Every merchant you refer already feels the pain of credit card processing fees. Dolphin POS's built-in dual pricing offsets that cost automatically, giving you a lead-in that sells itself before you even mention hardware or features.
          </p>
          <Button to="/dual-pricing" className="mx-auto mt-8">Explore Dual Pricing in Detail</Button>
        </Reveal>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="WHAT YOU'RE SELLING" title="The Product Behind Your Success" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map(({ title, body, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <Card className="interactive-card h-full p-6">
                  <span className="icon-lift flex h-11 w-11 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={20} /></span>
                  <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}><Button to="/pos-systems" className="mx-auto mt-10">Explore Dolphin POS</Button></Reveal>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal><SectionHeading eyebrow="PARTNER PORTAL" title="Run your partner business with complete visibility" body="Everything you need to track performance, manage merchants, and measure your progress." align="center" className="mx-auto" /></Reveal>
          <Reveal delay={0.1}>
            <Card className="mt-12 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">
                <p className="text-sm font-bold text-ink">Partner Dashboard</p>
                <span className="rounded-full bg-dolphin-50 px-3 py-1 text-xs font-bold text-dolphin-700">Live</span>
              </div>
              <div className="grid gap-px bg-slate-100 sm:grid-cols-3">
                {dashboardStats.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="bg-white p-7">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-dolphin-50 text-dolphin-700"><Icon size={18} /></span>
                    <p className="mt-4 text-3xl font-extrabold text-ink">{value}</p>
                    <p className="mt-1 text-sm text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section id="partner-form" className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <Card className="p-8 sm:p-10">
            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-dolphin-50 text-dolphin-700"><Check size={28} /></div>
                <h2 className="text-2xl font-extrabold text-ink">Application received!</h2>
                <p className="mt-3 text-slate-600">Thanks, {form.name.split(' ')[0] || 'there'} — our partner team will follow up shortly.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-extrabold text-ink">Become a Dolphin POS Partner</h2>
                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" htmlFor="partner-name">
                      <input id="partner-name" type="text" value={form.name} onChange={update('name')} className={inputClass} placeholder="Jane Smith" />
                    </Field>
                    <Field label="Email" htmlFor="partner-email">
                      <input id="partner-email" type="email" value={form.email} onChange={update('email')} className={inputClass} placeholder="jane@email.com" />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone" htmlFor="partner-phone">
                      <input id="partner-phone" type="tel" value={form.phone} onChange={update('phone')} className={inputClass} placeholder="(555) 123-4567" />
                    </Field>
                    <Field label="Company/Agency Name" htmlFor="partner-company">
                      <input id="partner-company" type="text" value={form.company} onChange={update('company')} className={inputClass} placeholder="Optional" />
                    </Field>
                  </div>
                  <Field label="Experience Level" htmlFor="partner-experience">
                    <select id="partner-experience" value={form.experience} onChange={update('experience')} className={inputClass}>
                      {experienceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </Field>

                  <label className="flex items-start gap-2.5 text-xs leading-5 text-slate-500">
                    <input type="checkbox" checked={form.consent} onChange={update('consent')} className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-dolphin-600 focus:ring-dolphin-500" />
                    By checking this box and submitting this form, you consent to Dolphin POS collecting and using the information you've provided to contact you about our Partner Agent Program, products, services, and related business opportunities. We respect your privacy, will handle your information in accordance with our Privacy Policy, and will never sell your personal information. You can opt out of marketing communications at any time.
                  </label>

                  {error && <p className="text-xs font-semibold text-red-600">{error}</p>}

                  <button type="submit" className="flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-dolphin-600 text-sm font-bold text-white transition hover:bg-dolphin-700">
                    Submit <Send size={15} />
                  </button>
                </form>
              </>
            )}
          </Card>
        </Reveal>
      </section>

      <FAQAccordion items={faqs} title="Partner program, answered" body="What agents ask most before joining the Dolphin POS partner program." />

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="dot-grid blue-glow relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-dolphin-500 to-dolphin-700 px-8 py-16 text-center sm:px-16">
          <h2 className="text-balance mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">Join the Partner Program</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-dolphin-100">Help businesses save thousands on credit card processing with Dolphin POS.</p>
          <a href={PHONE_TEL} className="group mx-auto mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-dolphin-800 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-dolphin-50">
            <Phone size={16} /> Call Sales: {PHONE}
          </a>
        </div>
      </section>
    </>
  )
}
