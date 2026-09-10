import { Beer, Cigarette, Coffee, Pill, Store, Utensils, Briefcase } from 'lucide-react'

export const industries = [
  {
    name: 'Grocery Stores',
    icon: Store,
    blurb: 'Weighted produce, EBT/SNAP, and high-speed checkout in one line.',
    image: '/homepage/industries/grocery.webp',
    features: [
      'Scale integration for weighted produce',
      'EBT/SNAP split tender at the register',
      'Case-break and unit-of-measure pricing',
      'Shelf-label and price-book sync',
    ],
  },
  {
    name: 'Convenience Stores',
    icon: Coffee,
    blurb: 'Fast checkout and mixed inventory, without the mixed-up systems.',
    image: '/homepage/industries/convenience-store.webp',
    features: [
      'Fuel and in-store sales on one ticket',
      'Age-restricted item prompts',
      'Combo and multi-pack pricing rules',
      'Shift reconciliation and cash drops',
    ],
  },
  {
    name: 'Restaurants',
    icon: Utensils,
    blurb: 'Fast table turns meet built-in dual pricing on every check.',
    image: '/homepage/industries/restaurant.webp',
    features: [
      'Table, tab, and quick-service modes',
      'Kitchen display and ticket routing',
      'Modifiers, courses, and split checks',
      'Tip handling that respects dual pricing',
    ],
  },
  {
    name: 'Liquor Stores',
    icon: Beer,
    blurb: 'Age verification and compliance-ready checkout, automatically.',
    image: '/homepage/industries/liquor-store.webp',
    features: [
      'ID scan and age verification at scan',
      'Case, bottle, and mixed-six pricing',
      'State compliance reporting built in',
      'Vendor invoicing and cost tracking',
    ],
  },
  {
    name: 'Smoke & Vape Shops',
    icon: Cigarette,
    blurb: 'Tobacco compliance and massive SKU counts, handled with ease.',
    image: '/homepage/industries/vape.webp',
    features: [
      'High-SKU catalogs with fast lookup',
      'Tobacco and nicotine tax handling',
      'Age verification on every restricted line',
      'Loyalty built for repeat regulars',
    ],
  },
  {
    name: 'Drug Stores & Pharmacies',
    icon: Pill,
    blurb: 'Prescription-adjacent retail with the reporting to match.',
    image: '/homepage/industries/pharmacy.webp',
    features: [
      'Front-of-store and OTC categories',
      'FSA/HSA eligible item flagging',
      'Signature capture at pickup',
      'Detailed category-level reporting',
    ],
  },
  {
    name: 'Professional Services',
    icon: Briefcase,
    blurb: 'Appointments, invoicing, and payments in one system.',
    image: '/homepage/industries/services.webp',
    features: [
      'Appointment booking and reminders',
      'Deposits, invoices, and balances',
      'Staff commission tracking',
      'Recurring and package billing',
    ],
  },
]
