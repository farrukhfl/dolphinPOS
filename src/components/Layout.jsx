import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from './ScrollProgress'
import BookDemoModal from './BookDemoModal'
import { BookDemoProvider } from '../lib/BookDemoContext'

export default function Layout() {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) }, [pathname])
  return (
    <BookDemoProvider>
      <ScrollProgress />
      <Navbar />
      <motion.main key={pathname} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <Outlet />
      </motion.main>
      <Footer />
      <BookDemoModal />
    </BookDemoProvider>
  )
}
