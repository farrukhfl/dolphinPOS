import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'

const PosSystems = lazy(() => import('./pages/PosSystems'))
const Services = lazy(() => import('./pages/Services'))
const DualPricing = lazy(() => import('./pages/DualPricing'))
const PosRetail = lazy(() => import('./pages/PosRetail'))
const Pricing = lazy(() => import('./pages/Pricing'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const ContactUs = lazy(() => import('./pages/ContactUs'))
const Careers = lazy(() => import('./pages/Careers'))
const PartnerProgram = lazy(() => import('./pages/PartnerProgram'))
const PartnerAgent = lazy(() => import('./pages/PartnerAgent'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsConditions = lazy(() => import('./pages/TermsConditions'))
const HowToSetup = lazy(() => import('./pages/HowToSetup'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pos-systems" element={<PosSystems />} />
        <Route path="services" element={<Services />} />
        <Route path="dual-pricing" element={<DualPricing />} />
        <Route path="pos-retail" element={<PosRetail />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="careers" element={<Careers />} />
        <Route path="partner-program" element={<PartnerProgram />} />
        <Route path="partner-agent" element={<PartnerAgent />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsConditions />} />
        <Route path="how-to-setup" element={<HowToSetup />} />
        <Route
          path="job-openings"
          element={<ComingSoon title="Job Openings" body="Open roles coming soon — check back or reach out to careers@dolphinpos.com." />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
