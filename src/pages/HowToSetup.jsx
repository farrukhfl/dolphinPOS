import { useState } from 'react'
import { Check, Clock, Mail, PlayCircle, Timer, Phone as PhoneIcon, VideoOff } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion from '../components/FAQAccordion'
import VideoModal from '../components/VideoModal'
import { useBookDemo } from '../lib/BookDemoContext'
import { PHONE, PHONE_TEL, EMAIL_SUPPORT } from '../lib/nav'
import { checklist, faqs, steps } from '../data/setupContent'

const DOLPHIN_LOGIN_PORTAL = 'https://dolphinposportal.com'

export default function HowToSetup() {
  const [activeVideo, setActiveVideo] = useState(null)
  const { openModal } = useBookDemo()

  const supportItems = [
    { title: 'Call Us', detail: PHONE, icon: PhoneIcon, href: PHONE_TEL },
    { title: 'Email Support', detail: EMAIL_SUPPORT, icon: Mail, href: `mailto:${EMAIL_SUPPORT}` },
    { title: 'Book Setup Assistance', detail: 'Schedule a 1-on-1 session', icon: Timer, onClick: openModal },
  ]

  return (
    <>
      <section className="dot-grid px-5 pb-16 pt-20 text-center lg:px-8 lg:pt-28">
        <Reveal className="mx-auto max-w-3xl">
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl">Set Up Your Dolphin POS</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Follow our simple video tutorials and get your business up and running in no time.
          </p>
          <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-dolphin-200 bg-dolphin-50 px-4 py-2 text-xs font-bold text-dolphin-700">
            <Clock size={14} /> Estimated set up time: 30-60 minutes
          </div>
          <div className="mt-8">
            <Button to="/contact-us" className="mx-auto">Start Setup</Button>
          </div>
        </Reveal>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <Card className="p-8">
            <h2 className="text-lg font-bold text-ink">Before you begin</h2>
            <ul className="mt-5 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 shrink-0 text-dolphin-600" />
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </section>

      <section className="bg-dolphin-50 px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal><SectionHeading eyebrow="SETUP VIDEOS" title="Complete your Dolphin POS setup" body="Follow these 7 videos in order to set up your store the right way." align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 space-y-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.05}>
                <Card className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-dolphin-50 text-sm font-extrabold text-dolphin-700">{step.n}</span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{step.description}</p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                      <Clock size={12} /> {step.duration}
                    </div>
                  </div>
                  {step.available ? (
                    <button onClick={() => setActiveVideo(step)} className="group inline-flex shrink-0 min-h-11 items-center justify-center gap-2 rounded-full bg-dolphin-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-dolphin-700">
                      <PlayCircle size={16} /> Watch Video
                    </button>
                  ) : (
                    <button onClick={() => setActiveVideo(step)} className="inline-flex shrink-0 min-h-11 items-center justify-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-sm font-bold text-slate-400 transition hover:bg-slate-200">
                      <VideoOff size={16} /> Video Coming Soon
                    </button>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />

      <section className="px-5 py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal><SectionHeading eyebrow="NEED HELP?" title="We're here if you get stuck" align="center" className="mx-auto" /></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {supportItems.map(({ title, detail, icon: Icon, href, onClick }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                {href ? (
                  <a href={href} className="interactive-card flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-7 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={22} /></span>
                    <h3 className="text-base font-bold text-ink">{title}</h3>
                    <p className="font-semibold text-dolphin-700">{detail}</p>
                  </a>
                ) : (
                  <button onClick={onClick} className="interactive-card flex h-full w-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-7 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-dolphin-50 text-dolphin-700"><Icon size={22} /></span>
                    <h3 className="text-base font-bold text-ink">{title}</h3>
                    <p className="font-semibold text-dolphin-700">{detail}</p>
                  </button>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={faqs} title="Setup questions, answered" body="What merchants ask most while getting Dolphin POS up and running." />

      <section className="bg-dolphin-50 px-5 py-24 text-center lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="ALL SET" title="You're Ready!" align="center" className="mx-auto" />
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Once you've completed the 7 steps, you're ready to run your first sale.
          </p>
          <a href={DOLPHIN_LOGIN_PORTAL} target="_blank" rel="noopener noreferrer" className="mx-auto mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-dolphin-600 px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-dolphin-700">
            Log in to Dolphin POS
          </a>
        </Reveal>
      </section>
    </>
  )
}
