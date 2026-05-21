import { Link } from 'react-router-dom';
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

export default function TermosPage() {
  return (
    <LegalLayout
      title="Termos de Uso"
      subtitle="Leia com atenção antes de utilizar o aplicativo ou o site Pratilera."
      lastUpdated="19 de maio de 2026"
    >
      <Section title="1. Aceitação dos Termos">
          <p>
            Ao acessar ou utilizar o aplicativo Pratilera ("Aplicativo") ou o site pratilera.app.br ("Site"), você ("Usuário") concorda integralmente com estes Termos de Uso e com a nossa <Link to="/privacidade" className="underline hover:opacity-70" style={{ color: '#FF7300' }}>Política de Privacidade</Link>. Caso não concorde com qualquer disposição, não utilize nossos serviços.
          </p>
          <p>
            Estes Termos são celebrados entre o Usuário e a <strong>Keldra Tecnologia LTDA</strong>, inscrita no CNPJ sob o nº 66.274.795/0001-34, com sede no Estado de Minas Gerais ("Keldra" ou "nós").
          </p>
        </Section>

        <Section title="2. Descrição do Serviço">
          <p>
            O Pratilera é uma plataforma digital de guia local que permite ao Usuário descobrir estabelecimentos comerciais, prestadores de serviço, eventos e utilidades públicas em sua cidade. O Aplicativo também oferece recursos como avaliações, favoritos, roteamento integrado e contato direto com os anunciantes.
          </p>
          <p>
            A Keldra atua como intermediária tecnológica, não sendo parte das relações comerciais estabelecidas entre Usuários e os negócios anunciados na plataforma. Não nos responsabilizamos pela qualidade dos serviços ou produtos ofertados pelos anunciantes.
          </p>
        </Section>

        <Section title="3. Cadastro e Conta de Usuário">
          <p>
            Para acesso a determinadas funcionalidades, o Usuário deverá criar uma conta fornecendo informações verdadeiras, precisas e atualizadas. O Usuário é responsável pela guarda de suas credenciais de acesso e por todas as atividades realizadas em sua conta.
          </p>
          <p>
            É vedado criar contas em nome de terceiros sem autorização, utilizar informações falsas ou compartilhar o acesso com outros usuários. A Keldra se reserva o direito de suspender ou encerrar contas que violem estas regras.
          </p>
          <p>
            O uso do Pratilera como consumidor é gratuito. Para anunciantes, podem existir planos pagos sujeitos a condições específicas descritas na seção 7.
          </p>
        </Section>

        <Section title="4. Uso Aceitável">
          <p>O Usuário compromete-se a utilizar o Pratilera apenas para fins lícitos. É expressamente proibido:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Publicar conteúdo falso, ofensivo, difamatório, discriminatório ou ilegal;</li>
            <li>Realizar avaliações falsas ou manipuladas sobre negócios;</li>
            <li>Utilizar robôs, scrapers ou qualquer sistema automatizado para acessar a plataforma sem autorização;</li>
            <li>Tentar acessar áreas restritas do sistema ou comprometer sua segurança;</li>
            <li>Reproduzir, copiar ou redistribuir conteúdo da plataforma sem autorização prévia;</li>
            <li>Praticar atos que violem direitos de terceiros ou a legislação brasileira.</li>
          </ul>
          <p>
            O descumprimento acarretará a suspensão imediata da conta e poderá ensejar medidas legais cabíveis.
          </p>
        </Section>

        <Section title="5. Conteúdo do Usuário">
          <p>
            Ao publicar avaliações, fotos, comentários ou qualquer outro conteúdo na plataforma, o Usuário concede à Keldra uma licença não exclusiva, gratuita, sublicenciável e transferível para usar, reproduzir, exibir e distribuir esse conteúdo nos serviços do Pratilera.
          </p>
          <p>
            O Usuário declara que possui todos os direitos necessários sobre o conteúdo que publica e que este não viola direitos de terceiros, leis de direitos autorais, privacidade ou qualquer outra legislação aplicável.
          </p>
          <p>
            A Keldra pode remover qualquer conteúdo que, a seu critério, viole estes Termos ou seja considerado inadequado, sem necessidade de notificação prévia.
          </p>
        </Section>

        <Section title="6. Propriedade Intelectual">
          <p>
            O Aplicativo, o Site e todo o seu conteúdo — incluindo, sem limitação, logotipos, marcas, design, código-fonte, textos e imagens — são de propriedade exclusiva da Keldra Tecnologia LTDA ou de seus licenciadores e estão protegidos pela legislação brasileira de propriedade intelectual.
          </p>
          <p>
            Fica vedada qualquer reprodução, modificação, distribuição ou uso comercial dos elementos da plataforma sem autorização expressa e por escrito da Keldra.
          </p>
        </Section>

        <Section title="7. Parceiros e Planos de Assinatura">
          <p>
            Negócios, profissionais autônomos e organizadores de eventos que desejam anunciar no Pratilera ("Parceiros") devem aceitar os termos específicos de parceria disponíveis no Aplicativo. Órgãos públicos possuem visibilidade gratuita na plataforma.
          </p>
          <p>
            Para os demais Parceiros, a contratação se dá por meio de planos de assinatura mensal. Os valores, condições de pagamento, cancelamento e reembolso são informados no momento da contratação. O cancelamento da assinatura encerra a exibição do perfil ao término do período pago.
          </p>
          <p>
            A Keldra pode alterar os planos e preços mediante comunicação prévia de 30 (trinta) dias. Não há reembolso proporcional em caso de cancelamento antecipado, salvo previsão legal contrária.
          </p>
        </Section>

        <Section title="8. Limitação de Responsabilidade">
          <p>
            O Pratilera é disponibilizado no estado em que se encontra ("as is"). A Keldra não garante disponibilidade ininterrupta, precisão das informações publicadas pelos Parceiros, nem a qualidade dos serviços ou produtos anunciados.
          </p>
          <p>
            Na máxima extensão permitida pela legislação aplicável, a Keldra não será responsável por danos indiretos, incidentais, especiais ou consequentes decorrentes do uso ou da impossibilidade de uso da plataforma, inclusive perdas financeiras, de dados ou de negócio.
          </p>
        </Section>

        <Section title="9. Vigência e Rescisão">
          <p>
            Estes Termos vigoram por prazo indeterminado a partir do primeiro acesso do Usuário à plataforma. O Usuário pode encerrar sua conta a qualquer momento pelo Aplicativo. A Keldra pode suspender ou encerrar o acesso de qualquer Usuário que viole estes Termos, sem aviso prévio.
          </p>
        </Section>

        <Section title="10. Modificações dos Termos">
          <p>
            A Keldra pode atualizar estes Termos a qualquer tempo. Alterações relevantes serão comunicadas por notificação no Aplicativo ou por e-mail. O uso continuado da plataforma após a comunicação implica aceitação das novas condições.
          </p>
        </Section>

        <Section title="11. Lei Aplicável e Foro">
          <p>
            Estes Termos são regidos pelas leis da República Federativa do Brasil. Para dirimir quaisquer controvérsias decorrentes deste instrumento, fica eleito o foro da Comarca de Belo Horizonte, Estado de Minas Gerais, com exclusão de qualquer outro, por mais privilegiado que seja.
          </p>
        </Section>

        <Section title="12. Contato">
          <p>
            Para dúvidas, solicitações ou comunicações relacionadas a estes Termos, entre em contato pelo e-mail: <a href="mailto:contato@pratilera.app.br" className="font-semibold underline hover:opacity-70" style={{ color: '#FF7300' }}>contato@pratilera.app.br</a>.
          </p>
        </Section>

    </LegalLayout>
  );
}
