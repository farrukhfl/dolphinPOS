import { Outlet, useLocation } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import BookDemoModal from './BookDemoModal'
import StickyCTA from './StickyCTA'
import { BookDemoProvider } from '../lib/BookDemoContext'

/** Page chunks load lazily, so a route switch briefly has nothing to show. */
function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-5 py-24" aria-hidden="true">
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
