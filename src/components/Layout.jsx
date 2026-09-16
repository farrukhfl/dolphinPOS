import { Outlet, useLocation } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import BookDemoModal from './BookDemoModal'
import StickyCTA from './StickyCTA'
import Seo from './Seo'
import { BookDemoProvider } from '../lib/BookDemoContext'

/**
 * Page chunks load lazily, so a route switch briefly has nothing to show.
 * Sized to a full viewport (not just a small centered spinner box) so the
 * footer stays below the fold while the real chunk loads — a short fallback
 * puts the footer directly under the spinner, and swapping in a much taller
 * page then yanks it far down, which is exactly the kind of layout shift
 * Core Web Vitals' CLS metric penalizes.
 */
function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center px-5 py-24" aria-hidden="true">
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-dolphin-200 border-t-dolphin-600" />
    </div>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) }, [pathname])
  return (
    <BookDemoProvider>
      <Seo />
      <ScrollProgress />
      <Navbar />
      <motion.main key={pathname} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </motion.main>
      <Footer />
      <BookDemoModal />
      <StickyCTA />
    </BookDemoProvider>
  )
}
