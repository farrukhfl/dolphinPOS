# Dolphin POS — React Rebuild Prompt (Batch 2)
Paste this into Claude Code AFTER batch 1 (Home, POS Systems, Services, Dual Pricing, POS Retail) is built. Same global Nav/Footer/BookDemoModal components from batch 1 apply here — do not rebuild them.

---

Continue building the Dolphin POS React site. Add these 6 pages using the same stack (Vite, JSX, Tailwind CSS, React Router v6, lucide-react) and the same reusable Layout/Navbar/Footer/BookDemoModal components from batch 1. Real scraped copy below — light editing only for flow, not new invented copy.

## 6. PRICING (/pricing)
- Hero: "Find the right POS solution for your business"
- Subhead: "Pay $0 credit card processing with built-in dual pricing. Cancel or switch anytime. No strings attached. No hidden fees."
- Small note: "Prices shown are only available online."
- ⚠️ KNOWN LIVE-SITE BUG: despite the "prices shown" note, the live page shows NO actual dollar amounts anywhere — just a feature comparison table with no price row. Build the table exactly as scraped (no invented prices), but add a `{/* TODO: confirm real tier pricing with Farrukh/backend before launch */}` comment above the pricing table so it's not silently shipped broken.
- 3-tier comparison table — **Dolphin Go / Dolphin Pro / Dolphin Premium**:

| | Dolphin Go | Dolphin Pro | Dolphin Premium |
|---|---|---|---|
| Tagline | Get started for less, with all the essentials your small business needs. | Advanced capabilities and robust hardware for fast-growing retailers. | Scale confidently with Pro features plus extra tools for enterprise retail. |
| Best For | Single-location retailers | Growing retail + online | Multi-location & marketing-driven |

Core POS Features (✓ = included, — = not included):
- Full Retail POS Software — ✓ / ✓ / ✓
- Built-in Dual Pricing — ✓ / ✓ / ✓
- Inventory & Pricebook — ✓ / ✓ / ✓
- Barcode Scanning & Weighing — ✓ / ✓ / ✓
- Returns, Refunds & Exchanges — ✓ / ✓ / ✓
- Employee Roles & Permissions — ✓ / ✓ / ✓
- Sales Reports & Analytics — ✓ / ✓ / ✓
- Multi-Register Support — — / ✓ / ✓
- Remote Back Office Access — — / ✓ / ✓

E-Commerce Capabilities (Go gets none):
- Online Storefront — — / ✓ / ✓
- Inventory Sync (POS + Online) — — / ✓ / ✓
- Online Orders & Payments — — / ✓ / ✓
- Unified Reporting — — / ✓ / ✓

Marketing & Growth Tools (Premium-exclusive):
- Built-In Loyalty — — / — / ✓
- Customer Profiles — — / — / ✓
- Promotions & Discounts — — / — / ✓
- Targeted Offers & Discounts — — / — / ✓

Footer note under table: "All plans offer built-in dual pricing, automatically applied at checkout."
No FAQ, no testimonials on this page — just the table and standard closing CTA banner.

## 7. ABOUT US (/about-us)
- Hero: "Who We Are" / "We Build POS Systems That Businesses Stay With." + subhead "We build POS technology designed to simplify operations, strengthen margins, and help businesses perform at their best." + "Book a Demo" CTA
- "Why We Exist" — "Small businesses deserve better technology. So we build it." + 3 values: Deliberate ("Every feature has a reason"), Transparent ("Straightforward pricing. Straightforward software."), Evolving ("Every update solves something worth solving.")
- "Industries" — "Powering community businesses" — 3 cards:
  - Retail — "Grocery, convenience, liquor, specialty, and more." → links to /pos-retail
  - Services — "Salons, medical, wellness, contractors, and more." → links to /services
  - Restaurants — "From quick-service to full-service dining" → "Coming Soon" (disabled)
  - ⚠️ KNOWN LIVE-SITE BUG: on the live site, the Retail card's link text incorrectly reads "Dolphin POS for Services" even though it correctly points to /pos-retail. Fix this in the rebuild — link text should say "Dolphin POS for Retail".
- "Our Solutions" — "One Complete Point of Sale" — two feature blocks:
  - "Built for the Counter" (hardware): Commercial-grade hardware, Modern touchscreen terminals, Barcode scanners & printers, Cash drawers & customer displays, Built for high-volume environments
  - "Built for Business" (software): Built-in dual pricing, Inventory management, Employee management, Customer loyalty & gift cards, Real-time reporting
  - CTA: "Explore Dolphin POS" → /pos-systems
- "Looking Ahead" — "Here for the long run" — "We're investing in technology that helps businesses adapt to changing payments, rising costs, multi-location growth, automation, and smarter decision-making — without forcing them to start over every few years." + CTA → /pos-systems
- "Tell us about your business" — mini lead-capture form: Business Type dropdown (Retail / Professional Services / Restaurants (coming soon)) + "Start the Conversation" submit button

## 8. CONTACT US (/contact-us)
- Hero: "Contact Us" / "Setting up your business with Dolphin POS is easy." + "Answer a few questions to connect with our sales team and see if you qualify for the complete Dolphin POS system for just $49.99*." + fine print: "*Limited-time offer. U.S. businesses only."
- "Get started here" — real lead form fields: Full Name, Phone Number, Email Address, Business Name, Business Website, "Your Require" dropdown (options: Complete Dolphin POS System / Only the Hardware / Only the Software), Your Message (textarea), "Start the Conversation" submit button
- "Already a Dolphin customer?" — "Reach out to customer support at 888-696-1049 or send us an email at support@dolphinpos.com for non-urgent queries."
- 3-card "24/7/365 Support" section:
  - Call Us — "Speak with our POS specialists today." — 888-696-1049 — "Mon-Fri, 8am-4pm CST"
  - Email Us — "Write to us any time." — sales@dolphinpos.com — "Reply within 1 business hour"
  - Start a chat — "Talk to our Support team right away." — "Live Chat" — "Available on our website"
  - ⚠️ Note: phone number on this page is consistently 888-696-1049, but the SITE-WIDE footer/topbar phone number sometimes appears as 800-376-2877 (older number) elsewhere on the live site — use 888-696-1049 as the primary/current number throughout the rebuild for consistency, flag 800-376-2877 as a legacy number to confirm.
- "Our team can help you" — 5 topic routing cards (no links on live site, just labels): Point of Sale Systems, Payment Processing, Dual Pricing Solutions, Business Growth & Expansion, Hardware & System Setup
- Closing CTA: "Ready to experience Dolphin POS?" → Call Sales: 888-696-1049

## 9. CAREERS (/careers)
- Hero: "How to Set Up" (eyebrow) / "Work at Dolphin" + "Build your career designing and marketing technology and products that shape how businesses work and thrive." + note: "On-site, remote, and hybrid opportunities available."
- "Why Our Work Matters" — "We build smarter commerce technology for growing businesses." — 2 paragraphs about accessible, practical tech without hidden costs — bullet list: Powerful features included as standard—not expensive upgrades / Technology designed to solve real business challenges / Simplicity without sacrificing advanced capabilities / Innovation driven by customer needs, not pricing tiers / Helping businesses grow with technology they can actually afford
  - CTA "Explore the Dolphin POS System" → links to /job-openings (mismatched label — reads like a product CTA but goes to job listings; keep the destination, consider relabeling to "Search Open Roles" for clarity — flag as a content/labeling inconsistency from the live site)
- "Our Hiring Process" — "Benefit from straightforward hiring" — 6-step pipeline: Apply for the role → Application reviewed and shortlisted → Online assessment scheduled → HR Interview set up → Final interview with top management → Get hired and get working
- "Explore available roles" — "Search Jobs" CTA → /job-openings (this is a separate route — build as a placeholder/"Coming soon" route for now since job listing content hasn't been scraped yet)
- "A wide range of benefits": Excellent salary, Performance bonuses, Project-related incentives, Career development opportunities, Stress-free and supportive culture, Remote & hybrid work available
- "Don't see the right role?" — "Join our Talent Network. Upload resume. We'll reach out." — "Submit Application" CTA (build as a simple resume-upload form placeholder)

## 10. PARTNER PROGRAM / Referral Partner (/partner-program)
- Hero: "Referral partner program" / "Refer. Succeed. Get $500!" + "For every business you refer to Dolphin POS that successfully signs up, you win $500. No fine print or strings attached." + CTA "Become a Referral Partner" (anchor link to form section)
- Trust stats row: "1000s" of businesses run on Dolphin POS / "15+" Years of Industry Experience / "$$$" Thousands of dollars saved every year in credit card fees
- "Three steps. That's it." — 1) You refer ("Introduce a business that could benefit from Dolphin POS.") 2) We make the sale ("Our team reaches out, answers questions, demonstrates the solution, and closes the deal.") 3) You get $500 ("Once your referral becomes a client, we send your $500 reward.")
- "Start referring today" form section:
  - ⚠️ KNOWN LIVE-SITE BUG: the live site literally has the placeholder text "Insert form with these fields: Your information / Referred Business Information" where a real form should be — the form was never built/published. This needs a best-guess reconstruction. Build with these fields (confirm with backend before launch):
    - Your Information: Full Name, Email, Phone
    - Referred Business Information: Business Name, Business Contact Name, Business Phone, Business Type/Industry
    - Consent checkbox referencing Privacy Policy (real copy on live site: "By submitting this form, you agree to our Privacy Policy and consent to being contacted regarding our Referral Partner Program.")
    - "Submit Referral" button
- "Refer more. Earn more. Repeat nonstop." — "There are no caps, quotas, or monthly limits. Every successful referral earns you another $500, so your earning potential is entirely up to you."
- "Why they'll thank you" — businesses you refer get: Modern POS systems with fully integrated controls, Easy and simple built-in dual pricing, Reduced credit card processing costs, Fast reliable support 24/7/365, Business management tools, Payment solutions built to grow
- Closing CTA: "Start earning $500 per referral today!" / "Unlimited bonuses await you. Get started."

## 11. PARTNER AGENT (/partner-agent)
- Hero: "Dolphin POS Partner Program" / "Build Your Merchant Portfolio. Earn Every Month." + "Partner with Dolphin POS to help businesses adopt a better POS system while earning recurring monthly commissions from your merchant portfolio." + CTA "Become a Partner" (anchor to form)
- 4 trust badges: Recurring Monthly Commissions, No Territory Restrictions, Dedicated Partner Portal, Expert Partner Support
- "How partnership becomes income" — 4-step: Partner Onboarding ("Get access to your dashboard, resources, and support team.") → Merchant Acquisition ("Work with businesses looking for a better POS solution.") → Successful Deployment ("Our specialists implement and support each merchant.") → Recurring Commissions ("Earn monthly residuals while your merchants remain active.")
- "The benefit that sells itself: Built-in dual pricing" section — explains dual pricing as the sales hook + CTA "Explore Dual Pricing in Detail" → /dual-pricing
- "The Product Behind Your Success" — 4 value props: Built-in Dual Pricing that helps businesses keep more of every card sale / Commercial-Grade POS Ecosystem with reliable hardware and powerful software / Flexible for Every Business Size, from independent stores to enterprise operations / Dedicated Partner & Merchant Support from onboarding through long-term growth — CTA "Explore Dolphin POS" → /pos-systems
- "Run your partner business with complete visibility" — "Everything you need to track performance, manage merchants, and measure your progress." (dashboard visual/mockup)
- "Become a Dolphin POS Partner" — application form (build with reasonable fields: Name, Email, Phone, Company/Agency Name, Experience level) + consent checkbox with real copy: "By checking this box and submitting this form, you consent to Dolphin POS collecting and using the information you've provided to contact you about our Partner Agent Program, products, services, and related business opportunities. We respect your privacy, will handle your information in accordance with our Privacy Policy, and will never sell your personal information. You can opt out of marketing communications at any time." — "Submit" button
- FAQ accordion (10 Qs — full text):
  1. **How do I make money with Dolphin POS?** — Commissions when merchants you bring on start processing payments; income builds over time with every active account, not a one-time payout.
  2. **Is this easier to sell than a traditional POS?** — Yes — you're offering to offset a fee merchants already feel, not selling features/hardware.
  3. **Do I need to support the merchant after onboarding?** — No, Dolphin's team handles ongoing support/troubleshooting/account management.
  4. **How are my referrals tracked?** — Logged and tracked internally; you get credit once a merchant is tied to your account and begins processing.
  5. **Is there a cost to join the program?** — No upfront costs or fees.
  6. **What kind of merchants should I target?** — Any business with frequent card payments; retail, restaurants, salons, service businesses convert most easily.
  7. **Why would a merchant switch to Dolphin POS?** — It changes their cost structure by offsetting processing fees rather than absorbing them.
  8. **Will merchants push back on dual pricing?** — Generally no, when clearly displayed — many merchants are already familiar with the model.
  9. **What makes Dolphin POS different from other POS systems?** — Competes on outcomes (reducing processing costs) rather than just features.
  10. **Am I locked into any quotas or commitments?** — No minimums or quotas; refer as many or as few as you want.
- Closing CTA: "Join the Partner Program" / "Help businesses save thousands on credit card processing with Dolphin POS." → Call Sales: 888-696-1049

## NOTES / BUGS TO FLAG (do not silently fix without confirming — leave TODO comments in code):
1. **Pricing page** — no actual $ amounts shown despite the page promising them. Needs real numbers from Farrukh/backend.
2. **About Us** — Retail industry card's link text says "Dolphin POS for Services" but correctly links to /pos-retail. Fix the label to "Dolphin POS for Retail" in the rebuild.
3. **Contact Us** — site-wide phone number inconsistency: 888-696-1049 (current, used most places) vs 800-376-2877 (appears in older nav/footer areas) — standardize on 888-696-1049, flag the other as legacy.
4. **Careers** — "Explore the Dolphin POS System" button leads to /job-openings (a job search), not the POS product — mismatched CTA label vs destination.
5. **Partner Program** — the referral form was never built on the live site (literal "Insert form with these fields" placeholder text left in production). Reconstructed field set above is best-guess — confirm with backend before launch.
6. **Job Openings (/job-openings)** — linked from Careers but not yet scraped/prompted. Build as a placeholder route for now.

Reuse the <FAQAccordion />, <BookDemoModal />, and any form-building patterns already established in batch 1.
