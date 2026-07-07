import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, User, Store, Mic, Landmark } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PRICING_PLANS = [
  {
    icon: User,
    type: 'Profissional Autônomo',
    subtitle: 'CPF · MEI, freelancers e autônomos',
    pix: 27,
    card: 38,
  },
  {
    icon: Store,
    type: 'Estabelecimento',
    subtitle: 'CNPJ · comércios e empresas',
    pix: 57,
    card: 68,
  },
  {
    icon: Mic,
    type: 'Evento / Show',
    subtitle: 'Festas, feiras e atrações locais',
    pix: 87,
    card: 98,
    footnote: true,
  },
];

const INCLUDED = [
  'Perfil profissional com fotos, descrição e horários',
  'Botão de contato direto via WhatsApp',
  'Localização integrada com Google Maps',
  'Sistema de avaliações e reputação',
  'Dashboard com métricas de visitas e leads',
  'Resposta pública às avaliações dos clientes',
];

export default function PlanosPrecosPage() {
  return (
    <div className="min-h-screen bg-bg font-calibri overflow-x-hidden">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 px-6 text-center overflow-hidden"
        style={{ backgroundColor: '#FF7300' }}
      >
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #1C3245 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />

        <Link
          to="/"
          className="absolute top-20 left-6 flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity"
          style={{ color: '#1C3245', fontFamily: 'var(--font-gotham)' }}
        >
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-xl mx-auto"
        >
          <span
            className="text-xs font-bold tracking-widest uppercase block mb-4"
            style={{ color: '#1C3245', fontFamily: 'var(--font-gotham)', opacity: 0.7 }}
          >
            Anuncie no Pratilera
          </span>
          <h1
            className="text-3xl sm:text-4xl mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-gotham)', color: '#1C3245', fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Planos e Preços
          </h1>
          <p className="text-base leading-relaxed" style={{ color: '#2B3B4A' }}>
            Simples, transparente e sem surpresas. Cancele quando quiser.
          </p>
        </motion.div>

      </section>

      {/* ── PLANOS ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-bg">
        <div className="max-w-4xl mx-auto">

          {/* Cards pagos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
            {PRICING_PLANS.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.type}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(28,50,69,0.10)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-7 border flex flex-col gap-4 items-center text-center"
                  style={{
                    borderColor: '#E8EEF3',
                    borderTopWidth: '3px',
                    borderTopColor: '#FF7300',
                    boxShadow: '0 2px 8px rgba(28,50,69,0.06)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#FFF4EC' }}
                  >
                    <Icon size={20} color="#FF7300" />
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold mb-1"
                      style={{ fontFamily: 'var(--font-gotham)', color: '#1C3245' }}
                    >
                      {plan.type}
                    </h3>
                    <p className="text-sm" style={{ color: '#495E70' }}>
                      {plan.subtitle}
                    </p>
                  </div>
                  <div className="mt-auto pt-2" style={{ borderTop: '1px solid #F3F4F6' }}>
                    <div className="flex items-baseline justify-center gap-1 mb-1">
                      <span
                        className="text-3xl font-bold"
                        style={{ color: '#FF7300', fontFamily: 'var(--font-gotham)' }}
                      >
                        R${plan.pix}{plan.footnote && <sup style={{ fontSize: '14px' }}>*</sup>}
                      </span>
                      <span className="text-sm" style={{ color: '#495E70' }}>/mês</span>
                    </div>
                    <p className="text-xs" style={{ color: '#9CA3AF' }}>
                      no Pix · R${plan.card}/mês no cartão
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Serviço público — gratuito */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(28,50,69,0.10)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="bg-white rounded-2xl p-7 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left"
            style={{
              borderTop: '3px solid #06C1B6',
              border: '1px solid #E8EEF3',
              borderTopWidth: '3px',
              borderTopColor: '#06C1B6',
              boxShadow: '0 2px 8px rgba(28,50,69,0.06)',
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#06C1B615' }}
            >
              <Landmark size={20} color="#06C1B6" />
            </div>
            <div className="flex-1">
              <h3
                className="text-sm font-bold"
                style={{ fontFamily: 'var(--font-gotham)', color: '#1C3245' }}
              >
                Órgãos Públicos
              </h3>
              <p className="text-xs mt-0.5 leading-relaxed" style={{ color: '#495E70' }}>
                Prefeituras, Hospitais, Escolas e demais órgãos públicos — visibilidade gratuita para auxiliar a população.
              </p>
            </div>
            <span
              className="text-base font-bold flex-shrink-0"
              style={{ color: '#06C1B6', fontFamily: 'var(--font-gotham)' }}
            >
              Gratuito
            </span>
          </motion.div>

          <p className="text-center text-xs mt-5" style={{ color: '#9CA3AF' }}>
            Assinatura mensal recorrente, sem fidelidade. Cancele quando quiser.
          </p>
          <p className="text-center text-xs mt-2" style={{ color: '#9CA3AF' }}>
            * Eventos com duração superior a 30 dias são cobrados proporcionalmente aos dias restantes.
          </p>
        </div>
      </section>

      {/* ── O QUE ESTÁ INCLUSO ───────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-xl mx-auto text-center">
          <span
            className="text-xs font-bold tracking-widest uppercase block mb-3"
            style={{ color: '#FF7300', fontFamily: 'var(--font-gotham)' }}
          >
            Todos os planos incluem
          </span>
          <h2
            className="text-xl sm:text-2xl font-bold mb-8"
            style={{ fontFamily: 'var(--font-gotham)', color: '#1C3245' }}
          >
            Tudo que você precisa, desde o primeiro dia
          </h2>
          <div className="inline-flex flex-col gap-3 text-left mx-auto">
            {INCLUDED.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <CheckCircle size={18} color="#FF7300" className="flex-shrink-0" />
                <span className="text-sm" style={{ color: '#495E70' }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CTA — mesmo padrão da homepage ──────────────────────── */}
      <section
        className="py-24 px-6 text-center"
        style={{ backgroundColor: '#FF7300' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <img
            src="/pratilera-icon.png"
            alt="Ícone do app Pratilera"
            className="mx-auto mb-6 shadow-xl block rounded-3xl"
            style={{ width: '96px', height: '96px', objectFit: 'contain' }}
          />
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-gotham)', color: '#1C3245' }}
          >
            Comece a anunciar hoje
          </h2>
          <p className="text-base mb-10" style={{ color: '#2B3B4A', opacity: 0.85 }}>
            Disponível para iOS e Android.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/br/app/id6776366689"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baixar na App Store"
              className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-transform"
              style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', minWidth: '180px' }}
            >
              <svg viewBox="0 0 24 24" className="flex-shrink-0" style={{ width: '28px', height: '28px', fill: '#1C3245' }}>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-left">
                <span className="block text-xs font-medium" style={{ color: '#768798' }}>Baixar na</span>
                <span className="block text-base font-bold" style={{ color: '#1C3245' }}>App Store</span>
              </span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.pratileraapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baixar na Play Store"
              className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-transform"
              style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', minWidth: '180px' }}
            >
              <svg viewBox="0 0 24 24" className="flex-shrink-0" style={{ width: '28px', height: '28px', fill: '#1C3245' }}>
                <path d="M3.18 23.76c.37.2.8.22 1.2.04l13.11-7.44-2.83-2.83-11.48 10.23zm-1.46-20.5C1.48 3.68 1.5 4.2 1.75 4.64L13.2 12 1.72 19.36c-.25.44-.27.96-.02 1.38zM22.56 10.24l-2.56-1.45L16.88 12l3.12 3.12 2.56-1.45c.73-.41.73-1.5 0-1.91zM4.38.2C3.98.02 3.55.04 3.18.25L14.66 12 3.18 23.75c.37.21.8.23 1.2.05L19.12 13.5a1 1 0 000-1.75L4.38.2z"/>
              </svg>
              <span className="text-left">
                <span className="block text-xs font-medium" style={{ color: '#768798' }}>Baixar na</span>
                <span className="block text-base font-bold" style={{ color: '#1C3245' }}>Play Store</span>
              </span>
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
