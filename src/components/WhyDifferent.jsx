import Container from "./Container";
import Eyebrow from "./Eyebrow";
import { CheckIcon, XIcon } from "./Icons";
import TopoTexture from "./TopoTexture";

const negatives = [
  "Eventos de 3 a 4 dias enrolando o que caberia em um único dia",
  "Pitch de venda a cada intervalo",
  "Muita teoria, pouca prática real",
  "Você sai com insight e volta pra mesma vida de sempre",
];

const positives = [
  "3 dias que entregam o que outros levariam de 7 a 10 dias pra passar",
  "Sem venda constante durante o evento",
  "Mais de 35 dinâmicas vivenciais: você experimenta, não só escuta",
  "Você sai com identificação, liberação e um plano pra agir",
];

export default function WhyDifferent() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-12 md:py-20">
      <TopoTexture />
      <Container className="relative">
        <Eyebrow>Por que é diferente</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          O problema nunca foi fazer uma imersão.{" "}
          <em className="italic text-accent-primary">Foi voltar pra casa exatamente igual.</em>
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border-subtle bg-bg-card p-8 md:p-10">
            <p className="eyebrow text-text-muted">
              O que você já viveu por aí
            </p>
            <ul className="mt-6 space-y-5">
              {negatives.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <XIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-semantic-negative" />
                  <span className="text-[15px] leading-[1.6] text-text-secondary/80 md:text-[16px]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border-highlight bg-bg-card-elevated p-8 shadow-[0_0_24px_#e8823c1a] md:p-10">
            <p className="eyebrow">O que é o Metamorfase</p>
            <ul className="mt-6 space-y-5">
              {positives.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-semantic-positive" />
                  <span className="text-[15px] leading-[1.6] text-text-primary md:text-[16px]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
