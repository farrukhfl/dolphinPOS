import { DEFAULT_DESCRIPTION } from '../lib/seo'

/**
 * Per-route <title>/description, keyed by the route path used in App.jsx.
 * Keep titles under ~60 chars and descriptions under ~160 so Google doesn't truncate them.
 */
export const seoContent = {
  '/': {
    title: 'Dolphin POS | Point of Sale with Built-In Dual Pricing',
    description: DEFAULT_DESCRIPTION,
  },
  'pos-systems': {
    title: 'POS System Software | All-in-One Point of Sale | Dolphin POS',
    description:
      'One POS system to run inventory, staff, and reporting across every business type — with $0 credit card processing built in.',
  },
  services: {
    title: 'POS Hardware & Merchant Services | Dolphin POS',
    description:
      'Terminals, card readers, and merchant services bundled with your Dolphin POS setup — no separate processor to manage.',
  },
  'dual-pricing': {
    title: 'Dual Pricing Program | Eliminate Credit Card Fees | Dolphin POS',
    description:
      'See exactly how Dolphin POS dual pricing splits cash and card prices at checkout so you stop absorbing processing fees.',
  },
  'pos-retail': {
    title: 'Retail POS System | Built for Convenience & Retail Stores | Dolphin POS',
    description:
      'A POS built for retail counters — age verification, offline mode, and fast checkout across convenience and retail stores.',
  },
  pricing: {
    title: 'Dolphin POS Pricing | Plans Starting at $0 Processing',
    description:
      'Compare Dolphin POS plans and hardware bundles. Pay $0 credit card processing with built-in dual pricing — no long-term contract.',
  },
  'about-us': {
    title: 'About Dolphin POS | Our Mission & Team',
    description:
      'Dolphin POS is on a mission to help merchants keep more of every sale. Learn who we are and how we support your business.',
  },
  'contact-us': {
    title: 'Contact Dolphin POS | Book a Demo',
    description:
      'Talk to the Dolphin POS team, book a live demo, or get support — by phone, email, or the contact form.',
  },
  careers: {
    title: 'Careers at Dolphin POS | Open Roles',
    description:
      'Work at Dolphin POS. See our hiring process, benefits, and what it is like to build point-of-sale technology with us.',
  },
  'partner-program': {
    title: 'Referral Partner Program | Earn $500 | Dolphin POS',
    description:
      'Refer a merchant to Dolphin POS and earn $500. See how the referral partner program works and what you get paid.',
  },
  'partner-agent': {
    title: 'Become a Partner Agent | Dolphin POS',
    description:
      'Sell Dolphin POS as a partner agent and earn recurring commission. See income potential, requirements, and how to apply.',
  },
  'privacy-policy': {
    title: 'Privacy Policy | Dolphin POS',
    description: 'How Dolphin POS collects, uses, and protects your information.',
  },
  'terms-and-conditions': {
    title: 'Terms and Conditions | Dolphin POS',
    description: 'The terms and conditions governing use of Dolphin POS products and services.',
  },
  'how-to-setup': {
    title: 'How to Set Up Your Dolphin POS',
    description:
      'Step-by-step setup for your new Dolphin POS terminal, from unboxing to your first sale — plus support if you get stuck.',
  },
  'job-openings': {
    title: 'Job Openings at Dolphin POS',
    description: 'Open roles at Dolphin POS are coming soon. Check back or reach out to careers@dolphinpos.com.',
  },
}

export const NOT_FOUND_SEO = {
  title: 'Page Not Found | Dolphin POS',
  description: 'The page you are looking for could not be found.',
}
