import Container from "./Container";
import Eyebrow from "./Eyebrow";
import { CheckIcon, XIcon } from "./Icons";

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
    <section className="bg-bg-primary py-16 md:py-28">
      <Container>
        <Eyebrow>Por que é diferente</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          O problema nunca foi fazer uma imersão.{" "}
          <em className="italic">Foi voltar pra casa exatamente igual.</em>
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow text-text-muted">
              O que você já viveu por aí
            </p>
            <ul className="mt-6 space-y-5">
              {negatives.map((text) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-semantic-negative/15 text-semantic-negative">
                    <XIcon />
                  </span>
                  <span className="text-[15px] leading-[1.6] text-text-secondary/80 md:text-[16px]">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">O que é o Metamorfase</p>
            <ul className="mt-6 space-y-5">
              {positives.map((text) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-semantic-positive/15 text-semantic-positive">
                    <CheckIcon />
                  </span>
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
