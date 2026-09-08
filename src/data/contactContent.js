import { CreditCard, LineChart, MessageCircle, Mail, Phone, RefreshCw, Server, Store } from 'lucide-react'

export const requireOptions = ['Complete Dolphin POS System', 'Only the Hardware', 'Only the Software']

export const supportCards = [
  { title: 'Call Us', body: 'Speak with our POS specialists today.', detail: '888-696-1049', note: 'Mon-Fri, 8am-4pm CST', icon: Phone, href: 'tel:8886961049' },
  { title: 'Email Us', body: 'Write to us any time.', detail: 'sales@dolphinpos.com', note: 'Reply within 1 business hour', icon: Mail, href: 'mailto:sales@dolphinpos.com' },
  { title: 'Start a chat', body: 'Talk to our Support team right away.', detail: 'Live Chat', note: 'Available on our website', icon: MessageCircle, href: null },
]

export const topicCards = [
  { label: 'Point of Sale Systems', icon: Store },
  { label: 'Payment Processing', icon: CreditCard },
  { label: 'Dual Pricing Solutions', icon: RefreshCw },
  { label: 'Business Growth & Expansion', icon: LineChart },
  { label: 'Hardware & System Setup', icon: Server },
]
