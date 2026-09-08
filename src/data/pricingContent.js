export const tiers = [
  { name: 'Dolphin Go', tagline: 'Get started for less, with all the essentials your small business needs.', bestFor: 'Single-location retailers' },
  { name: 'Dolphin Pro', tagline: 'Advanced capabilities and robust hardware for fast-growing retailers.', bestFor: 'Growing retail + online' },
  { name: 'Dolphin Premium', tagline: 'Scale confidently with Pro features plus extra tools for enterprise retail.', bestFor: 'Multi-location & marketing-driven' },
]

export const featureGroups = [
  {
    title: 'Core POS Features',
    rows: [
      { label: 'Full Retail POS Software', values: [true, true, true] },
      { label: 'Built-in Dual Pricing', values: [true, true, true] },
      { label: 'Inventory & Pricebook', values: [true, true, true] },
      { label: 'Barcode Scanning & Weighing', values: [true, true, true] },
      { label: 'Returns, Refunds & Exchanges', values: [true, true, true] },
      { label: 'Employee Roles & Permissions', values: [true, true, true] },
      { label: 'Sales Reports & Analytics', values: [true, true, true] },
      { label: 'Multi-Register Support', values: [false, true, true] },
      { label: 'Remote Back Office Access', values: [false, true, true] },
    ],
  },
  {
    title: 'E-Commerce Capabilities',
    rows: [
      { label: 'Online Storefront', values: [false, true, true] },
      { label: 'Inventory Sync (POS + Online)', values: [false, true, true] },
      { label: 'Online Orders & Payments', values: [false, true, true] },
      { label: 'Unified Reporting', values: [false, true, true] },
    ],
  },
  {
    title: 'Marketing & Growth Tools',
    rows: [
      { label: 'Built-In Loyalty', values: [false, false, true] },
      { label: 'Customer Profiles', values: [false, false, true] },
      { label: 'Promotions & Discounts', values: [false, false, true] },
      { label: 'Targeted Offers & Discounts', values: [false, false, true] },
    ],
  },
]
