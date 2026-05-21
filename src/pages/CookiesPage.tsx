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
      lastUpdated="19 de maio de 2026"
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
        <p>Classificamos os cookies em duas categorias:</p>

        <div className="mt-4 space-y-6">
          {/* Essenciais */}
          <div>
            <h3 className="text-sm font-bold mb-2" style={{ color: '#1C3245' }}>
              Cookies Estritamente Necessários
            </h3>
            <p className="mb-3">
              Indispensáveis para o funcionamento básico da plataforma. Não podem ser desativados, pois sem eles o site não funciona corretamente. Não coletam informações pessoais identificáveis.
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
                  <CookieRow name="session_id" type="1ª parte" purpose="Manter a sessão autenticada do usuário" duration="Sessão" />
                  <CookieRow name="csrf_token" type="1ª parte" purpose="Proteção contra ataques de falsificação de requisição" duration="Sessão" />
                  <CookieRow name="cookie_consent" type="1ª parte" purpose="Armazenar a preferência de consentimento de cookies" duration="12 meses" />
                </tbody>
              </table>
            </div>
          </div>

          {/* Funcionais */}
          <div>
            <h3 className="text-sm font-bold mb-2" style={{ color: '#1C3245' }}>
              Cookies Funcionais
            </h3>
            <p className="mb-3">
              Melhoram a experiência ao lembrar preferências, como cidade selecionada e configurações de interface. Podem ser desativados, mas isso pode impactar a experiência de uso.
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
                  <CookieRow name="pref_city" type="1ª parte" purpose="Cidade selecionada pelo usuário" duration="30 dias" />
                  <CookieRow name="pref_theme" type="1ª parte" purpose="Preferências de exibição da interface" duration="12 meses" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      <Section title="3. Cookies de Terceiros">
        <p>
          Atualmente, o Pratilera utiliza apenas cookies próprios (1ª parte). Caso no futuro integremos ferramentas de terceiros — como plataformas de análise de uso — esta política será atualizada e você será informado.
        </p>
        <p>
          O Pratilera não utiliza cookies de publicidade comportamental ou de rastreamento para fins de anúncios segmentados.
        </p>
      </Section>

      <Section title="4. Como Gerenciar seus Cookies">
        <p>
          Na primeira visita ao site, você será apresentado a um banner de consentimento que permite aceitar ou recusar os cookies não essenciais. Você pode alterar sua preferência a qualquer momento.
        </p>
        <p>
          Além disso, você pode gerenciar ou excluir cookies diretamente pelo seu navegador:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong style={{ color: '#1C3245' }}>Google Chrome:</strong> Configurações → Privacidade e segurança → Cookies e outros dados do site</li>
          <li><strong style={{ color: '#1C3245' }}>Mozilla Firefox:</strong> Configurações → Privacidade e segurança → Cookies e dados do site</li>
          <li><strong style={{ color: '#1C3245' }}>Safari:</strong> Preferências → Privacidade → Gerenciar dados do site</li>
          <li><strong style={{ color: '#1C3245' }}>Microsoft Edge:</strong> Configurações → Cookies e permissões do site</li>
        </ul>
        <p>
          Atenção: desativar cookies essenciais pode impedir o funcionamento correto do site. Cookies analíticos podem ser desativados sem impacto na experiência principal.
        </p>
        <p>
          Para o Aplicativo móvel, você pode revogar permissões de rastreamento nas configurações do seu dispositivo iOS (Privacidade → Rastreamento) ou Android (Configurações → Privacidade).
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
