import { useEffect, useRef, useState } from 'react';
import { definirPagina } from '../lib/seo';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Check, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Celular from '../components/Celular';
import BotoesLojas from '../components/BotoesLojas';

/* Número que sobe de 0 até o valor quando aparece na tela. O valor final fica
   invisível por baixo para reservar a largura, assim os vizinhos não pulam. */
function Contador({ valor, prefixo = '' }: { valor: number; prefixo?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visivel = useInView(ref, { once: true });
  const reduzir = useReducedMotion();
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    if (!visivel) return;
    if (reduzir) { setAtual(valor); return; }
    const controle = animate(0, valor, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setAtual(Math.round(v)),
    });
    return () => controle.stop();
  }, [visivel, reduzir, valor]);

  const texto = (n: number) => `${prefixo}${n.toLocaleString('pt-BR')}`;
  return (
    <span ref={ref} className="inline-grid" style={{ fontVariantNumeric: 'tabular-nums' }}>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">{texto(valor)}</span>
      <span className="col-start-1 row-start-1">{texto(atual)}</span>
    </span>
  );
}

/* ─── Dados do app ────────────────────────────────────────────────────────── */


/* Cenas concretas em vez de lista de funcionalidades: quem lê se reconhece
   na situação. Cada uma com a tela real do app que resolve. */
const CENAS = [
  {
    titulo: 'Precisa de um eletricista perto de você hoje?',
    texto: 'Escolha a categoria ou busque pelo nome. Filtre por distância, pela avaliação ou por quem está aberto agora.',
    tela: '/telas/servicos.webp',
  },
  {
    titulo: 'Veja antes de ir.',
    texto: 'Horário de funcionamento, fotos, endereço no mapa e o que os clientes acharam, tudo no perfil do negócio.',
    tela: '/telas/perfil.webp',
  },
  {
    titulo: 'Chame no WhatsApp sem copiar número.',
    texto: 'Um toque e a conversa abre direto com o negócio. Sem intermediário: você combina tudo com quem vai te atender.',
    tela: '/telas/whatsapp.webp',
  },
];

/* O que cada plano dá — o mesmo que a tela de planos do app diz. */
const PLANO_GRATIS = [
  'Perfil no app, na busca e nas listas da cidade',
  'Telefone e WhatsApp funcionando',
  'Edite endereço, horário, redes sociais e contatos quando quiser',
  'Avaliações dos clientes visíveis no seu perfil',
];

const PLANO_ASSINATURA = [
  'Suas fotos no perfil e nos resultados da busca',
  'Aparece antes de quem não assina',
  'Selo de verificado',
  'Responda às avaliações dos clientes',
  'Veja quantas visitas e contatos o perfil recebeu',
];

/* ─── Logo da estante se montando ──────────────────────────────────────────
   O desenho é cortado nas prateleiras (23%, 42%, 61% da altura) e cada faixa
   desce para o lugar, de baixo para cima: primeiro a base com os pés, depois
   as prateleiras até o "PRA" no topo. É a única animação "de marca" do site.
   Com "reduzir movimento" ligado, o logo já aparece montado. */
const FAIXAS_ESTANTE: [number, number][] = [
  [62, 100],  // RA + base + pés
  [42.2, 62.2],  // LE
  [23.3, 42.4],  // TI
  [0, 23.5],  // PRA + topo
];

function LogoEstante({ className = '' }: { className?: string }) {
  const reduzido = useReducedMotion();
  const estilo = {
    height: '84px',
    width: 'auto',
    filter: 'brightness(0) saturate(100%) invert(15%) sepia(50%) saturate(700%) hue-rotate(185deg) brightness(60%)',
  };
  return (
    <div className={`relative w-fit ${className}`} role="img" aria-label="Pratilera">
      <img src="/logo.png" alt="" className="block invisible" style={estilo} />
      {FAIXAS_ESTANTE.map(([de, ate], i) => (
        <motion.img
          key={de}
          src="/logo.png"
          alt=""
          className="absolute inset-0 block"
          style={{ ...estilo, clipPath: `inset(${de}% 0 ${100 - ate}% 0)` }}
          initial={reduzido ? false : { opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 + i * 0.16, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}

/* ─── Componente principal ───────────────────────────────────────────────── */
export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    definirPagina({
      titulo: 'Pratilera: negócios, serviços e eventos de BH e região',
      descricao: 'Encontre negócios, serviços e eventos de Belo Horizonte e região. Veja horário e avaliações e chame no WhatsApp. Grátis para iPhone e Android.',
      caminho: '/',
    });
  }, []);

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
        className="relative overflow-hidden px-6 pt-28 pb-20 lg:pt-36 lg:pb-28"
        style={{ backgroundColor: '#FF7300' }}
        aria-label="Seção principal"
      >
        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-10 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <LogoEstante className="mx-auto lg:mx-0 mb-9" />

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] mb-6 leading-[1.08]"
              style={{ fontFamily: 'var(--font-display)', color: '#1C3245', fontWeight: 700, letterSpacing: '-0.035em' }}
            >
              Tudo o que a sua cidade oferece num só lugar
            </h1>

            <p className="text-lg sm:text-xl mb-9 leading-relaxed max-w-xl mx-auto lg:mx-0" style={{ color: '#2B3B4A' }}>
              Negócios, serviços e eventos de Belo Horizonte e região. Veja o horário, as avaliações e chame no WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.a
                href="/baixar"
                whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(28,50,69,0.25)', transition: { duration: 0.2 } }}
                className="inline-flex items-center justify-center px-9 py-4 rounded-2xl text-white font-bold text-base shadow-lg cursor-pointer"
                style={{ backgroundColor: '#1C3245' }}
              >
                Baixar grátis
              </motion.a>
              <span className="text-sm font-semibold" style={{ color: '#1C3245' }}>
                iPhone e Android
              </span>
            </div>

            {/* Prova: números conferidos no banco (out/2026) */}
            <dl className="mt-11 flex justify-center lg:justify-start gap-10">
              {([
                [1500, 'negócios e serviços', '+'],
                [10, 'cidades', ''],
                [22, 'categorias', ''],
              ] as const).map(([n, r, prefixo]) => (
                <div key={r}>
                  <dt className="text-3xl font-bold leading-none" style={{ color: '#1C3245', letterSpacing: '-0.03em' }}>
                    <Contador valor={n} prefixo={prefixo} />
                  </dt>
                  <dd className="text-sm mt-1.5 font-medium" style={{ color: '#2B3B4A' }}>{r}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* O app de verdade */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative h-[520px] sm:h-[600px] max-w-[460px] w-full mx-auto"
            aria-hidden="true"
          >
            <Celular src="/telas/perfil.webp" className="absolute right-0 top-10 w-[56%] rotate-[4deg] hidden sm:block" />
            <Celular src="/telas/categorias.webp" className="absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 top-0 w-[64%] sm:w-[60%] -rotate-[2deg] z-10" />
          </motion.div>
        </div>

        {/* Cidades */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative z-10 max-w-6xl mx-auto mt-16 text-center lg:text-left"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1C3245', opacity: 0.7 }}>
            Disponível em
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
            {['Belo Horizonte', 'Capim Branco', 'Confins', 'Funilândia', 'Lagoa Santa', 'Matozinhos', 'Pedro Leopoldo', 'Prudente de Morais', 'São José da Lapa', 'Vespasiano'].map((city) => (
              <span
                key={city}
                className="px-4 py-1.5 rounded-full text-sm font-semibold"
                style={{ backgroundColor: 'rgba(255,255,255,0.28)', color: '#1C3245' }}
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          COMO FUNCIONA: cenas reais, cada uma com a tela do app
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 px-6 bg-bg" id="como-funciona" aria-labelledby="como-funciona-heading">
        <div className="max-w-5xl mx-auto">
          <h2
            id="como-funciona-heading"
            className="text-3xl sm:text-[2.6rem] font-bold leading-tight text-center mb-20 lg:mb-24"
            style={{ color: '#1C3245', letterSpacing: '-0.03em' }}
          >
            Do celular até a porta do negócio
          </h2>

          <div className="space-y-24 lg:space-y-32">
            {CENAS.map((cena, i) => (
              <div key={cena.titulo} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                  className={`text-center md:text-left ${i % 2 ? 'md:order-2' : ''}`}
                >
                  <h3
                    className="text-2xl sm:text-3xl font-bold leading-snug mb-4"
                    style={{ color: '#1C3245', letterSpacing: '-0.025em' }}
                  >
                    {cena.titulo}
                  </h3>
                  <p className="text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: '#495E70' }}>
                    {cena.texto}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className={`flex justify-center ${i % 2 ? 'md:order-1' : ''}`}
                  aria-hidden="true"
                >
                  <Celular src={cena.tela} className="w-[230px] sm:w-[260px]" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PARA NEGÓCIOS: anunciar é grátis; assinar dá mais destaque
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 lg:py-28 px-6"
        style={{ backgroundColor: '#1C3245' }}
        id="negocios"
        aria-labelledby="negocios-heading"
      >
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2
              id="negocios-heading"
              className="text-3xl sm:text-[2.6rem] font-bold leading-tight text-white mb-5"
              style={{ letterSpacing: '-0.03em' }}
            >
              Tem um negócio na região? Ele pode já estar no app.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#C4D0DA' }}>
              Anunciar no Pratilera é grátis. Se o seu negócio já aparece, busque pelo nome dele no app e toque em <strong className="text-white">Reivindicar</strong> para cuidar do perfil. Se ainda não aparece, faça o cadastro pelo app.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl p-8"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: '#C4D0DA' }}>Grátis</p>
              <p className="text-3xl font-bold text-white mb-6" style={{ letterSpacing: '-0.03em' }}>R$ 0</p>
              <ul className="space-y-3">
                {PLANO_GRATIS.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px]" style={{ color: '#E8EEF3' }}>
                    <Check size={18} className="flex-shrink-0 mt-0.5" color="#06C1B6" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-3xl p-8 bg-white"
            >
              <p className="text-sm font-semibold mb-2" style={{ color: '#FF7300' }}>Assinatura</p>
              <p className="mb-6" style={{ color: '#1C3245' }}>
                <span className="text-sm font-semibold">a partir de </span>
                <span className="text-3xl font-bold" style={{ letterSpacing: '-0.03em' }}>R$ 9,90</span>
                <span className="text-sm font-semibold">/mês</span>
                <span className="block text-sm mt-1" style={{ color: '#495E70' }}>no plano anual (R$ 118,80 por ano). No mensal, R$ 19,90.</span>
              </p>
              <p className="text-sm font-semibold mb-3" style={{ color: '#1C3245' }}>Tudo do grátis, e mais:</p>
              <ul className="space-y-3">
                {PLANO_ASSINATURA.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px]" style={{ color: '#2B3B4A' }}>
                    <Check size={18} className="flex-shrink-0 mt-0.5" color="#FF7300" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <Link
              to="/planos-e-precos"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#FF7300', color: '#1C3245' }}
            >
              Ver planos e preços
              <ChevronRight size={16} />
            </Link>
            <p className="text-sm" style={{ color: '#A3B1BE' }}>
              Sem comissão e sem fidelidade.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          DOWNLOAD CTA
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden px-6 py-20 lg:py-24"
        style={{ backgroundColor: '#FF7300' }}
        id="download"
        aria-label="Download do aplicativo"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-center lg:text-left"
          >
            <div>
            <h2
              className="text-3xl sm:text-[2.6rem] font-bold leading-tight mb-3"
              style={{ color: '#1C3245', letterSpacing: '-0.03em' }}
            >
              Baixe grátis e veja o que tem perto de você.
            </h2>
            <p className="text-lg" style={{ color: '#2B3B4A' }}>
              Disponível para iPhone e Android.
            </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center shrink-0">
              <BotoesLojas />
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
