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

function CookieRow({ name, type, purpose, duration }: { name: string; type: string; purpose: string; duration: string }) {
  return (
    <tr style={{ borderTop: '1px solid #E8EEF3' }}>
      <td className="px-4 py-3 font-mono text-xs" style={{ color: '#1C3245' }}>{name}</td>
      <td className="px-4 py-3 text-xs" style={{ color: '#495E70' }}>{type}</td>
      <td className="px-4 py-3 text-xs" style={{ color: '#495E70' }}>{purpose}</td>
      <td className="px-4 py-3 text-xs" style={{ color: '#495E70' }}>{duration}</td>
    </tr>
  );
}

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Política de Cookies"
      subtitle="Como utilizamos cookies e tecnologias similares no site e no aplicativo Pratilera."
      lastUpdated="13 de outubro de 2026"
    >

      <Section title="1. O que são Cookies?">
        <p>
          Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você acessa um site. Eles permitem que a plataforma reconheça seu dispositivo em visitas futuras, mantenha suas preferências e analise como o serviço é utilizado.
        </p>
        <p>
          Além de cookies tradicionais, podemos usar tecnologias similares como <em>localStorage</em>, <em>sessionStorage</em> e identificadores de dispositivo no Aplicativo móvel, que funcionam de maneira análoga para as mesmas finalidades.
        </p>
      </Section>

      <Section title="2. Cookies que Utilizamos">
        <p>Classificamos os cookies do site em duas categorias:</p>

        <div className="mt-4 space-y-6">
          {/* Necessários */}
          <div>
            <h3 className="text-sm font-bold mb-2" style={{ color: '#1C3245' }}>
              Necessários
            </h3>
            <p className="mb-3">
              Guardam a sua escolha sobre cookies, para o aviso não aparecer em toda visita. Não identificam você e não podem ser desativados.
            </p>
            <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#E8EEF3' }}>
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: '#F3F4F6' }}>
                    <th className="text-left px-4 py-3 text-xs font-bold" style={{ color: '#1C3245' }}>Cookie</th>
                    <th className="text-left px-4 py-3 text-xs font-bold" style={{ color: '#1C3245' }}>Tipo</th>
                    <th className="text-left px-4 py-3 text-xs font-bold" style={{ color: '#1C3245' }}>Finalidade</th>
                    <th className="text-left px-4 py-3 text-xs font-bold" style={{ color: '#1C3245' }}>Duração</th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow name="cookie_consent" type="1ª parte" purpose="Guardar se você aceitou ou recusou os cookies de medição e publicidade" duration="Até você mudar a escolha ou limpar os dados do navegador" />
                </tbody>
              </table>
            </div>
          </div>

          {/* Medição e publicidade */}
          <div>
            <h3 className="text-sm font-bold mb-2" style={{ color: '#1C3245' }}>
              Medição e publicidade (só com o seu consentimento)
            </h3>
            <p className="mb-3">
              Carregados pelo Google Tag Manager apenas depois que você clica em "Aceitar". Servem para contar as visitas, entender como o site é usado e medir o resultado dos anúncios do Pratilera. Conforme as campanhas ativas, podem ser usados:
            </p>
            <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#E8EEF3' }}>
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: '#F3F4F6' }}>
                    <th className="text-left px-4 py-3 text-xs font-bold" style={{ color: '#1C3245' }}>Cookie</th>
                    <th className="text-left px-4 py-3 text-xs font-bold" style={{ color: '#1C3245' }}>Tipo</th>
                    <th className="text-left px-4 py-3 text-xs font-bold" style={{ color: '#1C3245' }}>Finalidade</th>
                    <th className="text-left px-4 py-3 text-xs font-bold" style={{ color: '#1C3245' }}>Duração</th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow name="_ga, _ga_*" type="3ª parte (Google Analytics)" purpose="Contar visitas e entender como o site é usado" duration="Até 2 anos" />
                  <CookieRow name="_gcl_au" type="3ª parte (Google Ads)" purpose="Medir o resultado dos anúncios do Pratilera no Google" duration="90 dias" />
                  <CookieRow name="_fbp" type="3ª parte (Meta)" purpose="Medir os anúncios do Pratilera no Facebook e no Instagram e mostrá-los a quem já visitou o site" duration="90 dias" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      <Section title="3. Cookies de Terceiros">
        <p>
          Quando você aceita, o Google e o Meta podem receber dados da sua navegação no site, como as páginas visitadas, o tipo de dispositivo e os identificadores desses cookies. Eles tratam esses dados conforme as próprias políticas: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:opacity-70" style={{ color: '#FF7300' }}>Google</a> e <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:opacity-70" style={{ color: '#FF7300' }}>Meta</a>.
        </p>
        <p>
          Se você recusar, nenhuma dessas ferramentas é carregada. O Pratilera não vende dados pessoais.
        </p>
      </Section>

      <Section title="4. Como Gerenciar seus Cookies">
        <p>
          Na primeira visita, o site mostra um aviso para você aceitar ou recusar os cookies de medição e publicidade. Para mudar a escolha depois, use o link "Preferências de cookies" no rodapé do site.
        </p>
        <p>
          Você também pode apagar ou bloquear cookies pelo navegador:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong style={{ color: '#1C3245' }}>Google Chrome:</strong> Configurações → Privacidade e segurança → Cookies e outros dados do site</li>
          <li><strong style={{ color: '#1C3245' }}>Mozilla Firefox:</strong> Configurações → Privacidade e segurança → Cookies e dados do site</li>
          <li><strong style={{ color: '#1C3245' }}>Safari:</strong> Preferências → Privacidade → Gerenciar dados do site</li>
          <li><strong style={{ color: '#1C3245' }}>Microsoft Edge:</strong> Configurações → Cookies e permissões do site</li>
        </ul>
        <p>
          O aplicativo Pratilera não usa cookies. Ele usa o Google Analytics para Firebase para estatísticas de uso do app, como descrito na Política de Privacidade, e não usa dados de navegação para publicidade.
        </p>
      </Section>

      <Section title="5. Alterações desta Política">
        <p>
          Esta Política pode ser atualizada para refletir mudanças na plataforma, na legislação ou nas práticas de uso de cookies. Alterações relevantes serão comunicadas pelo site. A data de última atualização está sempre indicada no topo desta página.
        </p>
      </Section>

      <Section title="6. Contato">
        <p>
          Para dúvidas sobre o uso de cookies no Pratilera, entre em contato: <a href="mailto:contato@pratilera.app.br" className="font-semibold underline hover:opacity-70" style={{ color: '#FF7300' }}>contato@pratilera.app.br</a>.
        </p>
      </Section>

    </LegalLayout>
  );
}
