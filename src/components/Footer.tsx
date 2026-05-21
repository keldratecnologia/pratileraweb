import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-navy-700 py-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Linha principal */}
        <div className="flex flex-col items-center gap-6">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Pratilera">
            <img
              src="/mini-logo.png"
              alt="Pratilera"
              className="object-contain block"
              style={{ width: '30px', height: '30px', filter: 'brightness(0) invert(1)' }}
            />
            <span className="text-white font-bold text-lg leading-none">Pratilera</span>
          </Link>

          <div className="text-center">
            <p className="text-sm mb-2" style={{ color: '#A3B1BE' }}>
              Para dúvidas ou parcerias, fale com a gente:
            </p>
            <a
              href="mailto:contato@pratilera.app.br"
              className="text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: '#FF7300' }}
            >
              contato@pratilera.app.br
            </a>
          </div>
        </div>

        {/* Linha legal */}
        <div className="mt-8 pt-6 border-t border-navy-700 text-center space-y-2">
          <div className="flex items-center justify-center gap-6 text-sm" style={{ color: '#A3B1BE' }}>
            <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
          <p className="text-xs" style={{ color: '#768798' }}>
            © {year} Keldra Tecnologia LTDA — CNPJ 66.274.795/0001-34. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
