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
  { step: '01', title: 'Customer Chooses', body: 'At checkout, your customer picks how they want to pay — cash or card.', image: '/homepage/how-it-works/customer-chooses.webp' },
  { step: '02', title: 'Dolphin Calculates', body: 'Dolphin POS automatically applies the correct cash or card price in real time, no manual math.', image: '/homepage/how-it-works/dolphin-calculates.webp' },
  { step: '03', title: 'You Save on Fees', body: 'Card processing costs are covered by the small price difference, not out of your margin.', image: '/homepage/how-it-works/you-save-on-fees.webp' },
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

// --- Landing page v2 -------------------------------------------------------

export const heroTrustPoints = [
  'No long-term contract',
  'Free card reader',
  'Live in 1-3 days',
]

export const heroStats = [
  { value: 1000, format: (n) => Math.round(n).toLocaleString(), prefix: '', suffix: '+', label: 'Businesses powered' },
  { value: 50, format: (n) => Math.round(n).toLocaleString(), prefix: '$', suffix: 'M+', label: 'Processed annually' },
  { value: 4.9, format: (n) => n.toFixed(1), prefix: '', suffix: '/5', label: 'Merchant rating' },
]

export const bigStats = [
  { value: 100, format: (n) => Math.round(n).toLocaleString(), prefix: '', suffix: '%', label: 'Of the card processing fee covered at checkout, not by your margin' },
  { value: 50, format: (n) => Math.round(n).toLocaleString(), prefix: '$', suffix: 'M+', label: 'In annual payment volume running through Dolphin POS' },
  { value: 3, format: (n) => Math.round(n).toLocaleString(), prefix: '', suffix: ' days', label: 'From signed paperwork to ringing up your first sale' },
]

// Segments Dolphin POS ships a preconfigured register for. Rendered as the
// scrolling trust rail under the hero.
export const businessTypes = [
  'Grocery', 'Convenience', 'Restaurants', 'Liquor Stores', 'Smoke & Vape',
  'Pharmacy', 'Delis', 'Bakeries', 'Butcher Shops', 'Coffee Shops',
  'Food Trucks', 'Quick Service', 'Salons', 'Barbershops', 'Auto Service',
  'Pet Supply', 'Hardware', 'Gift Shops', 'Farm Stands', 'Professional Services',
]

// Hero / CTA overview video. Single source of truth so the button label and the
// modal can never disagree about the running time.
export const overviewVideo = {
  title: 'Dolphin POS in 30 seconds',
  description: 'A quick look at the point-of-sale system built to simplify how your business takes payments.',
  duration: '0:31',
  src: '/Dolphin-POS-Introductory-Video.mp4',
  poster: '/homepage/overview-poster.jpg',
  available: true,
}

export const overviewVideoLabel = 'Watch a 30-sec Overview'

// Segments without a counter photo of their own. These fill the pill rail
// beneath the photo marquee, so the two rails never repeat a category.
export const extraBusinessTypes = [
  'Delis', 'Bakeries', 'Butcher Shops', 'Coffee Shops', 'Food Trucks',
  'Quick Service', 'Salons', 'Barbershops', 'Auto Service', 'Pet Supply',
  'Hardware', 'Gift Shops', 'Farm Stands', 'Juice Bars', 'Garden Centers',
]
