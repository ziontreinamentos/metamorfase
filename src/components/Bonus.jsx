import Container from "./Container";
import Eyebrow from "./Eyebrow";

const bonuses = [
  {
    title: "Encontro de Retorno",
    text: "7 dias após a imersão, um encontro pra tirar dúvidas e manter a proximidade com o processo.",
  },
  {
    title: "2 vagas: Saia da Cela",
    text: "Acesso ao evento voltado a acelerar 5 anos da sua vida em 12 meses.",
  },
  {
    title: "Curso Agenda Fácil",
    text: "Vença a procrastinação e organize sua produtividade de verdade.",
  },
  {
    title: "Hipnose Guiada: 12 áudios",
    text: "Programação diária da mente: relacionamento, ansiedade, produtividade, sono, emagrecimento e mais.",
  },
];

export default function Bonus() {
  return (
    <section className="bg-bg-secondary py-16 md:py-28">
      <Container>
        <Eyebrow>Bônus inclusos em qualquer modalidade de inscrição</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          Além da imersão, você leva:
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {bonuses.map((bonus) => (
            <div
              key={bonus.title}
              className="rounded-2xl border border-border-subtle bg-bg-card p-8"
            >
              <h3 className="font-serif text-[22px] font-medium leading-[1.2] text-text-primary md:text-[24px]">
                {bonus.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-text-secondary">
                {bonus.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
