import { BadgeCheck, ClipboardCheck, ShieldCheck, Sparkles, Zap, DollarSign, ClipboardList, BarChart3, Users, LineChart } from 'lucide-react'

export const trustBadges = [
  { label: 'Built-in Dual Pricing', icon: BadgeCheck },
  { label: 'Easy to Set Up & Use', icon: Zap },
  { label: '100% Compliant & Transparent', icon: ShieldCheck },
  { label: 'Powerful Tools to Grow', icon: Sparkles },
]

export const howItWorks = [
  { step: '01', title: 'Customer chooses', body: 'At checkout, the customer picks how they want to pay — cash or card.' },
  { step: '02', title: 'Dolphin applies pricing', body: 'The correct cash or card price is calculated and displayed automatically.' },
  { step: '03', title: 'You keep more revenue', body: 'The processing fee is covered by the price difference, not your margin.' },
]

export const benefitCards = [
  { title: 'More Profit', body: 'Keep 100% of your sale price instead of losing 2-4% to card fees.', icon: DollarSign },
  { title: 'Faster Checkout', body: 'Pricing is calculated automatically, no manual math or awkward conversations.', icon: Zap },
  { title: 'Transparent Pricing', body: 'Customers see the exact cash and card price before they pay.', icon: ClipboardCheck },
  { title: 'Built-in Compliance', body: 'Dual pricing is configured to follow card network and state disclosure rules.', icon: ShieldCheck },
]

export const insightsFeatures = [
  { title: 'Live sales dashboard', icon: BarChart3 },
  { title: 'Per-transaction fee breakdown', icon: ClipboardList },
  { title: 'Customer payment trends', icon: Users },
  { title: 'Savings tracked over time', icon: LineChart },
]

export const faqs = [
  { question: 'Will dual pricing confuse my customers?', answer: 'No. Dolphin POS clearly displays both the cash and card price at checkout, so customers understand exactly what they are paying before they pay it.' },
  { question: 'Do I need technical knowledge to set this up?', answer: 'No. Dual pricing is enabled during onboarding and requires no ongoing technical maintenance from you or your staff.' },
  { question: 'Do I lose any POS features by using dual pricing?', answer: 'No. Every Dolphin POS feature — inventory, reporting, employee management — works exactly the same with dual pricing turned on.' },
  { question: 'Is dual pricing legal?', answer: 'Yes. Dual pricing is legal in most states when disclosed properly, and Dolphin POS is configured to meet those disclosure requirements automatically.' },
  { question: 'Can dual pricing scale across multiple locations?', answer: 'Yes. Pricing rules can be set per location while still rolling up into one centralized report.' },
  { question: 'What support do I get if something looks off?', answer: 'Dedicated support is available to review your pricing setup and transaction reporting any time something does not look right.' },
]
