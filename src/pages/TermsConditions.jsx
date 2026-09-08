import LegalPage from '../components/LegalPage'
import { intro, lastUpdated, sections } from '../data/termsContent'

export default function TermsConditions() {
  return <LegalPage title="Terms and Conditions" lastUpdated={lastUpdated} intro={intro} sections={sections} />
}
