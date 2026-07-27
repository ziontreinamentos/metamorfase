import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Button from "./Button";
import Countdown from "./Countdown";

export default function FinalCTA() {
  return (
    <section className="bg-bg-secondary py-16 md:py-28">
      <Container className="max-w-3xl text-center">
        <div className="flex justify-center">
          <Eyebrow>Vagas limitadas: turma de agosto</Eyebrow>
        </div>
        <h2 className="mt-6 font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          Daqui a dez anos, você vai lembrar destes três dias.
        </h2>
        <p className="mt-6 text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Porque foi aqui que você mudou o padrão que definia seus resultados
          e começou uma nova direção pra sua vida.
        </p>

        <div className="mt-12">
          <Countdown />
        </div>

        <div className="mt-12">
          <Button href="#precos">Quero começar minha escalada →</Button>
        </div>

        <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.1em] text-text-secondary">
          28 · 29 · 30 de agosto · Guararema, SP
        </p>
      </Container>
    </section>
  );
}
