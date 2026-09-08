export default function SectionHeading({ eyebrow, title, body, align = 'left', className = '' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <p className="mb-4 text-xs font-bold tracking-[0.2em] text-dolphin-700">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-lg leading-8 text-slate-600">{body}</p>}
    </div>
  )
}
