import { useEffect, useRef } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Clock, PlayCircle, VideoOff, X } from 'lucide-react'

/**
 * Plays `video.src` when one is supplied. Entries without a file (the setup
 * tutorials that have not been recorded yet) keep the existing placeholder.
 * The <video> element is only mounted while the dialog is open, so an 11MB
 * file is never fetched on page load.
 */
export default function VideoModal({ video, onClose }) {
  const hasFile = Boolean(video?.src)
  const dialogRef = useRef(null)
  const previouslyFocused = useRef(null)

  // Mirrors BookDemoModal: Escape closes it, Tab/Shift+Tab stay looped inside
  // it while open, and focus returns to whatever opened it once it closes.
  useEffect(() => {
    if (!video) return undefined
    previouslyFocused.current = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()

    const getFocusable = () => {
      const dialog = dialogRef.current
      if (!dialog) return []
      return Array.from(dialog.querySelectorAll('a[href], button, input, select, textarea, video, [tabindex]'))
        .filter((el) => !el.disabled && el.tabIndex !== -1 && el.offsetParent !== null)
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      const focusable = getFocusable()
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown, true)
    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
      document.body.style.overflow = prevOverflow
      previouslyFocused.current?.focus?.()
    }
  }, [video, onClose])

  return (
    <AnimatePresence>
      {video && (
        <m.div className="fixed inset-0 z-[100] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <m.div className="absolute inset-0 bg-dolphin-900/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
          <m.div
            ref={dialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
            className={`relative w-full overflow-hidden rounded-2xl bg-white shadow-2xl focus:outline-none ${hasFile ? 'max-w-4xl' : 'max-w-2xl'}`}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-1.5 text-slate-500 shadow-lg transition hover:bg-white hover:text-ink"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="flex aspect-video items-center justify-center bg-dolphin-900">
              {hasFile ? (
                <video
                  key={video.src}
                  className="h-full w-full"
                  src={video.src}
                  poster={video.poster}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                >
                  <track kind="captions" />
                  Your browser cannot play this video.{' '}
                  <a href={video.src} download>Download it instead.</a>
                </video>
              ) : video.available ? (
                <div className="text-center text-white">
                  <PlayCircle size={56} className="mx-auto text-dolphin-300" />
                  <p className="mt-3 text-sm font-semibold text-dolphin-100">Video embed placeholder</p>
                </div>
              ) : (
                <div className="text-center text-white">
                  <VideoOff size={48} className="mx-auto text-slate-500" />
                  <p className="mt-3 text-sm font-semibold text-slate-400">Video coming soon</p>
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 id="video-modal-title" className="text-lg font-bold text-ink">{video.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">{video.description}</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <Clock size={13} /> {video.duration}
              </div>
              {!hasFile && !video.available && (
                <p className="mt-4 rounded-lg bg-amber-50 px-3.5 py-2.5 text-xs font-semibold text-amber-700">
                  This video is being re-recorded and will be available soon. Contact support if you need help with this step now.
                </p>
              )}
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
