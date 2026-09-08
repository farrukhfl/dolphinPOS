const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function LegalPage({ title, lastUpdated, intro, sections }) {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_2fr]">
        <div>
          <div className="lg:sticky lg:top-28">
            <h1 className="text-3xl font-extrabold text-ink">{title}</h1>
            <p className="mt-2 text-sm font-semibold text-slate-400">Last Updated: {lastUpdated}</p>
            <nav aria-label="Section navigation" className="mt-8 hidden border-t border-slate-200 pt-6 lg:block">
              <ul className="max-h-[60vh] space-y-1 overflow-y-auto pr-2 text-sm">
                {sections.map((section, i) => (
                  <li key={section.heading}>
                    <a href={`#${slugify(section.heading)}`} className="block rounded-lg px-3 py-1.5 text-slate-500 transition hover:bg-dolphin-50 hover:text-dolphin-700">
                      {i + 1}. {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="min-w-0">
          {intro && <p className="mb-10 text-base leading-7 text-slate-600">{intro}</p>}
          <div className="space-y-12">
            {sections.map((section, i) => (
              <div key={section.heading} id={slugify(section.heading)} className="scroll-mt-28">
                <h2 className="text-xl font-bold text-ink">{i + 1}. {section.heading}</h2>
                <div className="mt-3 space-y-4">
                  {section.paragraphs.map((paragraph, j) => (
                    <p key={j} className={`text-sm leading-7 text-slate-600 ${section.emphasis ? 'font-semibold uppercase tracking-tight text-slate-700' : ''}`}>
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                      {section.list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
