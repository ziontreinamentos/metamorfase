import Container from "./Container";
import Button from "./Button";
import heroPhoto from "../assets/hero-photo.jpg";

export default function Hero() {
  return (
    <section id="topo" className="relative flex min-h-[100svh] items-end overflow-hidden bg-bg-primary pb-20 pt-40 md:items-center md:pb-0">
      <div className="absolute inset-0">
        <img src={heroPhoto} alt="" className="h-full w-full object-cover object-[68%_center]" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/70 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">
            IMERSÃO PRESENCIAL · 3 DIAS · GUARAREMA/SP
          </p>
          <h1 className="font-serif text-[34px] font-normal leading-[1.08] text-text-primary sm:text-[44px] md:text-[56px] lg:text-[68px]">
            Existe uma distância entre os resultados que você vive hoje...{" "}
            <span className="text-accent-light">
              e os resultados que você realmente seria capaz de construir.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-[1.6] text-text-secondary md:text-[19px] md:leading-[1.55]">
            Em apenas 3 dias, o Metamorfase ajuda você a identificar o padrão
            que limita seus resultados, romper esse ciclo e construir uma
            nova direção para os próximos 10 anos da sua vida.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {["28, 29 e 30 de agosto", "Guararema, SP", "Vagas limitadas"].map(
              (pill, i) => (
                <span key={pill} className="flex items-center gap-3">
                  {i > 0 && <span className="text-text-secondary" aria-hidden="true">·</span>}
                  <span className="mono-label rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] uppercase text-text-primary backdrop-blur-sm">
                    {pill}
                  </span>
                </span>
              )
            )}
          </div>

          <div className="mt-10">
            <Button href="#precos">Quero começar minha escalada →</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
