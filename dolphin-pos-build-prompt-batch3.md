# Dolphin POS — React Rebuild Prompt (Batch 3)
Paste this into Claude Code AFTER batch 1 and batch 2 are built. Same global Nav/Footer/BookDemoModal components apply — do not rebuild them.

---

Continue building the Dolphin POS React site. Add these 3 pages using the same stack (Vite, JSX, Tailwind CSS, React Router v6, lucide-react). Real scraped copy below — reproduce legal text verbatim for Privacy Policy and Terms (these are legal documents, do not paraphrase), light editing only elsewhere.

## 12. PRIVACY POLICY (/privacy-policy)
Render as a clean single-column legal document layout (headings + body text, no marketing sections). "Last Updated: July 4, 2025" at the top.

⚠️ KNOWN LIVE-SITE BUG: the live page has the literal unfilled placeholder text "OUR WEBSITE URL" in Section 1 instead of the actual domain name. Fix this in the rebuild — replace with "dolphinpos.com".

Sections (15 total, use these exact headings and reproduce the body text as scraped):
1. Introduction — operated by Dolphin POS, based in Chicago, Illinois
2. Information We Collect — Account/Contact Info, Payment Info, Technical/Usage Data (cookies), Marketing/Preference Info
3. How We Use Your Information
4. Legal Basis for Processing
5. How We Share Your Information — Trusted Service Providers, Law Enforcement/Regulators, Business Transfers
6. International Data Transfers
7. Data Retention
8. Your Rights — access, correct, delete, object/restrict, withdraw consent, portability
9. Children's Privacy — not intended for children under 13
10. Security
11. Third-Party Links
12. Do-Not-Track Signals
13. Automated Decision-Making
14. Updates to this Policy
15. Contact Us — support@dolphinpos.com, 888-696-1049

## 13. TERMS AND CONDITIONS (/terms-and-conditions)
Same legal-document layout as Privacy Policy. "Last Updated: July 4, 2025" at top.

⚠️ SAME BUG: Section 1 also has literal "OUR WEBSITE URL" placeholder text on the live site — fix to "dolphinpos.com".

Sections (18 total, exact headings, reproduce body text as scraped):
1. Acceptance of Terms
2. Eligibility — must be 18+ or age of majority
3. Permitted Use — prohibited uses: violating laws, unauthorized access, interfering with security, uploading malicious code/scraping
4. Account Security
5. Products & Services — descriptions are informational, not binding offers
6. Payment & Fees
7. Compliance & Security — PCI DSS Compliance, Data Security Obligations, User Responsibilities
8. Intellectual Property
9. Privacy (references Privacy Policy)
10. Third-Party Links
11. Disclaimer of Warranties (reproduce in original ALL-CAPS legal formatting)
12. Limitation of Liability (reproduce in original ALL-CAPS legal formatting)
13. Indemnification
14. Termination
15. Governing Law — State of Illinois, courts in Chicago
16. Changes to Terms
17. Entire Agreement
18. Contact Information — support@dolphinpos.com, 888-696-1049

## 14. HOW TO SETUP (/how-to-setup)
- Hero: "Set Up Your Dolphin POS" — "Follow our simple video tutorials and get your business up and running in no time." — badge: "Estimated set up time: 30-60 minutes" — CTA "Start Setup" → /contact-us
- "Before you begin" checklist: Your Dolphin POS hardware is connected and powered on / You have a stable internet connection / You have your store login credentials ready
- "Complete your Dolphin POS setup" — "Follow these 7 videos in order to set up your store the right way." — 7-step video list, each with a title, one-line description, running time, and "Watch Video" button (opens video modal):
  1. How to Set Up Dolphin POS and Log In — "Overview of your Dolphin POS and getting started." — 1:11
  2. How to Configure Dolphin POS Hardware — "Connect and set up your payment terminal, printer, and other devices." — 1:42
  3. How to Add Products and Categories — "Create categories and add products." — 1:22
  4. How to Set Up Discounts — "Create and manage discounts for your products and transactions." — 1:23
  5. How to Process Sales and Take Payments — "Process transactions and accept payments." — 1:10
  6. How to Set Up Employee Access and Permissions — "Add employees and set roles and permissions." — 1:02
  7. How to Close Batch and Run Reports — "Close your batch and run end-of-day reports." — 1:05
- ⚠️ KNOWN LIVE-SITE BUG: on the live site the actual embedded video files don't line up with this 7-step list — the "Discounts" step (#4) has no video file linked at all, and "Close Batch and Run Reports" (#7) mistakenly reuses the exact same video file as step #1 instead of its own footage. Build the UI/structure as specified above, but use placeholder/"video coming soon" states for steps 4 and 7 rather than wiring in the wrong or missing videos — flag for Farrukh to source the correct files.
- "Need help?" 3-item support block: Call Us (888-696-1049) / Email Support (support@dolphinpos.com) / Book Setup Assistance ("Schedule a 1-on-1 session")
- FAQ accordion (7 Qs):
  1. **How long does it take to set up Dolphin POS?** — Most businesses complete initial setup in 30–60 minutes depending on products/employees being added.
  2. **Do I need any technical experience?** — No, videos designed for non-technical business owners/staff.
  3. **Should I watch the videos in order?** — Yes, each builds on the previous one.
  4. **Can I pause setup and continue later?** — Yes, progress is saved.
  5. **What if I get stuck during setup?** — Contact support by phone/email or schedule a 1-on-1 session.
  6. **Will these videos work for every Dolphin POS system?** — Covers standard setup; custom hardware/old system/advanced integrations need support team guidance.
  7. **What should I do after completing setup?** — Run a test transaction to verify hardware, payment processing, and receipt printer.
- Closing: "You're Ready!" — "Once you've completed the 7 steps, you're ready to run your first sale." — CTA "Log in to Dolphin POS" → external link (dolphinposportal.com)

## REMAINING GAPS (not yet scraped — flagged, not built):
- **Job Openings (/job-openings)** — linked from Careers ("Search Jobs" / "Explore the Dolphin POS System" buttons) but the page isn't indexed/reachable yet for scraping. Build as a simple placeholder route ("Open roles coming soon — check back or reach out to careers@dolphinpos.com") until real content can be pulled from the live site or WordPress admin directly.
- **/home-old, /shop, /my-account** — likely legacy/WooCommerce/account pages, not marketing content. Recommend skipping these in the rebuild scope entirely unless Farrukh confirms they're needed.

## FULL SITEMAP STATUS (for reference — cumulative across all 3 batches):
✅ Built: Home, POS Systems, Services, Dual Pricing, POS Retail, Pricing, About Us, Contact Us, Careers, Partner Program, Partner Agent, Privacy Policy, Terms and Conditions, How To Setup
⏳ Placeholder only: Job Openings
⏭️ Out of scope (recommend skipping): Home-old, Shop, My Account
