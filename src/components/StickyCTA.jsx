import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useBookDemo } from '../lib/BookDemoContext'
import { PHONE_TEL } from '../lib/nav'

/**
 * Mobile-only conversion bar. Desktop already carries a persistent "Book a
 * Demo" in the sticky navbar, but on phones that CTA is behind the hamburger,
 * so it slides in once the visitor is past the hero and retreats near the foot
 * of the page so it never covers the footer links.
 */
export default function StickyCTA() {
  const { openModal } = useBookDemo()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const nearBottom = y + window.innerHeight > document.body.scrollHeight - 420
      setVisible(y > 620 && !nearBottom)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-8px_30px_-12px_rgba(16,36,62,0.25)] backdrop-blur lg:hidden"
          style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
        >
          <div className="flex items-center gap-3">
            <a
              href={PHONE_TEL}
              aria-label="Call sales"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-300 text-ink"
            >
              <Phone size={18} />
            </a>
            <button
              type="button"
              onClick={openModal}
              className="shine flex min-h-12 flex-1 items-center justify-center rounded-full bg-dolphin-600 px-6 text-sm font-bold text-white shadow-lg shadow-dolphin-900/20"
            >
              Book a Free Demo
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
