import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PosSystems from './pages/PosSystems'
import Services from './pages/Services'
import DualPricing from './pages/DualPricing'
import PosRetail from './pages/PosRetail'
import Pricing from './pages/Pricing'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Careers from './pages/Careers'
import PartnerProgram from './pages/PartnerProgram'
import PartnerAgent from './pages/PartnerAgent'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import HowToSetup from './pages/HowToSetup'
import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'

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
