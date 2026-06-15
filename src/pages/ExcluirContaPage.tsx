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

export default function ExcluirContaPage() {
  return (
    <LegalLayout
      title="Exclusão de Conta e Dados"
      subtitle="Como excluir sua conta do Pratilera e o que acontece com os seus dados."
      lastUpdated="15 de junho de 2026"
    >
      <Section title="Sobre">
        <p>
          O <strong>Pratilera</strong>, operado pela <strong>Keldra Tecnologia LTDA</strong>
          {' '}(CNPJ 66.274.795/0001-34), permite que você exclua sua conta e seus dados a
          qualquer momento, diretamente pelo aplicativo ou mediante solicitação por e-mail.
        </p>
      </Section>

      <Section title="Como excluir pelo aplicativo">
        <p>O jeito mais rápido é pelo próprio app:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Abra o aplicativo Pratilera e faça login.</li>
          <li>Toque na aba <strong>Perfil</strong>.</li>
          <li>Toque em <strong>“Excluir minha conta”</strong>.</li>
          <li>Confirme em <strong>“Excluir permanentemente”</strong>.</li>
        </ol>
        <p>
          Por segurança, pode ser solicitado que você entre novamente antes de concluir a
          exclusão. A ação é <strong>irreversível</strong>.
        </p>
      </Section>

      <Section title="Como excluir por e-mail">
        <p>
          Se preferir, envie um e-mail para{' '}
          <a href="mailto:contato@pratilera.app.br" className="font-semibold underline hover:opacity-70" style={{ color: '#FF7300' }}>
            contato@pratilera.app.br
          </a>{' '}
          a partir do endereço cadastrado na sua conta, com o assunto
          “Exclusão de conta”. Processamos a solicitação em até 15 dias úteis.
        </p>
      </Section>

      <Section title="Quais dados são excluídos">
        <ul className="list-disc pl-5 space-y-1">
          <li>Sua conta e dados pessoais (nome, e-mail, telefone);</li>
          <li>Documentos enviados (CPF/CNPJ);</li>
          <li>Avaliações que você publicou;</li>
          <li>Imagens enviadas;</li>
          <li>
            Negócios cadastrados por você são <strong>anonimizados</strong> (desvinculados
            da sua identidade).
          </li>
        </ul>
      </Section>

      <Section title="Quais dados são mantidos e por quanto tempo">
        <p>
          Após a exclusão, a maior parte dos dados é anonimizada ou eliminada em até{' '}
          <strong>90 dias</strong>. Algumas informações podem ser retidas por período
          adicional quando exigido por lei:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Dados fiscais/financeiros:</strong> mantidos por até <strong>5 anos</strong>,
            conforme o Código Tributário Nacional;
          </li>
          <li>
            <strong>Histórico de avaliações de estabelecimentos:</strong> pode ser mantido de
            forma anonimizada (sem vínculo com você), para preservar a integridade das notas
            públicas dos negócios.
          </li>
        </ul>
        <p>
          Para mais detalhes sobre o tratamento dos seus dados, consulte nossa{' '}
          <a href="/privacidade" className="font-semibold underline hover:opacity-70" style={{ color: '#FF7300' }}>
            Política de Privacidade
          </a>.
        </p>
      </Section>
    </LegalLayout>
  );
}
