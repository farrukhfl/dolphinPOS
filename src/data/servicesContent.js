import {
  BookOpen, Handshake, TrendingUp, Wallet, Heart,
  RefreshCw, Smartphone, Users, CalendarCheck, FileText, Repeat, ShieldCheck, WifiOff, BarChart3,
} from 'lucide-react'

export const valueChain = [
  { title: 'Book', body: 'Customers schedule appointments online or in person.', icon: CalendarCheck },
  { title: 'Serve', body: 'Deliver the job with everything tracked in one system.', icon: Handshake },
  { title: 'Get Paid Profitably', body: 'Dual pricing means processing fees never eat your margin.', icon: Wallet },
  { title: 'Build Loyalty', body: 'Customer profiles and history keep clients coming back.', icon: Heart },
  { title: 'Grow', body: 'Real-time reporting shows you exactly where to expand.', icon: TrendingUp },
]

export const keepMorePoints = [
  { title: 'No processing fees out of your margin', body: 'Dual pricing automatically covers the cost of accepting cards.' },
  { title: 'Transparent pricing for every job', body: 'Customers see the exact cash and card price before they pay.' },
  { title: 'Get paid the same day', body: 'Take payment on-site or send a digital invoice from the field.' },
  { title: 'Built for service businesses', body: 'Appointments, invoicing, and payments all live in one place.' },
]

export const featuresGrid = [
  { title: 'Built-in Dual Pricing', icon: RefreshCw },
  { title: 'Mobile Payments', icon: Smartphone },
  { title: 'Customer Profiles', icon: Users },
  { title: 'Appointment Management', icon: CalendarCheck },
  { title: 'Digital Invoicing', icon: FileText },
  { title: 'Recurring Billing', icon: Repeat },
  { title: 'Employee Permissions', icon: ShieldCheck },
  { title: 'Offline Mode', icon: WifiOff },
  { title: 'Real-Time Reporting', icon: BarChart3 },
]

export const faqs = [
  { question: 'What is a service POS, and how is it different from a retail POS?', answer: 'A service POS is built around appointments, invoicing, and mobile payments instead of item-based checkout, so you can get paid for jobs, not just products.' },
  { question: 'Can I control what each staff member can see or do?', answer: 'Yes. Employee permissions let you control access to pricing, reporting, and payment functions by role.' },
  { question: 'Can I accept digital wallets and international cards?', answer: 'Yes, Dolphin POS accepts major digital wallets and international cards alongside standard credit and debit.' },
  { question: 'Does Dolphin POS integrate with booking tools?', answer: 'Dolphin POS supports appointment scheduling natively, with integrations available for the booking tools you already use.' },
  { question: 'How fast do I get access to my funds?', answer: 'Funding typically lands in your bank account on the next business day after a transaction.' },
  { question: 'How is my business protected from fraud?', answer: 'Every transaction is processed through PCI-compliant, encrypted payment infrastructure with built-in fraud monitoring.' },
  { question: 'Can Dolphin POS support multiple locations or a franchise?', answer: 'Yes. Multi-location and franchise businesses can manage every site from one centralized dashboard.' },
  { question: 'Is dual pricing actually transparent to my customers?', answer: 'Yes. The cash and card price are both displayed clearly at checkout before the customer pays.' },
]
