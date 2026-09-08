import LegalPage from '../components/LegalPage'
import { intro, lastUpdated, sections } from '../data/privacyPolicyContent'

export default function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" lastUpdated={lastUpdated} intro={intro} sections={sections} />
}
