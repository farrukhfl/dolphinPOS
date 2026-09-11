import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { LinkedinIcon, InstagramIcon, FacebookIcon, WhatsappIcon } from './SocialIcons'
import { EMAIL_SUPPORT, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, PHONE, PHONE_TEL, WHATSAPP_URL, footerColumns } from '../lib/nav'

const quickLinks = [
  { label: 'Book a Demo', to: '/contact-us' },
  { label: 'POS Systems', to: '/pos-systems' },
  { label: 'POS Plans', to: '/pricing' },
]

export default function Footer() {
  return (
    <footer className="bg-dolphin-600 text-white">
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-14 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <div>
            <p className="text-2xl font-extrabold text-white sm:text-3xl">Ready for hotter margins?</p>
            <p className="mt-2 text-dolphin-100">Get the new Dolphin POS.</p>
          </div>
          <Link to="/contact-us" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-dolphin-700 transition duration-300 hover:-translate-y-0.5 hover:bg-dolphin-50">
            Buy Now <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={17} />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-md" aria-label="Dolphin POS home">
              <img src="/dolphinposlogo.png" alt="Dolphin POS" className="h-8 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-dolphin-100">
              On a mission to help merchants keep more of every sale with built-in dual pricing and an all-in-one point of sale.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition hover:-translate-y-1 hover:border-white hover:bg-white hover:text-dolphin-600">
                <LinkedinIcon size={16} />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition hover:-translate-y-1 hover:border-white hover:bg-white hover:text-dolphin-600">
                <InstagramIcon size={16} />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition hover:-translate-y-1 hover:border-white hover:bg-white hover:text-dolphin-600">
                <FacebookIcon size={16} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white transition hover:-translate-y-1 hover:border-white hover:bg-white hover:text-dolphin-600">
                <WhatsappIcon size={16} />
              </a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-bold tracking-wide text-white">{col.heading}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link className="text-sm text-dolphin-100 transition hover:text-white" to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-bold tracking-wide text-white">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link className="text-sm text-dolphin-100 transition hover:text-white" to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-8 text-sm text-dolphin-100 sm:flex-row sm:items-center sm:gap-6">
          <a className="flex items-center gap-2 hover:text-white" href={`mailto:${EMAIL_SUPPORT}`}>
            <Mail size={16} /> {EMAIL_SUPPORT}
          </a>
          <a className="flex items-center gap-2 hover:text-white" href={PHONE_TEL}>
            <Phone size={16} /> {PHONE}
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-dolphin-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dolphin POS, a Dolphin Merchant Services product. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
