import Container from "./Container";
import { SealIcon } from "./Icons";

const steps = [
  {
    number: "01",
    label: "Você entra",
    text: "Sem pagar mais do que o valor da inscrição. Sem pegadinha.",
  },
  {
    number: "02",
    label: "Você vive",
    text: "Os 3 dias completos, com todas as dinâmicas e todo o material.",
  },
  {
    number: "03",
    label: "Você decide",
    text: "Não fez sentido? Fala com a gente e devolvemos tudo.",
  },
];

export default function Guarantee() {
  return (
    <section className="bg-bg-primary py-16 md:py-28">
      <Container className="max-w-3xl text-center">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border-subtle bg-bg-card px-5 py-2">
          <SealIcon className="h-4 w-4 text-accent-primary" />
          <span className="eyebrow">Garantia incondicional</span>
        </div>

        <h2 className="mt-8 font-serif text-[28px] font-normal leading-[1.2] text-text-primary md:text-[40px]">
          Você só tem duas possibilidades.{" "}
          <em className="italic">
            Ou encontra algo capaz de mudar a direção da sua vida. Ou recebe
            100% do seu dinheiro de volta.
          </em>
        </h2>

        <p className="mt-6 text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Viva os 3 dias completos. Cada dinâmica, cada exercício, cada
          conversa. Se ao final não fizer sentido, devolvemos 100% do seu
          investimento. Sem burocracia. Sem perguntas.
        </p>

        <div className="mt-14 grid gap-8 text-left md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="eyebrow">
                {step.number} · {step.label}
              </p>
              <p className="mt-3 text-[15px] leading-[1.6] text-text-primary md:text-[16px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 font-serif text-[20px] font-medium leading-[1.3] text-text-primary md:text-[24px]">
          Se o Metamorfase não entregar, o prejuízo é nosso. Não seu.
        </p>
      </Container>
    </section>
  );
}
