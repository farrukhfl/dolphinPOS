import { useState } from 'react'
import { Check, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import Field, { inputClass } from '../components/ui/Field'
import FinalCTA from '../components/FinalCTA'
import { useBookDemo } from '../lib/BookDemoContext'
import { businessTypeOptions, industries, solutionBlocks, values } from '../data/aboutContent'

export default function AboutUs() {
  const { openModal } = useBookDemo()
  const [businessType, setBusinessType] = useState(businessTypeOptions[0])
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="dot-grid px-5 pb-16 pt-20 text-center lg:px-8 lg:pt-28">
        <Reveal className="mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-bold tracking-[0.2em] text-dolphin-700">WHO WE ARE</p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            We Build POS Systems That Businesses Stay With.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            We build POS technology designed to simplify operations, strengthen margins, and help businesses perform at their best.
          </p>
          <Button onClick={openModal} className="mx-auto mt-8">Book a Demo</Button>
        </Reveal>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="WHY WE EXIST" title="Small businesses deserve better technology. So we build it." align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map(({ title, body, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <Card className="interactive-card h-full p-7 text-center">
                  <span className="icon-lift mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={22} /></span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="INDUSTRIES" title="Powering community businesses" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {industries.map(({ title, body, icon: Icon, to, linkText, disabled }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <Card className={`h-full p-7 ${disabled ? 'opacity-60' : 'interactive-card'}`}>
                  <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${disabled ? 'bg-slate-100 text-slate-400' : 'bg-dolphin-50 text-dolphin-700'}`}><Icon size={22} /></span>
                  <h3 className={`mt-5 text-lg font-bold ${disabled ? 'text-slate-500' : 'text-ink'}`}>{title}</h3>
                  <p className={`mt-2 text-sm leading-6 ${disabled ? 'text-slate-400' : 'text-slate-600'}`}>{body}</p>
                  {disabled ? (
                    <span className="mt-4 inline-block text-sm font-bold text-slate-400">{linkText}</span>
                  ) : (
                    <Link to={to} className="mt-4 inline-block text-sm font-bold text-dolphin-700 hover:text-dolphin-800">{linkText} →</Link>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="OUR SOLUTIONS" title="One Complete Point of Sale" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {solutionBlocks.map(({ title, body, icon: Icon, points }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <Card className="h-full p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={22} /></span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
                  <ul className="mt-6 space-y-3">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm font-semibold text-ink">
                        <Check size={16} className="mt-0.5 shrink-0 text-dolphin-600" /> {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}><Button to="/pos-systems" className="mx-auto mt-10">Explore Dolphin POS</Button></Reveal>
        </div>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow="LOOKING AHEAD" title="Here for the long run" align="center" className="mx-auto" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We're investing in technology that helps businesses adapt to changing payments, rising costs, multi-location growth, automation, and smarter decision-making — without forcing them to start over every few years.
          </p>
          <Button to="/pos-systems" className="mx-auto mt-8">Explore Dolphin POS</Button>
        </Reveal>
      </section>

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-xl">
          <Card className="p-8 sm:p-10">
            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-dolphin-50 text-dolphin-700"><Check size={28} /></div>
                <h3 className="text-2xl font-extrabold text-ink">Thanks for reaching out!</h3>
                <p className="mt-3 text-slate-600">Our team will be in touch about your {businessType.toLowerCase()} business shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-extrabold text-ink">Tell us about your business</h3>
                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                  <Field label="Business Type" htmlFor="business-type">
                    <select id="business-type" value={businessType} onChange={(e) => setBusinessType(e.target.value)} className={inputClass}>
                      {businessTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                    </select>
                  </Field>
                  <button type="submit" className="flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-dolphin-600 text-sm font-bold text-white transition hover:bg-dolphin-700">
                    Start the Conversation <Send size={15} />
                  </button>
                </form>
              </>
            )}
          </Card>
        </Reveal>
      </section>

      <FinalCTA />
    </>
  )
}
