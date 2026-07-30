import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Button from "./Button";
import { CheckIcon } from "./Icons";
import TopoTexture from "./TopoTexture";

const plans = [
  {
    tag: "Inscrição individual",
    title: "Sua escalada",
    oldPrice: "De R$ 5.997",
    installment: "12x de",
    price: "R$ 297",
    cashPrice: "ou R$ 2.997 à vista",
    features: [
      "3 dias completos de imersão",
      "Mais de 35 dinâmicas práticas",
      "Material de apoio da imersão",
      "Encontro de retorno 7 dias após o evento",
    ],
    cta: "Quero começar minha escalada →",
    link: "https://pay.kiwify.com.br/D6KXVq8",
    highlighted: false,
    checkColor: "text-semantic-positive",
  },
  {
    tag: "Inscrição em dupla",
    title: "Escalem juntos",
    badge: "Mais escolhido",
    oldPrice: "De R$ 11.997",
    installment: "12x de",
    price: "R$ 497",
    cashPrice: "ou R$ 4.997 à vista",
    features: [
      "2 vagas: leve quem também precisa escalar com você",
      "Mais de 35 dinâmicas práticas para os dois",
      "Material de apoio da imersão",
      "Encontro de retorno 7 dias após o evento",
    ],
    cta: "Escalar em dupla →",
    link: "https://pay.kiwify.com.br/B4Te3lV",
    highlighted: true,
    checkColor: "text-accent-primary",
  },
];

export default function Pricing() {
  return (
    <section id="precos" className="relative overflow-hidden bg-bg-secondary py-12 md:py-20">
      <TopoTexture />
      <Container className="relative">
        <Eyebrow>Sua vaga na escalada</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          A única decisão que separa você da sua próxima versão é{" "}
          <em className="italic text-accent-primary">decidir começar</em>.
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
              <div className="flex items-center justify-between gap-3">
                <p className="eyebrow">{plan.tag}</p>
                {plan.badge && (
                  <span className="mono-label shrink-0 rounded-full bg-cta-green px-3 py-1 text-[11px] font-semibold uppercase text-cta-text">
                    {plan.badge}
                  </span>
                )}
              </div>

              <h3 className="mt-3 font-serif text-[24px] font-medium leading-[1.2] text-text-primary md:text-[26px]">
                {plan.title}
              </h3>

              <div className="mt-6">
                {/* ⚠️ CONFIRMAR: valor cheio abaixo é real e verificável? Se não, remover a linha riscada e mostrar só o valor final. */}
                <p className="mono-label text-[13px] text-text-muted line-through">
                  {plan.oldPrice}
                </p>
                <p className="mt-1 flex items-baseline gap-3">
                  <span className="mono-label text-[13px] uppercase text-text-secondary">
                    {plan.installment}
                  </span>
                  <span className="font-serif text-[32px] font-medium text-cta-green [text-shadow:0_0_20px_rgba(47,191,109,0.55)] md:text-[36px]">
                    {plan.price}
                  </span>
                </p>
                <p className="mono-label mt-1 text-[13px] text-text-secondary">
                  {plan.cashPrice}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <CheckIcon className={`mt-1 h-3.5 w-3.5 shrink-0 ${plan.checkColor}`} />
                    <span className="text-[15px] leading-[1.6] text-text-secondary">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button href={plan.link} className="mt-10 w-full">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
