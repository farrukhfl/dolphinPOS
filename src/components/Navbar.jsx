import { useEffect, useRef, useState } from 'react'
import { ChevronDown, LayoutGrid, Menu, Phone, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Button from './ui/Button'
import { useBookDemo } from '../lib/BookDemoContext'
import { DOLPHIN_LOGIN_URL, LEGACY_LOGIN_URL, PHONE, PHONE_TEL, exploreDropdown, primaryLinks, productsDropdown } from '../lib/nav'

function Dropdown({ label, items, id }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const close = (event) => { if (!ref.current?.contains(event.target)) setOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  return (
    <div className="relative -my-5 py-5" ref={ref} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false) }}>
      <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-dolphin-700" onClick={() => setOpen((v) => !v)} onKeyDown={(event) => event.key === 'Escape' && setOpen(false)} aria-expanded={open} aria-haspopup="true" aria-controls={id}>
        {label} <ChevronDown size={15} className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div id={id} initial={{ opacity: 0, y: -8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.98 }} transition={{ duration: 0.18 }} className="absolute left-1/2 top-full w-64 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl" role="menu">
            {items.map(({ label: itemLabel, to, description }) => (
              <Link key={itemLabel} to={to} role="menuitem" className="block rounded-xl px-3.5 py-2.5 transition hover:bg-dolphin-50">
                <span className="block text-sm font-bold text-slate-900">{itemLabel}</span>
                {description && <span className="mt-0.5 block text-xs leading-4 text-slate-500">{description}</span>}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { openModal } = useBookDemo()

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const linkClass = ({ isActive }) => `text-sm font-semibold transition hover:text-dolphin-700 ${isActive ? 'text-dolphin-700' : 'text-slate-700'}`
  const mobileLinkClass = ({ isActive }) => `rounded-lg px-3 py-2 font-semibold hover:bg-dolphin-50 ${isActive ? 'text-dolphin-700' : ''}`

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="hidden bg-dolphin-600 text-white sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-5 py-2 text-xs lg:px-8">
          <a href={PHONE_TEL} className="flex items-center gap-1.5 font-semibold hover:text-dolphin-100">
            <Phone size={13} /> Call Sales: {PHONE}
          </a>
          <div className="flex items-center gap-4 border-l border-white/25 pl-6">
            <a href={LEGACY_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-dolphin-100 hover:text-white">Legacy Login</a>
            <a href={DOLPHIN_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-dolphin-100 hover:text-white">Dolphin Login</a>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
          <Link to="/" className="group flex items-center" aria-label="Dolphin POS home">
            <img src="/dolphinposlogo.png" alt="Dolphin POS" className="h-9 w-auto transition duration-300 group-hover:scale-105 sm:h-10" />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {primaryLinks.map((link) => (
              <NavLink key={link.to} className={linkClass} to={link.to}>{link.label}</NavLink>
            ))}
            <Dropdown label="Products" items={productsDropdown} id="products-menu" />
            <NavLink className={linkClass} to="/pricing">POS Plans</NavLink>
            <Dropdown label="Explore" items={exploreDropdown} id="explore-menu" />
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <Button onClick={openModal}>Book a Demo</Button>
          </div>
          <button className="rounded-lg p-2 lg:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle navigation" aria-expanded={mobileOpen}>{mobileOpen ? <X /> : <Menu />}</button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden border-b border-slate-200 bg-white px-5 py-6 lg:hidden max-h-[80vh] overflow-y-auto">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {primaryLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={mobileLinkClass}>{link.label}</NavLink>
              ))}
              <div className="my-2 border-t border-slate-100" />
              <p className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">Products</p>
              {productsDropdown.map(({ label, to }) => (
                <NavLink key={to} to={to} className="flex items-center gap-3 rounded-lg px-3 py-2 font-semibold hover:bg-dolphin-50">
                  <LayoutGrid size={16} className="text-dolphin-700" /> {label}
                </NavLink>
              ))}
              <NavLink to="/pricing" className={mobileLinkClass}>POS Plans</NavLink>
              <div className="my-2 border-t border-slate-100" />
              <p className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">Explore</p>
              {exploreDropdown.map(({ label, to }) => (
                <NavLink key={to} to={to} className={mobileLinkClass}>{label}</NavLink>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-5">
                <Button onClick={openModal} className="w-full justify-center">Book a Demo</Button>
                <div className="flex items-center justify-center gap-5 text-sm font-semibold text-slate-500">
                  <a href={LEGACY_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-dolphin-700">Legacy Login</a>
                  <a href={DOLPHIN_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-dolphin-700">Dolphin Login</a>
                </div>
                <a href={PHONE_TEL} className="flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-dolphin-700">
                  <Phone size={14} /> {PHONE}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
