/**
 * Renderiza os Termos e a Política a partir de `src/legal/legalContent.ts`.
 *
 * Antes cada página tinha o texto escrito à mão em JSX, e foi assim que o site
 * ficou publicando um contrato de 19/05 enquanto o app já dizia outra coisa —
 * inclusive a frase falsa de que cancelar o plano tirava o perfil do ar.
 * Com o conteúdo em dado, atualizar vira copiar UM arquivo.
 */
import type { LegalSection } from '../legal/legalContent';

export default function LegalSections({
  intro,
  sections,
}: {
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      {/* O intro vem com quebras duplas; cada bloco é um parágrafo. */}
      {intro.split('\n\n').map((p, i) => (
        <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: '#495E70' }}>
          {p}
        </p>
      ))}

      {sections.map((secao, i) => (
        <section key={i} className={secao.heading ? 'mt-10 mb-6' : 'mb-6'}>
          {/* Seção sem título é continuação da anterior — o texto legal usa isso
              para quebrar listas longas sem inventar um número novo. */}
          {secao.heading && (
            <h2 className="text-lg font-bold mb-3" style={{ color: '#1C3245' }}>
              {secao.heading}
            </h2>
          )}

          {secao.paragraphs?.map((p, j) => (
            <p key={j} className="text-sm leading-relaxed mb-3" style={{ color: '#495E70' }}>
              {p}
            </p>
          ))}

          {secao.items && (
            <ul className="list-disc pl-5 space-y-2">
              {secao.items.map((item, j) => (
                <li key={j} className="text-sm leading-relaxed" style={{ color: '#495E70' }}>
                  {item.text}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  );
}
