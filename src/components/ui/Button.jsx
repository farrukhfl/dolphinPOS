import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', arrow = true, className = '', type = 'button', ...props }) {
  const variants = {
    primary: 'bg-dolphin-600 text-white shadow-lg shadow-dolphin-900/10 hover:-translate-y-0.5 hover:bg-dolphin-700',
    secondary: 'border border-slate-300 bg-white text-ink hover:border-dolphin-600 hover:text-dolphin-700',
    light: 'bg-white text-dolphin-800 shadow-lg shadow-dolphin-900/10 hover:-translate-y-0.5 hover:bg-dolphin-50',
    outlineLight: 'border border-white/60 bg-transparent text-white hover:-translate-y-0.5 hover:bg-white/10',
  }
  const styles = `group inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-bold transition duration-300 ${variants[variant]} ${className}`
  const content = <>{children}{arrow && <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={17} aria-hidden="true" />}</>
  if (to) return <Link className={styles} to={to} {...props}>{content}</Link>
  if (href) return <a className={styles} href={href} {...props}>{content}</a>
  return <button className={styles} type={type} {...props}>{content}</button>
}
