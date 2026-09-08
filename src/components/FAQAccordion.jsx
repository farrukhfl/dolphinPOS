import { useState } from 'react'
import { Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'

export default function FAQAccordion({ items, eyebrow = 'COMMON QUESTIONS', title, body }) {
  const [open, setOpen] = useState(0)

  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.65fr_1.35fr]">
        <SectionHeading eyebrow={eyebrow} title={title} body={body} />
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.question}>
                <h3 className="tracking-normal">
                  <button className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-bold sm:text-lg" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`faq-panel-${i}`}>
                    {item.question}
                    <Plus className={`shrink-0 text-dolphin-700 transition duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`faq-panel-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: 'easeOut' }} className="overflow-hidden">
                      <p className="pb-7 pr-8 leading-7 text-slate-600">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
