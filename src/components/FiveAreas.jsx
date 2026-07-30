import Container from "./Container";
import Eyebrow from "./Eyebrow";
import TopoTexture from "./TopoTexture";
import { HeartIcon, CompassIcon, ChartUpIcon, BriefcaseIcon, LeafIcon } from "./Icons";

const areas = [
  {
    label: "Acampamento I",
    title: "Relacionamento",
    text: "Vínculos que voltam a fazer sentido. Presença onde antes só havia rotina.",
    Icon: HeartIcon,
  },
  {
    label: "Acampamento II",
    title: "Espiritualidade",
    text: "Uma reconexão real com propósito. Sem dogma, sem discurso vazio.",
    Icon: CompassIcon,
  },
  {
    label: "Acampamento III",
    title: "Vida financeira",
    text: "O teto invisível cai. Sua relação com dinheiro deixa de repetir o mesmo padrão.",
    Icon: ChartUpIcon,
  },
  {
    label: "Acampamento IV",
    title: "Carreira",
    text: "Clareza sobre o próximo passo. Sai a estagnação, entra a direção.",
    Icon: BriefcaseIcon,
  },
  {
    label: "Cume",
    title: "Saúde",
    text: "Mais energia, mais leveza. O corpo respondendo à nova versão que você começou.",
    Icon: LeafIcon,
  },
];

export default function FiveAreas() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-12 md:py-20">
      <TopoTexture />
      <Container className="relative">
        <Eyebrow>As cinco áreas</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          Toda mudança verdadeira começa na raiz.
        </h2>
        <p className="mt-6 max-w-2xl text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Quando o padrão muda, relacionamento, espiritualidade, carreira,
          dinheiro e saúde começam a responder diferente.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.label}
              className="min-w-0 rounded-2xl border border-border-subtle bg-bg-card p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle text-accent-primary">
                <area.Icon className="h-5 w-5" />
              </span>
              <p className="eyebrow mt-5">{area.label}</p>
              <h3 className="mt-4 font-serif text-[22px] font-medium leading-[1.2] text-text-primary md:text-[24px]">
                {area.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-text-secondary">
                {area.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
