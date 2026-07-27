import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Avatar from "./Avatar";

export default function WhyExists() {
  return (
    <section className="bg-bg-secondary py-16 md:py-28">
      <Container className="max-w-3xl">
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

        <blockquote className="relative mt-10 border-l-2 border-accent-primary/60 pl-6 md:pl-8">
          <span
            className="absolute -left-1 -top-6 font-serif text-6xl text-accent-primary/40 md:text-7xl"
            aria-hidden="true"
          >
            “
          </span>
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
          <Avatar className="h-16 w-16 rounded-2xl object-cover md:h-20 md:w-20" />
          <div>
            <p className="font-serif text-[18px] font-medium text-text-primary md:text-[20px]">
              Diego Corrêa
            </p>
            <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.08em] text-text-secondary">
              Criador do Metamorfase · +1.500 pessoas atendidas
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
