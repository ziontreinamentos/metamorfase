import Container from "./Container";
import mountainBg from "../assets/impact-mountain.jpg";

export default function ImpactStatement() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-16 md:py-32">
      <img
        src={mountainBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-bg-primary/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-bg-primary/20 to-bg-primary/50" />

      <Container className="relative max-w-4xl text-center">
        <h2 className="font-serif text-[30px] font-normal leading-[1.15] text-text-primary md:text-[46px]">
          Chega de ser a pessoa que "tinha tudo para dar certo".{" "}
          <em className="italic text-accent-primary">
            Pare de ser um potencial. Viva o que você merece.
          </em>
        </h2>
        <p className="mono-label mt-8 text-[13px] font-medium text-text-secondary">
          — DIEGO CORRÊA
        </p>
      </Container>
    </section>
  );
}
