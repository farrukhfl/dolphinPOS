import { Archive, CreditCard, Printer, ScanLine, Tablet } from 'lucide-react'

// Icons stay as a fallback for anywhere the photography is not wanted.
export const hardware = [
  {
    name: 'Dolphin POS Terminal',
    icon: Tablet,
    description: 'FHD, touchscreen display, easy to use',
    image: '/services/hardware/terminal-blaze.webp',
  },
  {
    name: 'Card Reader',
    icon: CreditCard,
    description: 'Accept all payments securely',
    image: '/services/hardware/card-reader.webp',
  },
  {
    name: 'Barcode Scanner',
    icon: ScanLine,
    description: 'Quickly scan items and run age verification',
    image: '/services/hardware/barcode-scanner.webp',
  },
  {
    name: 'Thermal Receipt Printer',
    icon: Printer,
    description: 'Dual pricing receipts on every checkout',
    image: '/services/hardware/thermal-printer.webp',
  },
  {
    name: 'Cash Drawer',
    icon: Archive,
    description: 'Secure compartment for storing cash',
    image: '/services/hardware/cash-drawer.webp',
  },
]
