import { PlayCircle } from 'lucide-react'
import Button from './ui/Button'
import { useBookDemo } from '../lib/BookDemoContext'

export default function FinalCTA({ title = 'Stop absorbing credit card fees today.', body = 'See how Dolphin POS pays for itself in the first month.' }) {
  const { openModal } = useBookDemo()
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-28">
      <div className="dot-grid blue-glow relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-dolphin-500 to-dolphin-700 px-8 py-16 text-center sm:px-16">
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl animate-float-slow" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-dolphin-300/20 blur-3xl animate-float-slower" aria-hidden="true" />
        <div className="relative z-10">
          <h2 className="text-balance mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-dolphin-100">{body}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="light" onClick={openModal}>Book a Demo</Button>
            <button className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition duration-300 hover:bg-white/10">
              <PlayCircle size={18} /> Watch a 30-sec Overview
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
