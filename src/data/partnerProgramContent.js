import { Users, Award, DollarSign, UserPlus, Handshake, Gift, RefreshCw, Zap, ShieldCheck, LifeBuoy, LayoutDashboard, CreditCard } from 'lucide-react'

export const trustStats = [
  { value: '1000s', label: 'businesses run on Dolphin POS', icon: Users },
  { value: '15+', label: 'Years of Industry Experience', icon: Award },
  { value: '$$$', label: 'Thousands of dollars saved every year in credit card fees', icon: DollarSign },
]

export const steps = [
  { title: 'You refer', body: 'Introduce a business that could benefit from Dolphin POS.', icon: UserPlus },
  { title: 'We make the sale', body: 'Our team reaches out, answers questions, demonstrates the solution, and closes the deal.', icon: Handshake },
  { title: 'You get $500', body: 'Once your referral becomes a client, we send your $500 reward.', icon: Gift },
]

export const referredBenefits = [
  { title: 'Modern POS systems with fully integrated controls', icon: LayoutDashboard },
  { title: 'Easy and simple built-in dual pricing', icon: RefreshCw },
  { title: 'Reduced credit card processing costs', icon: CreditCard },
  { title: 'Fast reliable support 24/7/365', icon: LifeBuoy },
  { title: 'Business management tools', icon: Zap },
  { title: 'Payment solutions built to grow', icon: ShieldCheck },
]
