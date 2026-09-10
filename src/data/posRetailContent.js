import {
  Beer, Cigarette, Coffee, ScanBarcode, Shirt, Store,
  RefreshCw, Link2, Truck, Smartphone, ShieldCheck, WifiOff, IdCard, Heart, Plug, BarChart3,
} from 'lucide-react'

export const retailIndustries = [
  {
    name: 'Grocery Stores',
    icon: Store,
    points: ['High-speed checkout', 'Weighted produce support', 'EBT & SNAP payments', 'Smart inventory tracking'],
  },
  {
    name: 'Liquor Stores',
    icon: Beer,
    points: ['Age verification', 'Bottle & case inventory', 'Compliance-ready checkout', 'Customer loyalty'],
  },
  {
    name: 'Smoke Shops',
    icon: Cigarette,
    points: ['Tobacco compliance', 'Age verification', 'Massive SKU management', 'Bundle promotions'],
  },
  {
    name: 'Clothing Stores',
    icon: Shirt,
    points: ['Size & color variants', 'Easy exchanges & returns', 'Seasonal inventory', 'Customer profiles'],
  },
  {
    name: 'Convenience Stores',
    icon: Coffee,
    points: ['Fast checkout', 'Mixed inventory management', 'Employee permissions', 'EBT-ready payments'],
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

export const featuresGrid = [
  { title: 'Built-in Dual Pricing', icon: RefreshCw },
  { title: 'E-commerce Sync', icon: Link2 },
  { title: 'Vendor Management', icon: Truck },
  { title: 'Remote Device Management', icon: Smartphone },
  { title: 'Employee Permissions', icon: ShieldCheck },
  { title: 'Offline Mode', icon: WifiOff },
  { title: 'Age Verifications', icon: IdCard },
  { title: 'Customer Loyalty', icon: Heart },
  { title: 'Third-Party Integrations', icon: Plug },
  { title: 'Real-Time Reporting', icon: BarChart3 },
]

export const pricingSteps = [
  { title: 'Customer Chooses', image: '/retail/cash-card-price.png' },
  { title: 'Receipt Prints Automatically', image: '/retail/receipt.png' },
  { title: 'Reporting Updates', image: '/retail/sales-overview.png' },
]

export const commandCenterPoints = [
  'Manage pricing and promotions across every register',
  'Track margin and shrinkage down to the SKU',
  'Set employee permissions by role and location',
  'View live sales from anywhere, on any device',
]

export const hardwareFitPoints = [
  'Works with your existing barcode scanners and printers',
  'Plug-and-play card readers and cash drawers',
  'FHD touchscreen terminals built for busy counters',
  'Optional handheld units for line-busting and curbside',
]

export const faqs = [
  { question: 'What types of retail businesses does Dolphin POS support?', answer: 'Grocery, convenience, liquor, smoke and vape, clothing, and other specialty retail businesses all run on Dolphin POS.' },
  { question: 'Does Dolphin POS support dual pricing for retail checkout?', answer: 'Yes. Cash and card prices are calculated and displayed automatically at every register.' },
  { question: 'Can I accept payments both in-store and online?', answer: 'Yes. Dolphin POS syncs in-store and e-commerce sales, inventory, and pricing in one system.' },
  { question: 'Will Dolphin POS work with hardware I already own?', answer: 'In most cases, yes. Existing barcode scanners and printers can typically be connected during setup.' },
  { question: 'How long does setup take?', answer: 'Most retail locations are fully set up and taking payments within 1-3 business days.' },
  { question: 'Can I track sales, tax, and staff performance in one place?', answer: 'Yes. Sales, tax reporting, and staff performance all live in the same Dolphin POS dashboard.' },
  { question: 'Does Dolphin POS integrate with my e-commerce store?', answer: 'Yes. Inventory and order data can sync with the e-commerce platforms you already use.' },
  { question: 'Does Dolphin POS handle age-restricted compliance?', answer: 'Yes. Built-in age verification prompts help staff stay compliant on restricted items at checkout.' },
]
