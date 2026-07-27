import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Button from "./Button";
import { CheckIcon } from "./Icons";

const plans = [
  {
    title: "Inscrição individual — Sua escalada",
    oldPrice: "De R$ 5.997",
    newPrice: "12x de R$ 297",
    features: [
      "3 dias completos de imersão",
      "Mais de 35 dinâmicas práticas",
      "Material de apoio da imersão",
      "Encontro de retorno 7 dias após o evento",
    ],
    cta: "Quero começar minha escalada →",
    highlighted: false,
  },
  {
    title: "Inscrição em dupla — Escalem juntos",
    badge: "Mais escolhido",
    oldPrice: "De R$ 11.997",
    newPrice: "12x de R$ 497",
    features: [
      "2 vagas: leve quem também precisa escalar com você",
      "Mais de 35 dinâmicas práticas para os dois",
      "Material de apoio da imersão",
      "Encontro de retorno 7 dias após o evento",
    ],
    cta: "Escalar em dupla →",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="bg-bg-primary py-16 md:py-28">
      <Container>
        <Eyebrow>Sua vaga na escalada</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          A única decisão que separa você da sua próxima versão é{" "}
          <em className="italic">decidir começar</em>.
        </h2>
        <p className="mt-6 max-w-2xl text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          28, 29 e 30 de agosto · Guararema, SP. Lote de lançamento, com vagas
          limitadas a um grupo pequeno.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-2xl p-8 md:p-10 ${
                plan.highlighted
                  ? "border border-border-highlight bg-bg-card-elevated shadow-[0_0_24px_#e8823c33] md:scale-[1.03]"
                  : "border border-border-subtle bg-bg-card"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent-primary px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-bg-primary">
                  {plan.badge}
                </span>
              )}

              <h3 className="font-serif text-[24px] font-medium leading-[1.2] text-text-primary md:text-[26px]">
                {plan.title}
              </h3>

              <div className="mt-6">
                <p className="text-[14px] text-text-muted line-through">
                  {plan.oldPrice}
                </p>
                <p className="mt-1 font-serif text-[30px] font-medium text-text-primary md:text-[34px]">
                  {plan.newPrice}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-semantic-positive/15 text-semantic-positive">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span className="text-[15px] leading-[1.6] text-text-secondary">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button href="#precos" className="mt-10 w-full">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
