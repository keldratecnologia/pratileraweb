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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:contato@pratilera.app.br"
                className="text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#FF7300' }}
              >
                contato@pratilera.app.br
              </a>
              <span className="hidden sm:inline text-sm" style={{ color: '#A3B1BE' }}>·</span>
              <a
                href="https://wa.me/5531995506980"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#25D366' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.737a.75.75 0 0 0 .914.914l5.892-1.471A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.17-1.4l-.371-.22-3.847.96.977-3.772-.242-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp
              </a>
            </div>
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
