import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-5 py-24 text-center lg:px-8">
      <div>
        <p className="text-sm font-bold tracking-[0.2em] text-dolphin-700">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-ink">Page not found</h1>
        <p className="mt-4 text-lg text-slate-600">The page you're looking for doesn't exist or has moved.</p>
        <Button to="/" className="mx-auto mt-8">Back to Home</Button>
      </div>
    </section>
  )
}
