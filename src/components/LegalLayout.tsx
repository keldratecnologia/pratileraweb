import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { definirPagina } from '../lib/seo';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  title: string;
  subtitle: string;
  lastUpdated: string;
  /** Linha acima do título. Suporte e exclusão de conta não são documentos legais. */
  rotulo?: string;
  children: ReactNode;
}

export default function LegalLayout({ title, subtitle, lastUpdated, rotulo = 'Documentos legais', children }: Props) {
  const { pathname } = useLocation();
  useEffect(() => {
    definirPagina({ titulo: `${title} | Pratilera`, descricao: subtitle, caminho: pathname });
  }, [title, subtitle, pathname]);

  return (
    <div className="min-h-screen bg-white font-calibri overflow-x-hidden">
      <Navbar />

      {/* Header */}
      <section
        className="pt-32 pb-14 px-6"
        style={{ backgroundColor: '#1C3245' }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold mb-8 opacity-60 hover:opacity-100 transition-opacity"
            style={{ color: '#FFFFFF' }}
          >
            <ArrowLeft size={15} />
            Voltar ao início
          </Link>
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#FF7300' }}>
            {rotulo}
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
          >
            {title}
          </h1>
          <p className="text-base" style={{ color: '#A3B1BE' }}>{subtitle}</p>
          <p className="text-xs mt-4" style={{ color: '#768798' }}>Última atualização: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}
