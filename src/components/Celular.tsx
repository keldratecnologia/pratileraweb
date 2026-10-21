/* ─── Moldura de celular com uma tela real do app ─────────────────────────── */
export default function Celular({ src, className = '' }: { src: string; className?: string }) {
  return (
    <div
      className={`rounded-[2.6rem] p-[9px] ${className}`}
      style={{ backgroundColor: '#1C3245', boxShadow: '0 30px 60px -20px rgba(28,50,69,0.55)' }}
    >
      <img src={src} alt="" className="block w-full rounded-[2rem]" style={{ aspectRatio: '640 / 1386' }} loading="eager" />
    </div>
  );
}
