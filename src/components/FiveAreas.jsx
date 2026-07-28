import Container from "./Container";
import Eyebrow from "./Eyebrow";
import TopoTexture from "./TopoTexture";

const areas = [
  {
    label: "Acampamento I",
    title: "Relacionamento",
    text: "Vínculos que voltam a fazer sentido. Presença onde antes só havia rotina.",
  },
  {
    label: "Acampamento II",
    title: "Espiritualidade",
    text: "Uma reconexão real com propósito. Sem dogma, sem discurso vazio.",
  },
  {
    label: "Acampamento III",
    title: "Vida financeira",
    text: "O teto invisível cai. Sua relação com dinheiro deixa de repetir o mesmo padrão.",
  },
  {
    label: "Acampamento IV",
    title: "Carreira",
    text: "Clareza sobre o próximo passo. Sai a estagnação, entra a direção.",
  },
  {
    label: "Cume",
    title: "Saúde",
    text: "Mais energia, mais leveza. O corpo respondendo à nova versão que você começou.",
  },
];

export default function FiveAreas() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-12 md:py-20">
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
              <p className="eyebrow">{area.label}</p>
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
