import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  MapPin, Star, Heart, Store, MessageSquare, BarChart2,
  CalendarDays, LayoutGrid,
  CreditCard,
  ChevronRight, Search,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ─── Dados do app ────────────────────────────────────────────────────────── */


const CONSUMER_FEATURES = [
  {
    icon: Search,
    title: 'Encontre tudo perto de você',
    desc: 'Restaurantes, salões, clínicas, prestadores de serviço, eventos e muito mais, tudo organizado por categoria e localização.',
    color: '#FF7300',
    bg: '#FFF4EC',
  },
  {
    icon: CalendarDays,
    title: 'Descubra eventos locais',
    desc: 'Shows, festas, feiras, atrações da sua cidade e proximidades. Fique por dentro do que está acontecendo.',
    color: '#8B5CF6',
    bg: '#F5F0FF',
  },
  {
    icon: Star,
    title: 'Avaliações reais',
    desc: 'Notas e comentários de clientes reais para ajudar na sua escolha.',
    color: '#F59E0B',
    bg: '#FFFBEB',
  },
  {
    icon: Heart,
    title: 'Salve seus favoritos',
    desc: 'Guarde estabelecimentos e profissionais que você ama e acesse rapidamente quando precisar.',
    color: '#EC4899',
    bg: '#FFF0F7',
  },
  {
    icon: MessageSquare,
    title: 'Contato direto via WhatsApp',
    desc: 'Fale com o negócio ou prestador em um clique, com mensagem já preparada para você.',
    color: '#10B981',
    bg: '#ECFDF5',
  },
  {
    icon: MapPin,
    title: 'Rotas integradas',
    desc: 'Abra o Google Maps direto do perfil e chegue ao seu destino sem complicação.',
    color: '#06C1B6',
    bg: '#EDFAFA',
  },
];

const PARTNER_FULL = [
  {
    icon: Store,
    title: 'Vitrine profissional',
    desc: 'Perfil completo com fotos, descrição, horários de funcionamento e contatos diretos.',
  },
  {
    icon: Star,
    title: 'Gestão de reputação',
    desc: 'Receba e responda avaliações reais, construindo confiança na sua comunidade.',
  },
  {
    icon: BarChart2,
    title: 'Métricas em tempo real',
    desc: 'Acompanhe visualizações, leads e cliques no WhatsApp.',
  },
  {
    icon: MessageSquare,
    title: 'Contato direto via WhatsApp',
    desc: 'Clientes chegam até você com um toque, sem intermediários.',
  },
  {
    icon: CalendarDays,
    title: 'Divulgue eventos',
    desc: 'Publique shows, festas, atrações locais e muito mais, e tenha um maior alcance.',
  },
  {
    icon: CreditCard,
    title: 'Planos acessíveis',
    desc: 'Assinatura mensal sem burocracia.',
  },
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Escolha sua cidade',
    desc: 'Selecione ou deixe o app detectar sua localização automaticamente.',
  },
  {
    step: '02',
    title: 'Explore por categoria',
    desc: 'Navegue entre alimentação, saúde, beleza, serviços, eventos e muito mais.',
  },
  {
    step: '03',
    title: 'Veja o perfil completo',
    desc: 'Fotos, avaliações, horários e localização no mapa.',
  },
  {
    step: '04',
    title: 'Entre em contato',
    desc: 'Chame no WhatsApp, ligue ou abra a rota no Maps com um toque.',
  },
];


/* ─── Seção reutilizável de título ───────────────────────────────────────── */
function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-14">
      <span
        className="text-xs font-bold tracking-widest uppercase block mb-3"
        style={{ color: '#FF7300', fontFamily: 'var(--font-gotham)' }}
      >
        {eyebrow}
      </span>
      <h2
        className="text-3xl sm:text-4xl font-bold leading-tight"
        style={{ fontFamily: 'var(--font-gotham)', color: '#1C3245' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base max-w-2xl mx-auto leading-relaxed" style={{ color: '#495E70' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── Componente principal ───────────────────────────────────────────────── */
export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-bg font-calibri overflow-x-hidden">
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ backgroundColor: '#FF7300' }}
        aria-label="Seção principal"
      >
        {/* Grid pontilhado sutil */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #1C3245 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        {/* Glow central */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl mx-auto pt-24 pb-20"
        >
          {/* Logo */}
          <div className="mb-12">
            <img
              src="/logo.png"
              alt="Pratilera"
              className="mx-auto block"
              style={{ height: '96px', width: 'auto', filter: 'brightness(0) saturate(100%) invert(15%) sepia(50%) saturate(700%) hue-rotate(185deg) brightness(60%)' }}
            />
          </div>

          {/* Tagline do app — exatamente como no WelcomeScreen */}
          <h1
            className="text-4xl sm:text-5xl mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: '#1C3245', fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            Tudo o que a sua cidade oferece num só lugar
          </h1>

          {/* Subtítulo do app */}
          <p
            className="text-lg sm:text-xl mb-10 leading-relaxed"
            style={{ color: '#2B3B4A' }}
          >
            O guia completo para encontrar estabelecimentos, serviços, eventos e utilidades perto de você.
          </p>

          <div className="flex justify-center">
            <motion.span
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(28,50,69,0.25)', transition: { duration: 0.2, delay: 0 } }}
              className="inline-flex items-center justify-center px-10 py-4 rounded-2xl text-white font-bold text-base shadow-lg cursor-default"
              style={{ backgroundColor: '#1C3245', fontFamily: 'var(--font-gotham)' }}
            >
              Em Breve para iOS e Android
            </motion.span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1C3245', opacity: 0.6 }}>
              Iniciando em
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {['Capim Branco', 'Matozinhos', 'Pedro Leopoldo'].map((city, i) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(28,50,69,0.10)', transition: { duration: 0.2, delay: 0 } }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.35 }}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold cursor-default inline-block"
                  style={{ backgroundColor: 'rgba(28,50,69,0.15)', color: '#FFFFFF' }}
                >
                  {city}
                </motion.div>
              ))}
            </div>
            <p className="text-xs mt-3 font-medium" style={{ color: '#1C3245', opacity: 0.55 }}>
              Mais cidades a caminho
            </p>
          </motion.div>
        </motion.div>

      </section>

      {/* ══════════════════════════════════════════════════════════════════
          COMO FUNCIONA + CATEGORIAS (seção unificada)
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{ backgroundColor: '#1C3245' }}
        id="como-funciona"
        aria-labelledby="como-funciona-heading"
      >
        {/* Textura de fundo */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        {/* Glow central */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(255,115,0,0.08) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <span
              className="text-xs font-bold tracking-widest uppercase block mb-3"
              style={{ color: '#FF7300' }}
            >
              Simples assim
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              id="como-funciona-heading"
            >
              Do zero ao contato em 4 passos
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {HOW_IT_WORKS.map((step, i) => {
              const icons = [MapPin, LayoutGrid, Store, MessageSquare];
              const Icon = icons[i];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.09)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center p-6 rounded-2xl"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderTopWidth: '3px',
                    borderTopColor: '#FF7300',
                  }}
                >
                  {/* Ícone com número sobreposto */}
                  <div className="relative mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: '#FF730020' }}
                    >
                      <Icon size={26} color="#FF7300" strokeWidth={1.8} />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold"
                      style={{ backgroundColor: '#FF7300', color: '#FFFFFF' }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A3B1BE' }}>
                    {step.desc}
                  </p>
                  {/* Seta de conexão (exceto no último) */}
                  {i < 3 && (
                    <div className="hidden lg:flex absolute -right-3 top-8 z-10 w-6 h-6 items-center justify-center rounded-full"
                      style={{ backgroundColor: '#1C3245', border: '1px solid rgba(255,255,255,0.12)' }}
                    >
                      <ChevronRight size={14} color="#FF7300" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>


        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PARA CONSUMIDORES
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-bg" id="consumidores" aria-labelledby="consumidores-heading">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Para consumidores"
            title="Tudo perto de você, na palma da mão"
            subtitle="Estabelecimentos, prestadores de serviço, eventos e utilidades públicas da sua cidade — tudo num só lugar."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONSUMER_FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(28,50,69,0.10)' }}
                  className="bg-white rounded-2xl p-7 border flex flex-col gap-4"
                  style={{
                    borderColor: '#E8EEF3',
                    borderTopWidth: '3px',
                    borderTopColor: '#FF7300',
                    boxShadow: '0 2px 8px rgba(28,50,69,0.06)',
                  }}
                >
                  <div
                    className="w-13 h-13 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: '#FFF4EC', width: '52px', height: '52px' }}
                  >
                    <Icon size={26} color="#FF7300" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold mb-1.5"
                      style={{ fontFamily: 'var(--font-gotham)', color: '#1C3245' }}
                    >
                      {feat.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#495E70' }}>
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PARA NEGÓCIOS (GuestPartnerScreen — em formato marketing)
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: '#F3F4F6' }}
        id="negocios"
        aria-labelledby="negocios-heading"
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Para negócios"
            title="Junte-se ao catálogo mais completo da cidade"
            subtitle="Mais visibilidade, mais clientes, mais vendas. Tudo começa com um perfil no Pratilera."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(28,50,69,0.10)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-md border max-w-2xl mx-auto"
            style={{ borderColor: '#E8EEF3', borderTopWidth: '3px', borderTopColor: '#FF7300' }}
          >
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: 'var(--font-gotham)', color: '#1C3245' }}
            >
              Pronto para levar seu negócio ao próximo nível?
            </h3>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: '#495E70' }}>
              Com planos de assinatura mensal, seu negócio fica disponível e visível na plataforma para novos clientes todos os dias.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PARTNER_FULL.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <Icon size={18} color="#FF7300" className="flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold mb-0.5" style={{ color: '#1C3245' }}>{feat.title}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: '#495E70' }}>{feat.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <p className="text-center text-xs mt-8" style={{ color: '#607A8E' }}>
              Órgãos públicos têm visibilidade gratuita.
            </p>

            <div className="flex justify-center mt-8">
              <Link
                to="/planos-e-precos"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-bold text-sm shadow-md hover:opacity-90 active:scale-95 transition-all"
                style={{ backgroundColor: '#FF7300', fontFamily: 'var(--font-gotham)' }}
              >
                Ver planos e preços
                <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          DOWNLOAD CTA
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 px-6 text-center"
        style={{ backgroundColor: '#FF7300' }}
        id="download"
        aria-label="Download do aplicativo"
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
            Baixe o Pratilera agora
          </h2>
          <p className="text-base mb-10" style={{ color: '#2B3B4A', opacity: 0.85 }}>
            Gratuito para consumidores. Disponível para iOS e Android em breve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* App Store */}
            <a
              href="#"
              aria-label="Em breve na App Store"
              className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-transform"
              style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', minWidth: '180px' }}
            >
              <svg viewBox="0 0 24 24" className="flex-shrink-0" style={{ width: '28px', height: '28px', fill: '#1C3245' }}>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-left">
                <span className="block text-xs font-medium" style={{ color: '#768798' }}>Em breve na</span>
                <span className="block text-base font-bold" style={{ color: '#1C3245' }}>App Store</span>
              </span>
            </a>

            {/* Play Store */}
            <a
              href="#"
              aria-label="Em breve na Play Store"
              className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-transform"
              style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', minWidth: '180px' }}
            >
              <svg viewBox="0 0 24 24" className="flex-shrink-0" style={{ width: '28px', height: '28px', fill: '#1C3245' }}>
                <path d="M3.18 23.76c.37.2.8.22 1.2.04l13.11-7.44-2.83-2.83-11.48 10.23zm-1.46-20.5C1.48 3.68 1.5 4.2 1.75 4.64L13.2 12 1.72 19.36c-.25.44-.27.96-.02 1.38zM22.56 10.24l-2.56-1.45L16.88 12l3.12 3.12 2.56-1.45c.73-.41.73-1.5 0-1.91zM4.38.2C3.98.02 3.55.04 3.18.25L14.66 12 3.18 23.75c.37.21.8.23 1.2.05L19.12 13.5a1 1 0 000-1.75L4.38.2z"/>
              </svg>
              <span className="text-left">
                <span className="block text-xs font-medium" style={{ color: '#768798' }}>Em breve na</span>
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
