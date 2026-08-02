import LegalLayout from '../components/LegalLayout';
import LegalSections from '../components/LegalSections';
import { LEGAL_LAST_UPDATED, TERMS_INTRO, TERMS_SECTIONS } from '../legal/legalContent';

/* Conteúdo em `src/legal/legalContent.ts`, cópia do arquivo do app. O texto
   estava escrito à mão aqui e ficou parado em 19/05/2026 enquanto o app
   mudava — dizendo, entre outras coisas, que cancelar o plano tirava o perfil
   do ar, o que deixou de ser verdade com o modelo gratuito. */
export default function TermosPage() {
  return (
    <LegalLayout
      title="Termos de Uso"
      subtitle="Leia com atenção antes de utilizar o aplicativo ou o site Pratilera."
      lastUpdated={LEGAL_LAST_UPDATED}
    >
      <LegalSections intro={TERMS_INTRO} sections={TERMS_SECTIONS} />
    </LegalLayout>
  );
}
