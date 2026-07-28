import Container from "./Container";
import Eyebrow from "./Eyebrow";
import diegoPhoto from "../assets/diego-photo.jpg";
import TopoTexture from "./TopoTexture";

export default function WhyExists() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-12 md:py-20">
      <TopoTexture />
      <Container className="relative max-w-3xl">
        <Eyebrow>Por que o Metamorfase existe</Eyebrow>
        <h2 className="mt-6 font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          Eu também vivi essa distância.
        </h2>
        <p className="mt-6 text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Por muito tempo eu vivi uma vida que, de fora, parecia certa. Por
          dentro, continuava travado nos mesmos resultados. Rodei imersão
          atrás de imersão. Encontrei discurso bonito. Encontrei pouca
          prática real.
        </p>

        <blockquote className="mt-10 border-l-4 border-accent-primary pl-6 md:pl-8">
          <p className="font-serif text-[20px] italic leading-[1.4] text-text-primary md:text-[26px]">
            Só entendi quando enxerguei o padrão invisível que sustentava
            tudo. Rompi ele. E, a partir dali, reconstruí quase tudo.
          </p>
        </blockquote>

        <p className="mt-10 text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          O Metamorfase é a síntese do que eu queria ter encontrado quando
          mais precisei: 3 dias práticos, sem enrolação, para você
          identificar o padrão, romper o ciclo e sair com uma nova direção
          construída.
        </p>

        <div className="mt-12 flex items-center gap-4">
          <img
            src={diegoPhoto}
            alt="Diego Corrêa"
            className="h-16 w-16 rounded-2xl object-cover object-top md:h-20 md:w-20"
          />
          <div>
            <p className="font-serif text-[18px] font-medium text-text-primary md:text-[20px]">
              Diego Corrêa
            </p>
            <p className="mono-label mt-1 text-[12px] uppercase text-text-secondary">
              Criador do Metamorfase · +1.500 pessoas atendidas
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
