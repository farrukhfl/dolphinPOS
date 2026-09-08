import {
  ArrowLeftRight, Banknote, CalendarClock, CircleDollarSign, CreditCard, Gift,
  Landmark, QrCode, Receipt, Rss, Smartphone, Wallet, Watch,
  ShieldCheck, WifiOff, Sparkles, Store, RefreshCw, PackageSearch, Zap, Plug, Lock,
} from 'lucide-react'

export const paymentMethods = [
  { name: 'Cash', icon: Banknote },
  { name: 'Credit Cards', icon: CreditCard },
  { name: 'Debit Cards', icon: Wallet },
  { name: 'Tap to Pay', icon: Rss },
  { name: 'Apple Pay', icon: Smartphone },
  { name: 'Google Pay', icon: Smartphone },
  { name: 'Gift Cards', icon: Gift },
  { name: 'EBT/SNAP', icon: Landmark },
  { name: 'QR Payments', icon: QrCode },
  { name: 'Store Credit', icon: Receipt },
  { name: 'Buy Now Pay Later', icon: CalendarClock },
  { name: 'Wearable Payments', icon: Watch },
  { name: 'Digital Wallets', icon: CircleDollarSign },
  { name: 'ACH/Bank Transfers', icon: ArrowLeftRight },
]

export const howItWorks = [
  { step: '01', title: 'Customer Chooses', body: 'At checkout, your customer picks how they want to pay — cash or card.' },
  { step: '02', title: 'Dolphin Calculates', body: 'Dolphin POS automatically applies the correct cash or card price in real time, no manual math.' },
  { step: '03', title: 'You Save on Fees', body: 'Card processing costs are covered by the small price difference, not out of your margin.' },
]

export const allInOneCards = [
  { title: 'Built for Business', body: 'From single-location shops to multi-store operations, Dolphin POS scales with you.', icon: Store },
  { title: 'Modern & Intuitive', body: 'A clean, touchscreen-first interface your staff can learn in minutes, not weeks.', icon: Sparkles },
  { title: 'Works Offline', body: 'Keep ringing up sales even when your internet drops — everything syncs once you\'re back online.', icon: WifiOff },
  { title: 'Secure & Compliant', body: 'PCI-compliant hardware and software keep every transaction protected.', icon: ShieldCheck },
]

export const featuresGrid = [
  { title: 'Easy Dual Pricing', body: 'Turn on built-in cash discounting in minutes — no separate hardware or hidden setup.', icon: RefreshCw },
  { title: 'Smart Sync', body: 'Inventory, pricing, and sales stay in sync across every register and location automatically.', icon: Zap },
  { title: 'Smarter Inventory', body: 'Real-time stock counts, low-stock alerts, and vendor tracking built right in.', icon: PackageSearch },
  { title: 'Always Selling', body: 'Offline mode keeps your registers open through outages with zero downtime.', icon: WifiOff },
  { title: 'Third-Party Integrations', body: 'Connect the accounting, eCommerce, and loyalty tools you already use.', icon: Plug },
  { title: 'Complete Control', body: 'Manage pricing, staff permissions, and reporting from one dashboard, anywhere.', icon: Lock },
]

export const comparisonRows = [
  { feature: 'Built-in Dual Pricing', dolphin: true, traditional: false },
  { feature: 'Credit Card Processing Fees', dolphin: '$0', traditional: '2.5% - 3.5%' },
  { feature: 'Transparent Pricing', dolphin: true, traditional: false },
  { feature: 'POS Hardware Included', dolphin: true, traditional: false },
  { feature: 'Full Retail Features', dolphin: true, traditional: true },
  { feature: 'POS System Cost', dolphin: '$499 one-time', traditional: 'Lower upfront, hidden charges' },
  { feature: 'Dedicated Support', dolphin: true, traditional: false },
]

export const switchPoints = [
  { title: 'Free Credit Card Reader', body: 'Get started with hardware included, no upfront cost.' },
  { title: 'Zero Credit Card Fees', body: 'Dual pricing means processing fees stop coming out of your margin.' },
  { title: 'Honest Pricing Always', body: 'No hidden charges, no rate creep, no surprises on your statement.' },
  { title: 'No Long-term Contracts', body: 'Stay because Dolphin POS works for you, not because you\'re locked in.' },
  { title: 'Cancel Anytime', body: 'Switch with confidence knowing there is no exit penalty.' },
]

export const testimonials = [
  { name: 'Amman Kabab', location: 'Naperville, IL', quote: 'Switching to Dolphin POS eliminated our processing fees almost overnight. The dual pricing setup was simple and our customers barely noticed the change.', rating: 5 },
  { name: 'Naureen Moten', location: 'Verified Merchant', quote: 'Support is fast, the system is reliable, and we finally keep what we earn on every credit card sale. Couldn\'t ask for more from a POS.', rating: 5 },
]

export const faqs = [
  { question: 'How long does it take to set up Dolphin POS?', answer: 'Most merchants are fully set up and taking payments within 1-3 business days, including hardware delivery, menu or inventory import, and staff training.' },
  { question: 'What types of retail businesses does Dolphin POS serve?', answer: 'Dolphin POS is built for grocery stores, convenience stores, restaurants, liquor stores, smoke and vape shops, drug stores and pharmacies, and professional service businesses.' },
  { question: 'How does Dolphin POS adapt to different store types?', answer: 'Every account is configured for your industry — from age verification and weighted produce to appointment booking — so you only see the tools you actually use.' },
  { question: 'What payment methods can I accept?', answer: 'Cash, all major credit and debit cards, tap to pay, Apple Pay, Google Pay, gift cards, EBT/SNAP, QR payments, store credit, buy now pay later, wearables, digital wallets, and ACH transfers.' },
  { question: 'Can Dolphin POS handle both food and retail in one location?', answer: 'Yes. Dolphin POS supports hybrid businesses that sell both food and retail items from a single register and inventory system.' },
]
