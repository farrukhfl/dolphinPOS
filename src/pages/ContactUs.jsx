import { useState } from 'react'
import { Check, Phone, Send } from 'lucide-react'
import Reveal from '../components/Reveal'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import Field, { inputClass } from '../components/ui/Field'
import { EMAIL_SUPPORT, PHONE, PHONE_TEL } from '../lib/nav'
import { requireOptions, supportCards, topicCards } from '../data/contactContent'

const initialForm = { name: '', phone: '', email: '', businessName: '', website: '', require: requireOptions[0], message: '' }

export default function ContactUs() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }))

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="dot-grid px-5 pb-16 pt-20 text-center lg:px-8 lg:pt-28">
        <Reveal className="mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-dolphin-700">CONTACT US</p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Setting up your business with Dolphin POS is easy.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Answer a few questions to connect with our sales team and see if you qualify for the complete Dolphin POS system for just $49.99*.
          </p>
          <p className="mt-3 text-xs text-slate-400">*Limited-time offer. U.S. businesses only.</p>
        </Reveal>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <Reveal className="mx-auto max-w-2xl">
          <Card className="p-8 sm:p-10">
            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-dolphin-50 text-dolphin-700"><Check size={28} /></div>
                <h2 className="text-2xl font-extrabold text-ink">Thanks, {form.name.split(' ')[0] || 'there'}!</h2>
                <p className="mt-3 text-slate-600">Our sales team will reach out shortly about {form.businessName || 'your business'}.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-extrabold text-ink">Get started here</h2>
                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" htmlFor="contact-name">
                      <input id="contact-name" type="text" required value={form.name} onChange={update('name')} className={inputClass} placeholder="Jane Smith" />
                    </Field>
                    <Field label="Phone Number" htmlFor="contact-phone">
                      <input id="contact-phone" type="tel" required value={form.phone} onChange={update('phone')} className={inputClass} placeholder="(555) 123-4567" />
                    </Field>
                  </div>
                  <Field label="Email Address" htmlFor="contact-email">
                    <input id="contact-email" type="email" required value={form.email} onChange={update('email')} className={inputClass} placeholder="jane@business.com" />
                  </Field>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Business Name" htmlFor="contact-business">
                      <input id="contact-business" type="text" value={form.businessName} onChange={update('businessName')} className={inputClass} placeholder="Business name" />
                    </Field>
                    <Field label="Business Website" htmlFor="contact-website">
                      <input id="contact-website" type="text" value={form.website} onChange={update('website')} className={inputClass} placeholder="yourbusiness.com" />
                    </Field>
                  </div>
                  <Field label="Your Require" htmlFor="contact-require">
                    <select id="contact-require" value={form.require} onChange={update('require')} className={inputClass}>
                      {requireOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </Field>
                  <Field label="Your Message" htmlFor="contact-message">
                    <textarea id="contact-message" rows={4} value={form.message} onChange={update('message')} className={inputClass} placeholder="Tell us a bit about your business..." />
                  </Field>
                  <button type="submit" className="flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-dolphin-600 text-sm font-bold text-white transition hover:bg-dolphin-700">
                    Start the Conversation <Send size={15} />
                  </button>
                </form>
              </>
            )}
          </Card>

          <p className="mt-8 text-center text-sm leading-6 text-slate-500">
            Already a Dolphin customer? Reach out to customer support at{' '}
            <a href={PHONE_TEL} className="font-bold text-dolphin-700">{PHONE}</a> or send us an email at{' '}
            <a href={`mailto:${EMAIL_SUPPORT}`} className="font-bold text-dolphin-700">{EMAIL_SUPPORT}</a> for non-urgent queries.
          </p>
        </Reveal>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="24/7/365 SUPPORT" title="We're here whenever you need us" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {supportCards.map(({ title, body, detail, note, icon: Icon, href }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <Card className="h-full p-7 text-center">
                  <span className="icon-lift mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={22} /></span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{body}</p>
                  {href ? <a href={href} className="mt-3 block font-bold text-dolphin-700">{detail}</a> : <p className="mt-3 font-bold text-dolphin-700">{detail}</p>}
                  <p className="mt-1 text-xs text-slate-400">{note}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="WHAT DO YOU NEED" title="Our team can help you" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {topicCards.map(({ label, icon: Icon }, i) => (
              <Reveal key={label} delay={i * 0.06}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={20} /></span>
                  <span className="text-xs font-bold leading-4 text-ink">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="dot-grid blue-glow relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-dolphin-500 to-dolphin-700 px-8 py-16 text-center sm:px-16">
          <h2 className="text-balance mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">Ready to experience Dolphin POS?</h2>
          <a href={PHONE_TEL} className="group mx-auto mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-dolphin-800 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-dolphin-50">
            <Phone size={16} /> Call Sales: {PHONE}
          </a>
        </div>
      </section>
    </>
  )
}
