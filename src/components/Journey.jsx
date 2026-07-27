import Container from "./Container";
import Eyebrow from "./Eyebrow";

const steps = [
  {
    number: "01",
    title: "Você identifica.",
    text: "Você enxerga com clareza o padrão invisível que continua produzindo os mesmos resultados.",
  },
  {
    number: "02",
    title: "Você rompe.",
    text: "Mais de 35 dinâmicas vivenciais para você não ouvir sobre mudança: viver ela no corpo.",
  },
  {
    number: "03",
    title: "Você constrói.",
    text: "Você sai com uma nova direção construída, não com insight solto pra desmotivar na semana seguinte.",
  },
];

export default function Journey() {
  return (
    <section className="bg-bg-secondary py-16 md:py-28">
      <Container>
        <Eyebrow>A Jornada</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          É assim que a mudança acontece.
        </h2>
        <p className="mt-6 max-w-2xl text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Três passos vividos na prática, dinâmica por dinâmica, ao longo dos
          3 dias.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-border-subtle bg-bg-card p-8 md:p-10"
            >
              <span className="font-serif text-[48px] leading-none text-accent-primary md:text-[56px]">
                {step.number}
              </span>
              <h3 className="mt-6 font-serif text-[24px] font-medium leading-[1.2] text-text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-text-secondary">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border-subtle bg-bg-card/60 p-8 text-center md:p-10">
          <p className="font-serif text-[19px] italic leading-[1.5] text-text-primary md:text-[22px]">
            Aqui não existem participantes. Existem{" "}
            <strong className="font-medium not-italic text-accent-primary">
              escaladores
            </strong>
            . E não existe evento: existe uma{" "}
            <strong className="font-medium not-italic text-accent-primary">
              travessia
            </strong>{" "}
            que começa no pé da montanha e termina num novo horizonte.
          </p>
        </div>
      </Container>
    </section>
  );
}
