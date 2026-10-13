/**
 * Consentimento de cookies e carregamento do Google Tag Manager.
 *
 * O Tag Manager é por onde a agência de marketing coloca as tags (Google
 * Analytics, Google Ads, Pixel do Meta) sem mexer no código. Ele só é
 * carregado DEPOIS que a pessoa aceita no aviso de cookies — antes disso
 * nenhuma ferramenta de terceiro roda no site (LGPD; o Meta também exige).
 *
 * Sem GTM_ID o aviso nem aparece: não faz sentido pedir consentimento para
 * algo que o site não usa.
 */

/** ID do contêiner do Google Tag Manager (formato GTM-XXXXXXX). */
export const GTM_ID = 'GTM-P8QP2RCK';

const CHAVE = 'cookie_consent';
export const EVENTO_REABRIR = 'pratilera:preferencias-cookies';

export type Escolha = 'aceito' | 'recusado';

declare global {
  interface Window { dataLayer?: unknown[] }
}

export function lerEscolha(): Escolha | null {
  try {
    const v = localStorage.getItem(CHAVE);
    return v === 'aceito' || v === 'recusado' ? v : null;
  } catch {
    return null;
  }
}

let carregado = false;

export function carregarGtm() {
  if (!GTM_ID || carregado) return;
  carregado = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

export function salvarEscolha(escolha: Escolha) {
  const antes = lerEscolha();
  try { localStorage.setItem(CHAVE, escolha); } catch { /* navegador sem armazenamento: vale só nesta visita */ }
  if (escolha === 'aceito') {
    carregarGtm();
  } else if (antes === 'aceito' && carregado) {
    /* As tags já rodando não têm como ser "descarregadas": recarregar a
       página é o que garante que elas param de vez. */
    window.location.reload();
  }
}

/** Reabre o aviso para a pessoa mudar a escolha (link no rodapé). */
export function reabrirPreferencias() {
  window.dispatchEvent(new Event(EVENTO_REABRIR));
}
