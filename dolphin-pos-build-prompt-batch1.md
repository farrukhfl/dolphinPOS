# Dolphin POS — React Rebuild Prompt (Batch 1)
Paste this into Claude Code.

---

Build a React (Vite) marketing website for "Dolphin POS" — a point-of-sale product from Dolphin Merchant Services, focused on dual pricing (cash discounting).

STACK: Vite + React (JSX, not TypeScript), Tailwind CSS, React Router v6, lucide-react for icons. Match the same project structure/conventions used in the Dolphin Merchant Services and DERPS React rebuilds (component-based sections, reusable Layout with Navbar/Footer, mobile-responsive).

BRAND: Dolphin blue color family (same family as DMS/DERPS/GoDats), clean modern SaaS/fintech look — benchmark against Toast POS and Clover for visual tone. Logo text "Dolphin POS."

GLOBAL NAV (all pages):
- Retail (/pos-retail)
- Services (/services)
- Dual Pricing (/dual-pricing)
- Products dropdown → POS Systems (/pos-systems)
- POS Plans (/pricing)
- Explore dropdown → About Us (/about-us), Contact Us (/contact-us), Careers (/careers), Referral Partner (/partner-program), Partner Agent (/partner-agent)
- Top bar: "Call Sales: 888-696-1049" (tel link)
- Two login links: "Legacy Login" and "Dolphin Login" (external — keep as placeholder links)
- CTA button: "Book a Demo" opens a modal (date picker + "Select Product" dropdown: Dolphin POS / Dolphin Software / Dolphin Hardware + consent checkbox + "Schedule Appointment" button) — build as real modal component, not a dead link

GLOBAL FOOTER: mission statement, social links (LinkedIn, Instagram, Facebook), 3 link columns (Our Company / Services / Resources), Quick Links, contact email support@dolphinpos.com, phone 888-696-1049, copyright, secondary CTA banner "How About Ready for hot margins? Get the new Dolphin POS — Buy Now" linking to /contact-us.

BUILD THESE 5 PAGES FIRST (real scraped copy below — do not invent new copy, only light editing for flow/bug fixes):

## 1. HOME (/)
- Hero: "Stop Absorbing Credit Card Fees. Keep More of Every Sale." + subhead about dual pricing auto-applying cash discount + "Book a Demo" / "Watch a 30-sec Overview" buttons
- Interactive Savings Calculator: inputs for Monthly Credit Card Sales ($50,000 default), Average Ticket Size ($25 default), Current Processing Rate (2.90% default) → calculates and displays "Your Potential Annual Savings" (build real calc logic, not static — e.g. roughly monthly volume × rate × 12, adjust to land near $6,092 for the defaults)
- "Accept every way your customers pay" — icon grid: Cash, Credit Cards, Debit Cards, Tap to Pay, Apple Pay, Google Pay, Gift Cards, EBT/SNAP, QR Payments, Store Credit, Buy Now Pay Later, Wearable Payments, Digital Wallets, ACH/Bank Transfers
- "How Dolphin POS Works" 3-step: Customer Chooses → Dolphin Calculates → You Save on Fees
- "Meet your all-in-one POS" 4-card grid: Built for Business, Modern & Intuitive, Works Offline, Secure & Compliant
- Features grid: Easy Dual Pricing, Smart Sync, Smarter Inventory, Always Selling, Third-Party Integrations, Complete Control
- Comparison table: Dolphin POS vs Traditional POS (7 rows: Built-in Dual Pricing, Credit Card Processing Fees ($0 vs 2.5-3.5%), Transparent Pricing, POS Hardware Included, Full Retail Features, POS System Cost ($499 one-time vs lower upfront+hidden charges), Dedicated Support)
- Industry grid: Grocery Stores, Convenience Stores, Restaurants, Liquor Stores, Smoke & Vape Shops, Drug Stores & Pharmacies, Professional Services
- "Switch without the strings": Free Credit Card Reader, Zero Credit Card Fees, Honest Pricing Always, No Long-term Contracts, Cancel Anytime
- 2 testimonials (Amman Kabab Naperville, Naureen Moten — 5-star)
- FAQ accordion (5 Qs: setup time, retail types served, how it adapts per store type, payment methods, food+retail hybrid)
- Final CTA banner

## 2. POS SYSTEMS (/pos-systems)
- Hero: "Complete Business Control — Sell More. Keep More. Manage Everything."
- "Built for your business" 3 cards: Retail (link /pos-retail), Services (link /services), Restaurant ("Coming soon" — disabled/greyed card)
- "Know What Comes Next" — reporting feature list (Custom Dashboards, Profitability Insights, Customer Analytics, Inventory Forecasting, Multi-Location Visibility) + dual-pricing feature list (Automatic checkout calculations, Cash and card pricing displayed, Secure configuration, Store-specific pricing rules, Accurate transaction reporting, Easy employee experience, Built for everyday use)
- "Built-In Savings" callout linking to /dual-pricing
- Tabbed section "Choose your business type": New Business / Multiple Locations / Enterprise — each with its own feature bullets and a "Pick Your Plan" CTA (build as real interactive tabs)
- FAQ accordion (7 Qs about dual pricing, compliance, inventory/staff/sales in one place, remote management, customization, scaling, support)
- Final CTA

## 3. SERVICES (/services)
- Hero: "Work Anywhere. Get Paid Everywhere."
- 5-step value chain: Book → Serve → Get Paid Profitably → Build Loyalty → Grow
- "Keep more from every job" 4-point dual-pricing explainer
- 9-feature grid: Built-in Dual Pricing, Mobile Payments, Customer Profiles, Appointment Management, Digital Invoicing, Recurring Billing, Employee Permissions, Offline Mode, Real-Time Reporting
- Hardware showcase: Dolphin POS Terminal, Card Reader, Barcode Scanner, Thermal Receipt Printer, Cash Drawer
- FAQ accordion (8 Qs — service-industry specific: what is a service POS, staff permissions, digital wallets/international cards, booking integrations, funding speed, fraud protection, multi-location/franchise, pricing transparency)
- Final CTA

## 4. DUAL PRICING (/dual-pricing)
- Hero: "Stop Paying Credit Card Processing Fees" + 4 trust badges (Built-in Dual Pricing, Easy to Set Up & Use, 100% Compliant & Transparent, Powerful Tools to Grow)
- Same interactive Savings Calculator as home (reusable component)
- "How Dual Pricing Works" 3-step (Customer chooses → Dolphin applies pricing → You keep more revenue)
- 4 benefit cards: More Profit, Faster Checkout, Transparent Pricing, Built-in Compliance
- Hardware showcase (same 5 items as Services, with descriptions this time: Terminal "FHD, touchscreen display, easy to use", Card Reader "Accept all payments securely", Scanner "Quickly scan items and run age verification", Printer "Dual pricing receipts on every checkout", Cash Drawer "Secure compartment for storing cash")
- "Real-Time Insights" feature list
- Industry grid (same 7 industries as home)
- FAQ accordion (6 Qs: customer confusion, technical knowledge needed, full feature parity, legality, multi-location scaling, support)
- Final CTA

## 5. POS RETAIL (/pos-retail)
- Hero: "Built for Retail. Designed for However You Sell."
- "Dolphin for Retail" 5-card industry grid, each WITH bullet lists: Grocery Stores (High-speed checkout, Weighted produce support, EBT & SNAP payments, Smart inventory tracking), Liquor Stores (Age verification, Bottle & case inventory, Compliance-ready checkout, Customer loyalty), Smoke Shops (Tobacco compliance, Age verification, Massive SKU management, Bundle promotions), Clothing Stores (Size & color variants, Easy exchanges & returns, Seasonal inventory, Customer profiles), Convenience Stores (Fast checkout, Mixed inventory management, Employee permissions, EBT-ready payments)
- Dual pricing live demo mockup: Cash $10.00 vs Card $10.35 side by side + receipt/reporting visual
- "Built for every hour of retail" — interactive timeline (8:00 AM Employees clock in → 9:00 AM Inventory arrives → 11:30 AM High-volume checkout → 2:00 PM Live reporting → 5:00 PM Low-stock alerts → 9:00 PM Close day reports)
- 10-feature grid: Built-in Dual Pricing, E-commerce Sync, Vendor Management, Remote Device Management, Employee Permissions, Offline Mode, Age Verifications, Customer Loyalty, Third-Party Integrations, Real-Time Reporting
- "Retail command center" bullet list + "POS hardware that fits your business" bullet list (side by side)
- FAQ accordion (8 Qs: business types supported, dual pricing support, omnichannel payments, existing hardware compatibility, setup time "1-3 business days", sales/tax/staff tracking, eCommerce integration, compliance)
- Final CTA

NOTES:
- Reuse one <SavingsCalculator /> component across Home and Dual Pricing pages rather than duplicating logic
- Reuse one <BookDemoModal /> component, one <IndustryGrid /> component (industries repeat across Home/Dual Pricing), one <HardwareShowcase /> component (repeats across Services/Dual Pricing/POS Retail), and one <FAQAccordion /> component fed by per-page Q&A arrays
- Restaurant vertical is explicitly "Coming soon" on the live site — don't build it out, just the disabled card
- Leave Pricing, About Us, Contact Us, Careers, Partner Program, and legal pages as routed-but-placeholder ("Coming soon") for now — we'll scrape and prompt those in the next batch
