/**
 * Título, descrição e endereço canônico de cada página.
 *
 * O site é uma SPA: sem isto, todas as páginas herdavam o título do
 * index.html e o Google via Termos, Planos e Suporte com o mesmo nome.
 * O canônico também é por página — fixo no index.html, as internas se
 * declarariam cópia da página inicial.
 */
const SITE = 'https://pratilera.app.br';

function meta(attr: 'name' | 'property', chave: string, valor: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${chave}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, chave);
    document.head.appendChild(el);
  }
  el.content = valor;
}

export function definirPagina({ titulo, descricao, caminho, naoIndexar = false }: {
  titulo: string;
  descricao?: string;
  caminho?: string;
  naoIndexar?: boolean;
}) {
  document.title = titulo;
  meta('property', 'og:title', titulo);
  if (descricao) {
    meta('name', 'description', descricao);
    meta('property', 'og:description', descricao);
  }
  let canonico = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (caminho !== undefined && !naoIndexar) {
    if (!canonico) {
      canonico = document.createElement('link');
      canonico.rel = 'canonical';
      document.head.appendChild(canonico);
    }
    canonico.href = SITE + caminho;
    meta('property', 'og:url', SITE + caminho);
  } else {
    canonico?.remove();
  }
  meta('name', 'robots', naoIndexar ? 'noindex' : 'index, follow');
}
