import { useEffect, useState } from 'react';
import { definirPagina } from '../lib/seo';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BotoesLojas from '../components/BotoesLojas';

/* ⚠️ Espelho de functions/src/payments.ts (quem cobra) e src/constants/pricing.ts
   do app. Mudou aqui, mude lá. Preço ÚNICO para autônomo, MEI e empresa desde
   30/09/2026. */
const MENSAL = 19.9;
const ANUAL_POR_MES = 9.9;
const ANUAL_TOTAL = 118.8;
const EVENTO = 39.9;

/* Calculado, não escrito à mão: um "-20%" fixo sobreviveu a uma troca de preço
   anunciando um desconto que já não existia. */
const DESCONTO_ANUAL = Math.round((1 - ANUAL_POR_MES / MENSAL) * 100);

const fmt = (v: number) => v.toFixed(2).replace('.', ',');

const GRATIS = [
  'Perfil no app, na busca e nas listas da cidade',
  'Telefone e WhatsApp funcionando',
  'Edite endereço, horário e contatos quando quiser',
  'Avaliações dos clientes visíveis no perfil',
];

/* Só o que a assinatura acrescenta ao grátis. */
const ASSINATURA = [
  'Suas fotos no perfil e nos resultados da busca',
  'Aparece antes de quem não assina',
  'Selo de verificado ao lado do nome',
  'Responda às avaliações dos clientes',
  'Veja quantas visitas e contatos o perfil recebeu',
];

const EVENTO_INCLUI = [
  'Aparece na agenda de eventos da cidade',
  'Página do evento com data, local e link para ingressos',
  'Sem comissão sobre os ingressos',
];

const PERGUNTAS = [
  {
    p: 'Pagou, já aparece?',
    r: 'O plano é liberado assim que o pagamento é confirmado, mas o perfil continua passando pela conferência da nossa equipe antes de aparecer no app.',
  },
  {
    p: 'Se eu parar de pagar, meu negócio some?',
    r: 'Não. O perfil volta para o plano grátis e continua no app, com telefone e WhatsApp. Só o evento sai do ar, quando termina.',
  },
  {
    p: 'Tem fidelidade ou multa?',
    r: 'Não. Você cancela pelo próprio app quando quiser, e o plano continua valendo até o fim do período já pago.',
  },
  {
    p: 'O Pratilera cobra comissão?',
    r: 'Não. Você fecha direto com o cliente, pelo WhatsApp ou telefone, e não paga nada por contato recebido.',
  },
  {
    p: 'Como eu pago?',
    r: 'Pelo app, com Pix ou cartão. O plano anual é cobrado de uma vez.',
  },
];

function Lista({ itens, cor, corTexto }: { itens: string[]; cor: string; corTexto: string }) {
  return (
    <ul className="space-y-3">
      {itens.map((t) => (
        <li key={t} className="flex gap-3 text-[15px] leading-snug" style={{ color: corTexto }}>
          <Check size={18} className="flex-shrink-0 mt-0.5" color={cor} />
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function PlanosPrecosPage() {
  const [ciclo, setCiclo] = useState<'monthly' | 'yearly'>('yearly');

  useEffect(() => {
    definirPagina({
      titulo: 'Planos e preços | Pratilera',
      descricao: 'Anunciar no Pratilera é grátis. Assinatura a partir de R$ 9,90/mês no plano anual, mesmo preço para autônomo, MEI e empresa. Sem comissão e sem fidelidade.',
      caminho: '/planos-e-precos',
    });
  }, []);

  return (
    <div className="min-h-screen bg-bg font-calibri overflow-x-hidden">
      <Navbar />

      {/* ── TOPO ─────────────────────────────────────────────────────────── */}
      <section className="px-6 pt-32 pb-16 lg:pt-36 lg:pb-20" style={{ backgroundColor: '#FF7300' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h1
            className="text-4xl sm:text-5xl leading-[1.08] mb-5 max-w-3xl"
            style={{ color: '#1C3245', fontWeight: 700, letterSpacing: '-0.035em' }}
          >
            Anunciar é grátis. Assinar faz o seu negócio aparecer mais.
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl" style={{ color: '#2B3B4A' }}>
            O mesmo preço para autônomo, MEI e empresa. Sem comissão e sem fidelidade.
          </p>
        </motion.div>
      </section>

      {/* ── PLANOS ───────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 lg:py-20 bg-bg">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-5 items-start">

          {/* Grátis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-3xl p-8 bg-white border"
            style={{ borderColor: '#E8EEF3' }}
          >
            <p className="text-sm font-semibold mb-2" style={{ color: '#495E70' }}>Grátis</p>
            <p className="text-4xl font-bold mb-1" style={{ color: '#1C3245', letterSpacing: '-0.03em' }}>R$ 0</p>
            <p className="text-sm mb-7" style={{ color: '#495E70' }}>para sempre</p>
            <Lista itens={GRATIS} cor="#06C1B6" corTexto="#2B3B4A" />
          </motion.div>

          {/* Assinatura */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="rounded-3xl p-8"
            style={{ backgroundColor: '#1C3245' }}
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <p className="text-sm font-semibold" style={{ color: '#FF8C33' }}>Assinatura</p>
              <div className="inline-flex p-1 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} role="group" aria-label="Ciclo de cobrança">
                {(['yearly', 'monthly'] as const).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCiclo(c)}
                    aria-pressed={ciclo === c}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                    style={{
                      backgroundColor: ciclo === c ? '#FFFFFF' : 'transparent',
                      color: ciclo === c ? '#1C3245' : '#C4D0DA',
                    }}
                  >
                    {c === 'yearly' ? `Anual −${DESCONTO_ANUAL}%` : 'Mensal'}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-white mb-1">
              <span className="text-4xl font-bold" style={{ letterSpacing: '-0.03em' }}>
                R$ {fmt(ciclo === 'yearly' ? ANUAL_POR_MES : MENSAL)}
              </span>
              <span className="text-sm font-semibold">/mês</span>
            </p>
            <p className="text-sm mb-7" style={{ color: '#C4D0DA' }}>
              {ciclo === 'yearly'
                ? `R$ ${fmt(ANUAL_TOTAL)} cobrados uma vez por ano`
                : 'cobrado todo mês, cancele quando quiser'}
            </p>
            <p className="text-sm font-semibold mb-3 text-white">Tudo do grátis, e mais:</p>
            <Lista itens={ASSINATURA} cor="#FF8C33" corTexto="#E8EEF3" />
          </motion.div>

          {/* Evento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.19 }}
            className="rounded-3xl p-8 bg-white border"
            style={{ borderColor: '#E8EEF3' }}
          >
            <p className="text-sm font-semibold mb-2" style={{ color: '#FF7300' }}>Evento</p>
            <p className="text-4xl font-bold mb-1" style={{ color: '#1C3245', letterSpacing: '-0.03em' }}>R$ {fmt(EVENTO)}</p>
            <p className="text-sm mb-7" style={{ color: '#495E70' }}>por evento, cobrança única</p>
            <Lista itens={EVENTO_INCLUI} cor="#FF7300" corTexto="#2B3B4A" />
          </motion.div>
        </div>

        <p className="max-w-5xl mx-auto text-sm mt-6" style={{ color: '#607A8E' }}>
          Pagamento por Pix ou cartão, pelo app.
        </p>
      </section>

      {/* ── PERGUNTAS ────────────────────────────────────────────────────── */}
      <section className="px-6 pb-20 lg:pb-24 bg-bg">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-10">
          <h2 className="text-3xl font-bold leading-tight" style={{ color: '#1C3245', letterSpacing: '-0.03em' }}>
            Perguntas que todo mundo faz
          </h2>
          <dl className="divide-y divide-[#E8EEF3]">
            {PERGUNTAS.map(({ p, r }) => (
              <div key={p} className="py-5 first:pt-0">
                <dt className="font-bold mb-1.5" style={{ color: '#1C3245' }}>{p}</dt>
                <dd className="leading-relaxed" style={{ color: '#495E70' }}>{r}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── BAIXAR ───────────────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: '#FF7300' }}>
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-3xl sm:text-[2.4rem] font-bold leading-tight mb-3" style={{ color: '#1C3245', letterSpacing: '-0.03em' }}>
              Cadastre o seu negócio pelo app.
            </h2>
            <p className="text-lg" style={{ color: '#2B3B4A' }}>
              Se ele já aparece, busque pelo nome e toque em “Reivindicar”.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center shrink-0">
            <BotoesLojas />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
