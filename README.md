# Dolphin POS — Marketing Site

React (Vite) marketing website for Dolphin POS, a point-of-sale product from Dolphin Merchant Services built around built-in dual pricing (cash discounting).

## Stack

- Vite + React (JSX)
- Tailwind CSS
- React Router v6
- Framer Motion
- lucide-react

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Structure

- `src/pages` — one file per route
- `src/components` — shared UI (Navbar, Footer, BookDemoModal, SavingsCalculator, FAQAccordion, etc.)
- `src/data` — per-page copy and content arrays
- `src/lib` — nav config and the Book Demo modal context

## Pages

Home, POS Systems, Services, Dual Pricing, POS Retail, Pricing, About Us, Contact Us, Careers, Referral Partner Program, Partner Agent, Privacy Policy, Terms and Conditions, How to Setup, plus a Job Openings placeholder.
