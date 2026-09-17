import { useRef } from 'react'
import { m, useInView, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'

/**
 * Numbered three-step flow with a rail that draws itself once the row is in
 * view, then panels that lift in behind it.
 *
 * Two image treatments, because the two pages that use this hold different
 * kinds of artwork:
 *   contain — UI cutouts of mixed shapes (a price card, a tall receipt, a
 *             wide chart) that must not be cropped, so each sits in a fixed
 *             height box on a white card.
 *   cover   — full-bleed counter photographs, which read better filling the
 *             card edge to edge with a gradient under the caption.
 */
export default function StepFlow({
  eyebrow,
  title,
  body,
  steps,
  variant = 'contain',
  tone = 'tint',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const reduceMotion = useReducedMotion()
  const isCover = variant === 'cover'

  return (
    <section className={`relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32 ${tone === 'tint' ? 'bg-slate-50' : ''}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            {eyebrow && (
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-dolphin-700">{eyebrow}</p>
            )}
            <h2 className="text-balance text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {body && <p className="mt-5 text-lg leading-8 text-slate-600">{body}</p>}
          </div>
        </Reveal>

        <div ref={ref} className="relative mt-20">
          {/* Rail behind the panels, drawn left to right */}
          <div
            className={`absolute left-[16%] right-[16%] top-9 hidden h-0.5 overflow-hidden rounded-full md:block ${tone === 'tint' ? 'bg-dolphin-100' : 'bg-slate-200'}`}
            aria-hidden="true"
          >
            <m.div
              className="h-full w-full rounded-full bg-gradient-to-r from-dolphin-400 to-dolphin-600"
              style={{ transformOrigin: 'left' }}
              initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map(({ title: stepTitle, body: stepBody, image, alt }, i) => (
              <m.div
                key={stepTitle}
                className="relative flex flex-col items-center text-center"
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <m.span
                  className={`relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-4 bg-dolphin-600 text-xl font-extrabold text-white shadow-lg shadow-dolphin-900/25 ${tone === 'tint' ? 'border-slate-50' : 'border-white'}`}
                  initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.3 + i * 0.18 }}
                >
                  {i + 1}
                </m.span>

                <h3 className="mt-5 text-lg font-bold text-ink">{stepTitle}</h3>
                {/* Reserved height keeps the three panels on one line even when
                    a caption wraps to two */}
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600 md:min-h-[3rem]">{stepBody}</p>

                {isCover ? (
                  <div className="group mt-6 w-full overflow-hidden rounded-3xl border border-slate-200 shadow-soft transition duration-500 hover:-translate-y-1.5 hover:border-dolphin-200 hover:shadow-[0_36px_70px_-34px_rgba(8,71,128,0.45)]">
                    <img
                      src={image}
                      alt={alt || stepTitle}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/2] w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                ) : (
                  <div className="group mt-6 flex w-full flex-1 items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition duration-500 hover:-translate-y-1.5 hover:border-dolphin-200 hover:shadow-[0_36px_70px_-34px_rgba(8,71,128,0.45)]">
                    <img
                      src={image}
                      alt={alt || stepTitle}
                      loading="lazy"
                      decoding="async"
                      className="h-48 w-auto max-w-full object-contain transition duration-500 group-hover:scale-[1.06] sm:h-60"
                    />
                  </div>
                )}
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
