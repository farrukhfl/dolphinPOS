import { Beer, Cigarette, Coffee, Pill, Store } from 'lucide-react'

export const retailHero = {
  image: '/retail/hero.webp',
  alt: 'A Dolphin POS handheld terminal surrounded by cards, a printed receipt, coins and reporting icons',
}

// The five retail categories we hold counter photography for. Restaurant and
// service-business shots live on their own pages.
export const retailIndustries = [
  {
    name: 'Grocery Stores',
    icon: Store,
    image: '/retail/industries/grocery.webp',
    points: ['High-speed checkout', 'Weighted produce support', 'EBT & SNAP payments', 'Smart inventory tracking'],
  },
  {
    name: 'Convenience Stores',
    icon: Coffee,
    image: '/retail/industries/convenience.webp',
    points: ['Fast checkout', 'Mixed inventory management', 'Employee permissions', 'EBT-ready payments'],
  },
  {
    name: 'Liquor Stores',
    icon: Beer,
    image: '/retail/industries/liquor.webp',
    points: ['Age verification', 'Bottle & case inventory', 'Compliance-ready checkout', 'Customer loyalty'],
  },
  {
    name: 'Smoke & Vape Shops',
    icon: Cigarette,
    image: '/retail/industries/vape.webp',
    points: ['Tobacco compliance', 'Age verification', 'Massive SKU management', 'Bundle promotions'],
  },
  {
    name: 'Drug Stores & Pharmacies',
    icon: Pill,
    image: '/retail/industries/pharmacy.webp',
    points: ['Front-of-store and OTC categories', 'FSA/HSA eligible item flagging', 'Signature capture at pickup', 'Category-level reporting'],
  },
]

export const timeline = [
  { time: '8:00 AM', title: 'Employees clock in', body: 'Staff clock in with role-based permissions already set.' },
  { time: '9:00 AM', title: 'Inventory arrives', body: 'New stock is scanned in and counts update instantly.' },
  { time: '11:30 AM', title: 'High-volume checkout', body: 'Dual pricing keeps lines moving without absorbing card fees.' },
  { time: '2:00 PM', title: 'Live reporting', body: 'Sales, margin, and staff performance update in real time.' },
  { time: '5:00 PM', title: 'Low-stock alerts', body: 'Dolphin POS flags items that need reordering before you run out.' },
  { time: '9:00 PM', title: 'Close day reports', body: 'End-of-day totals and reconciliation are ready the moment you close.' },
]

// Brand-drawn SVG icons, one per feature. They carry their own dolphin-blue
// fill, so they are rendered as images rather than recoloured.
export const featuresGrid = [
  { title: 'Built-in Dual Pricing', icon: '/retail/features/dual-pricing.svg' },
  { title: 'E-commerce Sync', icon: '/retail/features/ecommerce-sync.svg' },
  { title: 'Vendor Management', icon: '/retail/features/vendor-management.svg' },
  { title: 'Remote Device Management', icon: '/retail/features/remote-device-management.svg' },
  { title: 'Employee Permissions', icon: '/retail/features/employee-permissions.svg' },
  { title: 'Offline Mode', icon: '/retail/features/offline-mode.svg' },
  { title: 'Age Verifications', icon: '/retail/features/age-verification.svg' },
  { title: 'Customer Loyalty', icon: '/retail/features/customer-loyalty.svg' },
  { title: 'Third-Party Integrations', icon: '/retail/features/third-party-integrations.svg' },
  { title: 'Real-Time Reporting', icon: '/retail/features/real-time-reporting.svg' },
]

export const pricingSteps = [
  {
    title: 'Customer Chooses',
    body: 'Both prices are on screen before they pay.',
    image: '/retail/cash-card-price.png',
  },
  {
    title: 'Receipt Prints Automatically',
    body: 'The cash and card price are itemised on the ticket.',
    image: '/retail/receipt-print.webp',
  },
  {
    title: 'Reporting Updates',
    body: 'Savings land in your dashboard the same minute.',
    image: '/retail/sales-overview.png',
  },
]

export const commandCenter = {
  title: 'Retail command center',
  body: 'Every register, every location, one dashboard — on the laptop in the back office or the phone in your pocket.',
  image: '/retail/command-center.webp',
  alt: 'The Dolphin POS dashboard shown on a laptop and a phone, with sales totals and a store overview chart',
  points: [
    'Manage pricing and promotions across every register',
    'Track margin and shrinkage down to the SKU',
    'Set employee permissions by role and location',
    'View live sales from anywhere, on any device',
  ],
}

export const hardwareFit = {
  title: 'POS hardware that fits your business',
  body: 'A full counter setup out of the box, or just the pieces you are missing.',
  image: '/retail/hardware.webp',
  alt: 'A Dolphin POS dual-screen terminal with cash drawer, thermal printer and customer-facing card reader',
  points: [
    'Works with your existing barcode scanners and printers',
    'Plug-and-play card readers and cash drawers',
    'FHD touchscreen terminals built for busy counters',
    'Optional handheld units for line-busting and curbside',
  ],
}

export const faqs = [
  { question: 'What types of retail businesses does Dolphin POS support?', answer: 'Grocery, convenience, liquor, smoke and vape, pharmacy, and other specialty retail businesses all run on Dolphin POS.' },
  { question: 'Does Dolphin POS support dual pricing for retail checkout?', answer: 'Yes. Cash and card prices are calculated and displayed automatically at every register.' },
  { question: 'Can I accept payments both in-store and online?', answer: 'Yes. Dolphin POS syncs in-store and e-commerce sales, inventory, and pricing in one system.' },
  { question: 'Will Dolphin POS work with hardware I already own?', answer: 'In most cases, yes. Existing barcode scanners and printers can typically be connected during setup.' },
  { question: 'How long does setup take?', answer: 'Most retail locations are fully set up and taking payments within 1-3 business days.' },
  { question: 'Can I track sales, tax, and staff performance in one place?', answer: 'Yes. Sales, tax reporting, and staff performance all live in the same Dolphin POS dashboard.' },
  { question: 'Does Dolphin POS integrate with my e-commerce store?', answer: 'Yes. Inventory and order data can sync with the e-commerce platforms you already use.' },
  { question: 'Does Dolphin POS handle age-restricted compliance?', answer: 'Yes. Built-in age verification prompts help staff stay compliant on restricted items at checkout.' },
]
