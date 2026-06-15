import { Link } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';
import LegalLayout from '../components/LegalLayout';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold mb-3" style={{ color: '#1C3245' }}>{title}</h2>
      <div className="text-sm leading-relaxed space-y-3" style={{ color: '#495E70' }}>
        {children}
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-2xl border p-5 transition-shadow hover:shadow-md"
      style={{ borderColor: '#E8EEF3' }}
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: '#FFF1E6', color: '#FF7300' }}
      >
        {icon}
      </span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-wide" style={{ color: '#768798' }}>
          {title}
        </span>
        <span className="block text-sm font-semibold" style={{ color: '#1C3245' }}>
          {value}
        </span>
      </span>
    </a>
  );
}

function Faq({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-bold mb-1" style={{ color: '#1C3245' }}>{question}</h3>
      <p>{children}</p>
    </div>
  );
}

export default function SuportePage() {
  return (
    <LegalLayout
      title="Central de Suporte"
      subtitle="Precisa de ajuda com o Pratilera? Fale com a gente — respondemos o quanto antes."
      lastUpdated="15 de junho de 2026"
    >
      <Section title="Fale com a gente">
        <p>
          Estamos aqui para ajudar você a aproveitar o Pratilera, seja para encontrar
          serviços na sua cidade ou para divulgar o seu negócio. Escolha o canal que
          preferir:
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <ContactCard
            icon={<Mail size={20} />}
            title="E-mail"
            value="contato@pratilera.app.br"
            href="mailto:contato@pratilera.app.br"
          />
          <ContactCard
            icon={<MessageCircle size={20} />}
            title="WhatsApp"
            value="+55 31 99550-6980"
            href="https://wa.me/5531995506980"
          />
        </div>
        <p className="mt-4">
          Atendimento de segunda a sexta, das 9h às 18h (horário de Brasília). Mensagens
          recebidas fora desse período são respondidas no próximo dia útil.
        </p>
      </Section>

      <Section title="Perguntas frequentes">
        <div className="space-y-5">
          <Faq question="O aplicativo é gratuito?">
            Sim. Para quem busca serviços, estabelecimentos e eventos, o Pratilera é
            totalmente gratuito. Negócios e profissionais que desejam ter uma vitrine
            contam com planos de assinatura.
          </Faq>
          <Faq question="Como anuncio o meu negócio?">
            Baixe o aplicativo, crie sua conta e siga o passo a passo para cadastrar o
            seu perfil. Em caso de dúvidas, fale com a gente pelos canais acima.
          </Faq>
          <Faq question="Em quais cidades o Pratilera está disponível?">
            No momento, atendemos Capim Branco, Matozinhos e Pedro Leopoldo (MG), e
            estamos sempre expandindo para novas cidades.
          </Faq>
          <Faq question="Como excluo minha conta?">
            Você pode solicitar a exclusão da sua conta e dos seus dados diretamente pelo
            aplicativo ou enviando um e-mail para contato@pratilera.app.br.
          </Faq>
        </div>
      </Section>

      <Section title="Documentos">
        <p>
          Consulte também nossos{' '}
          <Link to="/termos" className="font-semibold underline hover:opacity-70" style={{ color: '#FF7300' }}>
            Termos de Uso
          </Link>
          ,{' '}
          <Link to="/privacidade" className="font-semibold underline hover:opacity-70" style={{ color: '#FF7300' }}>
            Política de Privacidade
          </Link>{' '}
          e{' '}
          <Link to="/cookies" className="font-semibold underline hover:opacity-70" style={{ color: '#FF7300' }}>
            Política de Cookies
          </Link>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}
