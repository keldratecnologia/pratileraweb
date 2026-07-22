// Vercel Serverless Function — gera a página com Open Graph correto (foto,
// nome, descrição) quando um negócio é compartilhado. Busca por SLUG (nome
// legível na URL, ex.: pizza-sumo) via query estruturada do Firestore REST —
// não é mais busca direta por ID (o ID some da URL de propósito).
//
// Leitura pública (mesma regra que já vale pro app: negócio ativo é público),
// só com a API key, sem precisar de service account/Admin SDK.

const PROJECT_ID = 'pratilera-prod';
const API_KEY = 'AIzaSyCLCgSCMfGVzLAUYMGVa1zHRtTfTWSh1oo';
const FALLBACK_IMAGE = 'https://pratilera.app.br/logo-site.png';

function fsValue(f: any): any {
  if (!f) return undefined;
  if ('stringValue' in f) return f.stringValue;
  if ('booleanValue' in f) return f.booleanValue;
  if ('integerValue' in f) return Number(f.integerValue);
  if ('doubleValue' in f) return f.doubleValue;
  if ('mapValue' in f) return fsMap(f.mapValue?.fields);
  if ('arrayValue' in f) return (f.arrayValue?.values || []).map(fsValue);
  return undefined;
}
function fsMap(fields: any): Record<string, any> {
  const out: Record<string, any> = {};
  for (const k in fields || {}) out[k] = fsValue(fields[k]);
  return out;
}
function esc(s: string): string {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function findBySlug(slug: string): Promise<{ id: string; fields: any } | null> {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents:runQuery?key=${API_KEY}`;
  // Firestore exige que o filtro de `isActive` esteja NA PRÓPRIA query pra
  // validar a regra de leitura pública em consultas de lista (get de doc
  // único aceitaria só isActive implícito, list/query não).
  const body = {
    structuredQuery: {
      from: [{ collectionId: 'businesses' }],
      where: {
        compositeFilter: {
          op: 'AND',
          filters: [
            { fieldFilter: { field: { fieldPath: 'slug' }, op: 'EQUAL', value: { stringValue: slug } } },
            { fieldFilter: { field: { fieldPath: 'isActive' }, op: 'EQUAL', value: { booleanValue: true } } },
          ],
        },
      },
      limit: 1,
    },
  };
  const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (!r.ok) return null;
  const rows = await r.json();
  const hit = (rows || []).find((row: any) => row.document);
  if (!hit) return null;
  const name: string = hit.document.name; // "projects/.../documents/businesses/{id}"
  const id = name.split('/').pop() as string;
  return { id, fields: hit.document.fields };
}

export default async function handler(req: any, res: any) {
  const slug = (req.query?.slug || '').toString();

  const notFoundHtml = `<!doctype html><html><head><meta charset="utf-8"><title>Pratilera</title>
    <meta http-equiv="refresh" content="0; url=https://pratilera.app.br/baixar" />
    </head><body>Redirecionando…</body></html>`;

  if (!slug) { res.status(404).setHeader('Content-Type', 'text/html; charset=utf-8').send(notFoundHtml); return; }

  try {
    const hit = await findBySlug(slug);
    if (!hit) { res.status(404).setHeader('Content-Type', 'text/html; charset=utf-8').send(notFoundHtml); return; }
    const b = fsMap(hit.fields);

    if (!b.isActive) { res.status(404).setHeader('Content-Type', 'text/html; charset=utf-8').send(notFoundHtml); return; }

    // Mesma regra de negócio do app: foto só aparece se pagou ou é serviço
    // público (ver src/utils/businessPlan.ts). Sem isso, negócio grátis
    // vazaria a foto aqui mesmo escondida no app.
    const canShowPhoto = b.planActive === true || b.isPublicService === true;
    const images = Array.isArray(b.images) ? b.images : [];
    const image = (canShowPhoto && images[0]) || FALLBACK_IMAGE;

    const name = b.name || 'Pratilera';
    const description = b.description || 'Descubra comércios, prestadores e eventos da sua cidade.';
    const address = b.hideAddress ? '' : [b.address?.street, b.address?.number, b.address?.neighborhood, b.address?.city].filter(Boolean).join(', ');
    const pageUrl = `https://pratilera.app.br/business/${slug}`;

    const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<title>${esc(name)} — Pratilera</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta property="og:type" content="business.business" />
<meta property="og:title" content="${esc(name)} — Pratilera" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:image" content="${esc(image)}" />
<meta property="og:url" content="${esc(pageUrl)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(name)} — Pratilera" />
<meta name="twitter:description" content="${esc(description)}" />
<meta name="twitter:image" content="${esc(image)}" />
<meta http-equiv="refresh" content="0; url=pratilera://business/${esc(slug)}" />
<style>
  body{font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:480px;margin:40px auto;padding:0 20px;text-align:center;color:#1a1a1a}
  img{width:100%;max-width:320px;border-radius:16px;margin-bottom:16px}
  h1{font-size:20px;margin-bottom:6px}
  p{color:#555;font-size:14px}
  a.btn{display:inline-block;margin-top:16px;padding:12px 24px;background:#E4572E;color:#fff;border-radius:10px;text-decoration:none;font-weight:600}
</style>
</head>
<body>
  <img src="${esc(image)}" alt="${esc(name)}" />
  <h1>${esc(name)}</h1>
  <p>${esc(description)}</p>
  ${address ? `<p>📍 ${esc(address)}</p>` : ''}
  <a class="btn" href="https://pratilera.app.br/baixar">Abrir no app Pratilera</a>
</body>
</html>`;

    res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8').send(html);
  } catch (e) {
    res.status(500).setHeader('Content-Type', 'text/html; charset=utf-8').send(notFoundHtml);
  }
}
