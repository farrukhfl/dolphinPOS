import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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

  useEffect(() => {
    if (!video) return undefined
    const onKey = (event) => { if (event.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [video, onClose])

  return (
    <AnimatePresence>
      {video && (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="absolute inset-0 bg-dolphin-900/80 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
          <motion.div
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
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                <Clock size={13} /> {video.duration}
              </div>
              {!hasFile && !video.available && (
                <p className="mt-4 rounded-lg bg-amber-50 px-3.5 py-2.5 text-xs font-semibold text-amber-700">
                  This video is being re-recorded and will be available soon. Contact support if you need help with this step now.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
