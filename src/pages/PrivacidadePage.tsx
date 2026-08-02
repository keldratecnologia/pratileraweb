import LegalLayout from '../components/LegalLayout';
import LegalSections from '../components/LegalSections';
import { LEGAL_LAST_UPDATED, PRIVACY_INTRO, PRIVACY_SECTIONS } from '../legal/legalContent';

export default function PrivacidadePage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      subtitle="Como coletamos, usamos e protegemos os seus dados."
      lastUpdated={LEGAL_LAST_UPDATED}
    >
      <LegalSections intro={PRIVACY_INTRO} sections={PRIVACY_SECTIONS} />
    </LegalLayout>
  );
}
