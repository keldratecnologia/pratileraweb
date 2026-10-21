import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { definirPagina } from '../lib/seo';

/* Endereço que não existe. Sem esta página a Vercel entregava o site, nenhuma
   rota casava e a pessoa via uma tela em branco, sem menu e sem saída. */
export default function NaoEncontradaPage() {
  useEffect(() => {
    definirPagina({ titulo: 'Página não encontrada | Pratilera', naoIndexar: true });
  }, []);

  return (
    <div className="min-h-screen bg-bg font-calibri overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 pt-36 pb-24" style={{ backgroundColor: '#FF7300' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold mb-3" style={{ color: '#1C3245', opacity: 0.7 }}>Erro 404</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5" style={{ color: '#1C3245', letterSpacing: '-0.035em' }}>
            Essa página não está na prateleira.
          </h1>
          <p className="text-lg mb-9" style={{ color: '#2B3B4A' }}>
            O endereço pode ter mudado ou estar digitado errado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-white font-bold"
              style={{ backgroundColor: '#1C3245' }}
            >
              Voltar para o início
            </Link>
            <Link
              to="/planos-e-precos"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold border-2"
              style={{ borderColor: '#1C3245', color: '#1C3245' }}
            >
              Ver planos e preços
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
