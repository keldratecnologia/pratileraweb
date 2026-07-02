import { useEffect } from 'react';
import { Link } from 'react-router-dom';

// ── Configuração: vire para true quando cada loja aprovar o app ──────────────
const IOS_URL = 'https://apps.apple.com/br/app/id6776366689';
const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.pratileraapp';
const IOS_LIVE = true;      // App Store aprovada? -> true
const ANDROID_LIVE = true;  // Play Store aprovada? -> true

const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
const isIOS = /iphone|ipad|ipod/i.test(ua);
const isAndroid = /android/i.test(ua);

function StoreButton({
  live,
  url,
  small,
  big,
  icon,
}: {
  live: boolean;
  url: string;
  small: string;
  big: string;
  icon: React.ReactNode;
}) {
  const content = (
    <span className="inline-flex w-full items-center gap-4 px-6 py-4 rounded-2xl" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
      <span className="flex-shrink-0" style={{ width: 30, height: 30 }}>{icon}</span>
      <span className="text-left">
        <span className="block text-xs font-medium" style={{ color: '#768798' }}>{live ? small : 'Em breve na'}</span>
        <span className="block text-lg font-bold" style={{ color: '#1C3245' }}>{big}</span>
      </span>
    </span>
  );

  if (!live) {
    return <span className="block w-full opacity-60 cursor-default">{content}</span>;
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full transition-transform hover:scale-105 active:scale-95">
      {content}
    </a>
  );
}

const AppleIcon = (
  <svg viewBox="0 0 24 24" style={{ width: 30, height: 30, fill: '#1C3245' }}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const PlayIcon = (
  <svg viewBox="0 0 24 24" style={{ width: 30, height: 30, fill: '#1C3245' }}>
    <path d="M3.18 23.76c.37.2.8.22 1.2.04l13.11-7.44-2.83-2.83-11.48 10.23zm-1.46-20.5C1.48 3.68 1.5 4.2 1.75 4.64L13.2 12 1.72 19.36c-.25.44-.27.96-.02 1.38zM22.56 10.24l-2.56-1.45L16.88 12l3.12 3.12 2.56-1.45c.73-.41.73-1.5 0-1.91zM4.38.2C3.98.02 3.55.04 3.18.25L14.66 12 3.18 23.75c.37.21.8.23 1.2.05L19.12 13.5a1 1 0 000-1.75L4.38.2z"/>
  </svg>
);

// Se o aparelho tem loja no ar, a página vai redirecionar — mostramos só um
// loading limpo ("Abrindo a loja…") em vez do flash da página inteira.
const willRedirect = (isIOS && IOS_LIVE) || (isAndroid && ANDROID_LIVE);

export default function BaixarPage() {
  // Redireciona automaticamente para a loja do aparelho (se já estiver no ar).
  useEffect(() => {
    if (isIOS && IOS_LIVE) window.location.replace(IOS_URL);
    else if (isAndroid && ANDROID_LIVE) window.location.replace(ANDROID_URL);
  }, []);

  // Tela de transição enquanto o redirecionamento acontece.
  if (willRedirect) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center" style={{ backgroundColor: '#1C3245' }}>
        <img src="/mini-logo.png" alt="Pratilera" style={{ width: 64, height: 64, filter: 'brightness(0) invert(1)' }} className="mb-6 animate-pulse" />
        <p className="text-base font-medium" style={{ color: '#FFFFFF' }}>Abrindo a loja…</p>
        <p className="text-sm mt-2" style={{ color: '#A3B1BE' }}>
          Se não abrir automaticamente,{' '}
          <a href={isIOS ? IOS_URL : ANDROID_URL} className="underline" style={{ color: '#FF7300' }}>toque aqui</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center" style={{ backgroundColor: '#1C3245' }}>
      <Link to="/" aria-label="Pratilera" className="mb-8">
        <img src="/mini-logo.png" alt="Pratilera" style={{ width: 64, height: 64, filter: 'brightness(0) invert(1)' }} />
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
        Baixe o Pratilera
      </h1>
      <p className="text-base mb-10 max-w-md" style={{ color: '#A3B1BE' }}>
        Tudo o que a sua cidade oferece num só app. Gratuito para você.
      </p>

      <div className="flex flex-col gap-4 w-full" style={{ maxWidth: 320 }}>
        <StoreButton live={IOS_LIVE} url={IOS_URL} small="Baixar na" big="App Store" icon={AppleIcon} />
        <StoreButton live={ANDROID_LIVE} url={ANDROID_URL} small="Baixar na" big="Play Store" icon={PlayIcon} />
      </div>

      {!IOS_LIVE && !ANDROID_LIVE && (
        <p className="text-sm mt-8" style={{ color: '#768798' }}>
          Estamos chegando! Em breve nas lojas. 🚀
        </p>
      )}

      <Link to="/" className="text-sm mt-10 underline hover:opacity-80" style={{ color: '#FF7300' }}>
        Voltar ao site
      </Link>
    </div>
  );
}
