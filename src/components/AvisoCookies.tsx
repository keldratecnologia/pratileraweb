import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GTM_ID, EVENTO_REABRIR, carregarGtm, lerEscolha, salvarEscolha, type Escolha } from '../lib/consentimento';

/* Aviso de cookies. "Recusar" tem o mesmo peso visual de "Aceitar": a LGPD
   pede que recusar seja tão fácil quanto aceitar. */
export default function AvisoCookies() {
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    if (!GTM_ID) return;
    const escolha = lerEscolha();
    if (escolha === 'aceito') carregarGtm();
    if (!escolha) setAberto(true);
    const reabrir = () => setAberto(true);
    window.addEventListener(EVENTO_REABRIR, reabrir);
    return () => window.removeEventListener(EVENTO_REABRIR, reabrir);
  }, []);

  if (!aberto) return null;

  const escolher = (e: Escolha) => {
    salvarEscolha(e);
    setAberto(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="aviso-cookies-titulo"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 pointer-events-none"
    >
      <div
        className="pointer-events-auto mx-auto max-w-3xl rounded-2xl bg-white p-5 sm:p-6 shadow-2xl border flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
        style={{ borderColor: '#E8EEF3' }}
      >
        <div className="flex-1 text-sm leading-relaxed" style={{ color: '#495E70' }}>
          <p id="aviso-cookies-titulo" className="font-bold mb-1" style={{ color: '#1C3245' }}>
            Cookies no site
          </p>
          Utilizamos cookies para melhorar a sua experiência, entender como o site é usado e medir nossos anúncios.{' '}
          <Link to="/cookies" className="font-semibold underline" style={{ color: '#FF7300' }}>
            Saiba mais
          </Link>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => escolher('recusado')}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-sm font-semibold border-2 cursor-pointer"
            style={{ borderColor: '#1C3245', color: '#1C3245' }}
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => escolher('aceito')}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-sm font-semibold border-2 cursor-pointer"
            style={{ borderColor: '#1C3245', backgroundColor: '#1C3245', color: '#FFFFFF' }}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
