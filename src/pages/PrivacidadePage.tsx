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

function DataTable({ rows }: { rows: { base: string; dado: string; finalidade: string }[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border mt-2" style={{ borderColor: '#E8EEF3' }}>
      <table className="w-full text-xs">
        <thead>
          <tr style={{ backgroundColor: '#F3F4F6' }}>
            <th className="text-left px-4 py-3 font-bold" style={{ color: '#1C3245' }}>Dado</th>
            <th className="text-left px-4 py-3 font-bold" style={{ color: '#1C3245' }}>Finalidade</th>
            <th className="text-left px-4 py-3 font-bold" style={{ color: '#1C3245' }}>Base legal (LGPD)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderTop: '1px solid #E8EEF3' }}>
              <td className="px-4 py-3" style={{ color: '#495E70' }}>{r.dado}</td>
              <td className="px-4 py-3" style={{ color: '#495E70' }}>{r.finalidade}</td>
              <td className="px-4 py-3" style={{ color: '#495E70' }}>{r.base}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const CONSUMER_DATA = [
  { dado: 'Nome e e-mail', finalidade: 'Criação e autenticação de conta', base: 'Execução de contrato (Art. 7º, V)' },
  { dado: 'Localização (GPS)', finalidade: 'Exibir negócios e serviços próximos', base: 'Consentimento (Art. 7º, I)' },
  { dado: 'Favoritos e histórico', finalidade: 'Personalização da experiência', base: 'Legítimo interesse (Art. 7º, IX)' },
  { dado: 'Avaliações publicadas', finalidade: 'Exibição pública no perfil do negócio', base: 'Execução de contrato (Art. 7º, V)' },
  { dado: 'Logs e dados de acesso', finalidade: 'Segurança, diagnóstico e melhorias', base: 'Legítimo interesse (Art. 7º, IX)' },
];

const PARTNER_DATA = [
  { dado: 'Dados do negócio (nome, endereço, CNPJ/CPF)', finalidade: 'Criação do perfil público do anunciante', base: 'Execução de contrato (Art. 7º, V)' },
  { dado: 'Dados de pagamento (tokenizados)', finalidade: 'Processamento da assinatura', base: 'Execução de contrato (Art. 7º, V)' },
  { dado: 'Métricas de perfil (visualizações, cliques)', finalidade: 'Dashboard do parceiro', base: 'Legítimo interesse (Art. 7º, IX)' },
];

export default function PrivacidadePage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      subtitle="Como coletamos, usamos e protegemos seus dados pessoais no Pratilera."
      lastUpdated="19 de maio de 2026"
    >

      <div className="mb-10 p-5 rounded-2xl text-sm leading-relaxed" style={{ backgroundColor: '#EDF9F8', borderLeft: '4px solid #06C1B6', color: '#1C3245' }}>
        <strong>Adequação à LGPD:</strong> Esta Política foi elaborada em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD) e demais normas aplicáveis à proteção de dados no Brasil.
      </div>

      <Section title="1. Controlador dos Dados">
        <p>
          O controlador responsável pelo tratamento dos seus dados pessoais é a <strong>Keldra Tecnologia LTDA</strong>, CNPJ 66.274.795/0001-34, com sede no Estado de Minas Gerais, Brasil.
        </p>
        <p>
          Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento dos seus dados, entre em contato pelo e-mail: <a href="mailto:contato@pratilera.app.br" className="font-semibold underline hover:opacity-70" style={{ color: '#FF7300' }}>contato@pratilera.app.br</a>.
        </p>
      </Section>

      <Section title="2. Dados Coletados">
        <p><strong className="font-semibold" style={{ color: '#1C3245' }}>Usuários consumidores:</strong></p>
        <DataTable rows={CONSUMER_DATA} />

        <p className="mt-6"><strong className="font-semibold" style={{ color: '#1C3245' }}>Parceiros e anunciantes:</strong></p>
        <DataTable rows={PARTNER_DATA} />

        <p className="mt-4">
          Coletamos também dados gerados automaticamente pelo dispositivo, como endereço IP, sistema operacional, versão do app e identificadores de sessão — usados exclusivamente para fins técnicos e de segurança.
        </p>
      </Section>

      <Section title="3. Finalidades do Tratamento">
        <p>Utilizamos seus dados pessoais para:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Criar, autenticar e manter sua conta no Pratilera;</li>
          <li>Exibir estabelecimentos, serviços e eventos próximos à sua localização;</li>
          <li>Processar avaliações e gerenciar favoritos;</li>
          <li>Processar pagamentos de assinaturas de parceiros;</li>
          <li>Enviar comunicações transacionais (confirmações, alertas de conta);</li>
          <li>Enviar comunicações de marketing, mediante consentimento prévio;</li>
          <li>Melhorar continuamente a plataforma com base em dados agregados e anonimizados;</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
      </Section>

      <Section title="4. Compartilhamento de Dados">
        <p>Não vendemos seus dados pessoais a terceiros. Podemos compartilhá-los com:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong style={{ color: '#1C3245' }}>Processadores de pagamento</strong> — para viabilizar transações de parceiros, sob padrões internacionais de segurança financeira;</li>
          <li><strong style={{ color: '#1C3245' }}>Provedores de infraestrutura em nuvem</strong> — para hospedagem e processamento dos dados, com cláusulas contratuais de proteção;</li>
          <li><strong style={{ color: '#1C3245' }}>Ferramentas analíticas</strong> — dados anonimizados e agregados para análise de uso da plataforma;</li>
          <li><strong style={{ color: '#1C3245' }}>Autoridades competentes</strong> — quando exigido por lei, ordem judicial ou para proteção de direitos.</li>
        </ul>
        <p>
          Todo compartilhamento é realizado com base em contratos que impõem obrigações de confidencialidade e proteção de dados equivalentes às nossas.
        </p>
      </Section>

      <Section title="5. Transferência Internacional de Dados">
        <p>
          Alguns de nossos provedores de infraestrutura e serviços operam fora do Brasil. Nesses casos, exigimos contratualmente que eles ofereçam o mesmo nível de proteção de dados previsto pela LGPD, garantindo a segurança das suas informações independentemente de onde sejam processadas.
        </p>
      </Section>

      <Section title="6. Retenção dos Dados">
        <p>
          Mantemos seus dados pelo tempo necessário ao cumprimento das finalidades descritas nesta Política ou pelo prazo mínimo exigido pela legislação aplicável (ex.: dados fiscais por 5 anos, conforme Código Tributário Nacional).
        </p>
        <p>
          Após o encerramento da conta, os dados são anonimizados ou excluídos em até 90 dias, ressalvadas as hipóteses de guarda legal obrigatória ou litígio pendente.
        </p>
      </Section>

      <Section title="7. Seus Direitos como Titular">
        <p>Você tem direito a:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong style={{ color: '#1C3245' }}>Confirmar</strong> a existência de tratamento dos seus dados;</li>
          <li><strong style={{ color: '#1C3245' }}>Acessar</strong> os dados que mantemos sobre você;</li>
          <li><strong style={{ color: '#1C3245' }}>Corrigir</strong> dados incompletos, inexatos ou desatualizados;</li>
          <li><strong style={{ color: '#1C3245' }}>Solicitar anonimização, bloqueio ou eliminação</strong> de dados desnecessários ou tratados em desconformidade com a LGPD;</li>
          <li><strong style={{ color: '#1C3245' }}>Portabilidade</strong> dos seus dados a outro fornecedor de serviço;</li>
          <li><strong style={{ color: '#1C3245' }}>Revogar o consentimento</strong> a qualquer tempo, sem prejuízo da licitude do tratamento realizado anteriormente;</li>
          <li><strong style={{ color: '#1C3245' }}>Opor-se</strong> ao tratamento realizado com fundamento em legítimo interesse;</li>
          <li><strong style={{ color: '#1C3245' }}>Peticionar à ANPD</strong> — Autoridade Nacional de Proteção de Dados.</li>
        </ul>
        <p>
          Para exercer seus direitos, envie sua solicitação para <a href="mailto:contato@pratilera.app.br" className="underline hover:opacity-70" style={{ color: '#FF7300' }}>contato@pratilera.app.br</a>. Responderemos em até 15 dias úteis.
        </p>
      </Section>

      <Section title="8. Segurança dos Dados">
        <p>
          Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou divulgação indevida — incluindo criptografia de dados em trânsito, controle de acessos e monitoramento contínuo da plataforma.
        </p>
        <p>
          Em caso de incidente de segurança que possa acarretar risco ou dano relevante ao titular, notificaremos a ANPD e os titulares afetados nos prazos previstos pela LGPD.
        </p>
      </Section>

      <Section title="9. Cookies e Tecnologias Similares">
        <p>
          Utilizamos cookies e tecnologias similares para o funcionamento da plataforma web e para análise de uso. Para mais detalhes, consulte nossa <Link to="/cookies" className="underline hover:opacity-70" style={{ color: '#FF7300' }}>Política de Cookies</Link>.
        </p>
      </Section>

      <Section title="10. Menores de Idade">
        <p>
          O Pratilera não é destinado a menores de 18 anos. Não coletamos intencionalmente dados de menores. Caso identifiquemos que dados de menor foram coletados sem o consentimento dos responsáveis legais, procederemos à exclusão imediata.
        </p>
      </Section>

      <Section title="11. Encarregado de Dados (DPO)">
        <p>
          O encarregado pelo tratamento de dados pessoais da Keldra Tecnologia LTDA pode ser contactado pelo e-mail: <a href="mailto:contato@pratilera.app.br" className="font-semibold underline hover:opacity-70" style={{ color: '#FF7300' }}>contato@pratilera.app.br</a>.
        </p>
      </Section>

      <Section title="12. Alterações desta Política">
        <p>
          Podemos atualizar esta Política a qualquer momento. Mudanças relevantes serão comunicadas por notificação no Aplicativo ou por e-mail com antecedência mínima de 10 dias. O uso continuado da plataforma após a vigência das novas condições implica aceitação das alterações.
        </p>
      </Section>

    </LegalLayout>
  );
}
