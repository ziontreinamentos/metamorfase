import Container from "./Container";
import { CheckIcon } from "./Icons";
import TopoTexture from "./TopoTexture";

const steps = [
  {
    number: "01",
    label: "Você entra",
    text: "Você paga o valor da sua inscrição.",
  },
  {
    number: "02",
    label: "Você vive",
    text: "Os 3 dias completos, com todas as dinâmicas e todo o material.",
  },
  {
    number: "03",
    label: "Você decide",
    text: "Não fez sentido? Fala com a gente e devolvemos o valor da sua inscrição. Sem burocracia.",
  },
];

export default function Guarantee() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-12 md:py-20">
      <TopoTexture />
      <Container className="relative max-w-3xl">
        <div className="relative overflow-hidden rounded-2xl border border-border-highlight bg-bg-card-elevated p-8 shadow-[0_0_40px_#e8823c26] md:p-14">
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-accent-primary/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-primary text-bg-primary shadow-[0_0_20px_#e8823c66]">
              <CheckIcon className="h-6 w-6" />
            </span>
            <span className="eyebrow text-[14px]">Garantia incondicional</span>
          </div>

          <h2 className="relative mt-8 font-serif text-[28px] font-medium leading-[1.2] text-text-primary md:text-[40px]">
            Você só tem duas possibilidades.{" "}
            <em className="italic text-accent-primary">
              Ou encontra algo capaz de mudar a direção da sua vida. Ou
              recebe 100% do valor da sua inscrição de volta.
            </em>
          </h2>

          <p className="relative mt-6 text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
            Viva os 3 dias completos. Cada dinâmica, cada exercício, cada
            conversa. Se ao final não fizer sentido, devolvemos 100% do valor
            da sua inscrição. Sem burocracia. Sem perguntas.
          </p>

          <div className="relative mt-10 grid gap-8 border-t border-border-subtle pt-10 md:grid-cols-3">
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

          <p className="relative mt-10 border-t border-border-subtle pt-8 text-center font-serif text-[20px] font-medium leading-[1.3] text-text-primary md:text-[24px]">
            Se o Metamorfase não entregar, o prejuízo é nosso. Não seu.
          </p>
        </div>
      </Container>
    </section>
  );
}
