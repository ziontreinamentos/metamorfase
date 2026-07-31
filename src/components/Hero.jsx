import Container from "./Container";
import Button from "./Button";
import heroPhoto from "../assets/hero-photo.jpg";

const pills = ["28, 29 e 30 de agosto", "Guararema, SP", "Vagas limitadas"];

function Pills() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      {pills.map((pill, i) => (
        <span key={pill} className="flex items-center gap-3">
          {i > 0 && (
            <span className="text-text-secondary" aria-hidden="true">
              ·
            </span>
          )}
          <span className="mono-label rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] uppercase text-text-primary backdrop-blur-sm">
            {pill}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-bg-primary">
      {/* Mobile: photo banner (no text overlay) + solid content block below */}
      <div className="md:hidden">
        <div className="h-16 bg-bg-primary" aria-hidden="true" />
        <div className="relative aspect-[2.7/1] w-full overflow-hidden">
          <img
            src={heroPhoto}
            alt="Diego e Luana Corrêa"
            className="h-full w-full object-cover object-top"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-bg-primary"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_75%_at_0%_0%,rgba(8,8,8,0.6),transparent_70%)]"
            aria-hidden="true"
          />
        </div>

        <div className="bg-bg-primary px-6 pb-16 pt-8">
          <p className="eyebrow mb-6 leading-snug">
            IMERSÃO PRESENCIAL DE INTELIGÊNCIA EMOCIONAL
          </p>
          <h1 className="font-serif text-[34px] font-normal leading-[1.08] text-text-primary sm:text-[44px]">
            Enquanto você lê isso, alguém que começou depois de você{" "}
            <span className="text-accent-light">já passou na frente.</span>
          </h1>
          <p className="mt-6 text-[16px] leading-[1.6] text-text-secondary">
            Descubra, nos próximos 3 dias, o que trava você e saia com um
            plano pra não voltar pro mesmo lugar.
          </p>

          <Pills />

          <div className="mt-10">
            <Button href="#precos">Quero começar minha escalada →</Button>
          </div>
        </div>
      </div>

      {/* Desktop: full-bleed photo background (unchanged layout) */}
      <div className="relative hidden min-h-[100svh] items-center pt-40 pb-0 md:flex">
        <div className="absolute inset-0">
          <img
            src={heroPhoto}
            alt=""
            className="h-full w-full object-cover object-[68%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/70 to-transparent" />
          <p className="mono-label absolute bottom-6 right-6 rounded-full bg-bg-primary/30 px-3 py-1 text-[11px] text-white/70 backdrop-blur-sm">
            Diego e Luana Corrêa
          </p>
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">IMERSÃO PRESENCIAL DE INTELIGÊNCIA EMOCIONAL</p>
            <h1 className="font-serif text-[34px] font-normal leading-[1.08] text-text-primary sm:text-[44px] md:text-[56px] lg:text-[68px]">
              Enquanto você lê isso, alguém que começou depois de você{" "}
              <span className="text-accent-light">já passou na frente.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.6] text-text-secondary md:text-[19px] md:leading-[1.55]">
              Descubra, nos próximos 3 dias, o que trava você e saia com um
              plano pra não voltar pro mesmo lugar.
            </p>

            <Pills />

            <div className="mt-10">
              <Button href="#precos">Quero começar minha escalada →</Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
