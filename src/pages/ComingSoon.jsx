import { Construction } from 'lucide-react'
import Button from '../components/ui/Button'

export default function ComingSoon({ title, body }) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-dolphin-50 text-dolphin-700">
          <Construction size={26} />
        </div>
        <p className="mb-3 text-xs font-bold tracking-[0.2em] text-dolphin-700">COMING SOON</p>
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{body || 'We\'re putting the finishing touches on this page. In the meantime, reach out and we\'ll get you what you need.'}</p>
        <Button to="/contact-us" className="mx-auto mt-8">Contact Us</Button>
      </div>
    </section>
  )
}
