import { Compass, Sparkles as SparklesIcon, Eye, Store, HeartHandshake, UtensilsCrossed, MonitorSmartphone, Cpu } from 'lucide-react'

export const values = [
  { title: 'Deliberate', body: 'Every feature has a reason.', icon: Compass },
  { title: 'Transparent', body: 'Straightforward pricing. Straightforward software.', icon: Eye },
  { title: 'Evolving', body: 'Every update solves something worth solving.', icon: SparklesIcon },
]

export const industries = [
  { title: 'Retail', body: 'Grocery, convenience, liquor, specialty, and more.', icon: Store, to: '/pos-retail', linkText: 'Dolphin POS for Retail', disabled: false },
  { title: 'Services', body: 'Salons, medical, wellness, contractors, and more.', icon: HeartHandshake, to: '/services', linkText: 'Dolphin POS for Services', disabled: false },
  { title: 'Restaurants', body: 'From quick-service to full-service dining.', icon: UtensilsCrossed, to: null, linkText: 'Coming Soon', disabled: true },
]

export const hardwarePoints = [
  'Commercial-grade hardware',
  'Modern touchscreen terminals',
  'Barcode scanners & printers',
  'Cash drawers & customer displays',
  'Built for high-volume environments',
]

export const softwarePoints = [
  'Built-in dual pricing',
  'Inventory management',
  'Employee management',
  'Customer loyalty & gift cards',
  'Real-time reporting',
]

export const solutionBlocks = [
  { title: 'Built for the Counter', body: 'Commercial-grade hardware built for high-volume environments.', icon: MonitorSmartphone, points: hardwarePoints },
  { title: 'Built for Business', body: 'Software that runs the operational side of your business.', icon: Cpu, points: softwarePoints },
]

export const businessTypeOptions = ['Retail', 'Professional Services', 'Restaurants (coming soon)']
