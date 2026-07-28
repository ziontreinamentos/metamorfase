import Container from "./Container";
import Eyebrow from "./Eyebrow";
import TopoTexture from "./TopoTexture";

const items = [
  "Você sabe que consegue entregar muito mais do que entrega hoje.",
  "Você cresce por um tempo e depois volta pro mesmo lugar de sempre.",
  "Você muda estratégias, mas continua vivendo os mesmos resultados.",
  "Existe uma versão sua que nunca conseguiu aparecer por completo.",
];

export default function Diagnosis() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-12 md:py-20">
      <TopoTexture />
      <Container className="relative">
        <Eyebrow>O Diagnóstico</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          O problema nunca foi falta de potencial.
        </h2>
        <p className="mt-6 max-w-2xl text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Você trabalha muito. Busca aprender. Compra livros. Faz cursos.
          Planeja. E mesmo assim continua sentindo que poderia viver muito
          mais do que vive hoje. Isso acontece porque existe um padrão
          produzindo sempre os mesmos resultados.
        </p>

        <div className="mt-14 divide-y divide-border-subtle border-t border-border-subtle">
          {items.map((text, i) => (
            <div key={i} className="flex gap-5 py-8 md:gap-8">
              <span className="font-serif text-[36px] leading-none text-accent-primary md:text-[48px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="pt-1 text-[16px] leading-[1.6] text-text-primary md:pt-2 md:text-[18px]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
