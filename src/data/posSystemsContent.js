import { BarChart3, Building2, LineChart, MapPinned, ScanSearch, ShoppingBag, Sparkles, Store, Users, UtensilsCrossed } from 'lucide-react'

export const posSystemsHero = {
  image: '/pos-systems/hero.webp',
  alt: 'A Dolphin POS terminal, printer, cash drawer and card reader surrounded by labels for sales, inventory, employees, payments, analytics and multi-location control',
}

export const businessTypes = [
  {
    title: 'Retail',
    body: 'Grocery, convenience, liquor, smoke shops, and specialty retail — checkout built for how you actually stock and sell.',
    icon: Store,
    to: '/pos-retail',
    disabled: false,
    image: '/pos-systems/paths/retail.webp',
    alt: 'Dolphin POS running at convenience, pharmacy, grocery, vape and liquor counters',
  },
  {
    title: 'Services',
    body: 'Appointments, invoicing, and mobile payments for service businesses that get paid on the go.',
    icon: Sparkles,
    to: '/services',
    disabled: false,
    image: '/pos-systems/paths/services.webp',
    alt: 'A salon owner holding a Dolphin POS receipt beside a card terminal and an appointments screen',
  },
  {
    title: 'Restaurant',
    body: 'Full-service and quick-service restaurant tools, built for the way your kitchen runs.',
    icon: UtensilsCrossed,
    to: null,
    disabled: true,
    image: '/pos-systems/paths/restaurant.webp',
    alt: 'A Dolphin POS terminal on a restaurant counter',
  },
]

export const reportingPanel = {
  title: 'Reporting that keeps you ahead',
  body: 'Live sales, margin and stock on the laptop in the back office or the phone in your pocket.',
  image: '/pos-systems/reporting.webp',
  alt: 'The Dolphin POS dashboard on a laptop and a phone, showing sales totals and a store overview chart',
}

export const dualPricingPanel = {
  title: 'Dual pricing, handled',
  body: 'Both prices are calculated and shown at checkout, with no manual entry from your staff.',
  image: '/pos-systems/dual-pricing-handled.webp',
  alt: 'A Dolphin POS terminal showing the cash price beside the card price at checkout',
}

export const builtInSavings = {
  image: '/pos-systems/built-in-savings.webp',
  alt: 'A full Dolphin POS counter setup with live tiles for sales today, inventory, customers and accepted payments',
}

export const reportingFeatures = [
  { title: 'Custom Dashboards', icon: BarChart3 },
  { title: 'Profitability Insights', icon: LineChart },
  { title: 'Customer Analytics', icon: Users },
  { title: 'Inventory Forecasting', icon: ScanSearch },
  { title: 'Multi-Location Visibility', icon: MapPinned },
]

export const dualPricingFeatures = [
  { title: 'Automatic checkout calculations' },
  { title: 'Cash and card pricing displayed' },
  { title: 'Secure configuration' },
  { title: 'Store-specific pricing rules' },
  { title: 'Accurate transaction reporting' },
  { title: 'Easy employee experience' },
  { title: 'Built for everyday use' },
]

export const businessTabs = [
  {
    key: 'new',
    image: '/pos-systems/tabs/new-business.webp',
    alt: 'A first Dolphin POS counter set up and ready to take its first sale',
    label: 'New Business',
    icon: ShoppingBag,
    body: 'Just getting started? Launch with hardware, software, and dual pricing pre-configured out of the box.',
    features: ['Free hardware to get started', 'Guided onboarding and setup', 'Built-in dual pricing from day one', 'No long-term contracts'],
  },
  {
    key: 'multi',
    image: '/pos-systems/tabs/multi-location.webp',
    alt: 'Several store locations managed from one Dolphin POS dashboard',
    label: 'Multiple Locations',
    icon: MapPinned,
    body: 'Manage every store from one login, with pricing, inventory, and staff kept in sync automatically.',
    features: ['Centralized multi-location dashboard', 'Store-specific pricing rules', 'Shared or independent inventory', 'Consolidated reporting'],
  },
  {
    key: 'enterprise',
    image: '/pos-systems/tabs/enterprise.webp',
    alt: 'A high-volume multi-brand Dolphin POS rollout',
    label: 'Enterprise',
    icon: Building2,
    body: 'Custom rollout, dedicated support, and integrations for high-volume, multi-brand operations.',
    features: ['Dedicated account management', 'Custom integrations and API access', 'Advanced role-based permissions', 'Priority support SLA'],
  },
]

export const faqs = [
  { question: 'How does dual pricing actually work on Dolphin POS?', answer: 'Dolphin POS calculates and displays both a cash price and a card price automatically at checkout, so the customer sees and chooses their price with no manual entry from your staff.' },
  { question: 'Is dual pricing compliant with card network rules?', answer: 'Yes. Dolphin POS is configured to follow card network dual pricing and cash discount disclosure requirements in every state where it is permitted.' },
  { question: 'Can I manage inventory, staff, and sales all in one place?', answer: 'Yes. Inventory, employee permissions, and sales reporting all live in the same Dolphin POS dashboard, so you are not juggling separate systems.' },
  { question: 'Can I manage my stores remotely?', answer: 'You can view live sales, adjust pricing, and manage inventory from any device, whether you are on the floor or off-site.' },
  { question: 'Can Dolphin POS be customized to my business?', answer: 'Store-specific pricing rules, item catalogs, and permissions can all be configured per location.' },
  { question: 'Will Dolphin POS scale as I add locations?', answer: 'Yes. Dolphin POS is built to add locations without adding complexity, with centralized reporting across every store.' },
  { question: 'What kind of support do I get after I sign up?', answer: 'Every Dolphin POS account includes dedicated support to help with setup, troubleshooting, and ongoing questions.' },
]
