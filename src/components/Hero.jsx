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
          <div className="absolute inset-y-0 left-0 flex w-[42%] items-end pb-5 pl-5">
            <p
              className="mono-label text-[11px] uppercase leading-relaxed text-white"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.75), 0 1px 10px rgba(0,0,0,0.45)" }}
            >
              IMERSÃO PRESENCIAL · 3 DIAS · GUARAREMA/SP
            </p>
          </div>
        </div>

        <div className="bg-bg-primary px-6 pb-16 pt-8">
          <p className="eyebrow mb-6">CENTENAS DE ESCALADORES JÁ FORMADOS</p>
          <h1 className="font-serif text-[34px] font-normal leading-[1.08] text-text-primary sm:text-[44px]">
            Daqui a 10 anos, você vai estar exatamente onde está hoje.{" "}
            <span className="text-accent-light">
              A menos que rompa o Padrão de Teto antes disso.
            </span>
          </h1>
          <p className="mt-6 text-[16px] leading-[1.6] text-text-secondary">
            Não é falta de esforço. É um padrão invisível que decide seus
            resultados, em relacionamento, espiritualidade, dinheiro, carreira
            e saúde, ao mesmo tempo, sem você perceber. Em 3 dias, você
            identifica o seu, libera o que está pesando e sai com um plano
            construído pros próximos 10 anos.
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
            <p className="eyebrow mb-6">
              IMERSÃO PRESENCIAL · 3 DIAS · GUARAREMA/SP · CENTENAS DE
              ESCALADORES JÁ FORMADOS
            </p>
            <h1 className="font-serif text-[34px] font-normal leading-[1.08] text-text-primary sm:text-[44px] md:text-[56px] lg:text-[68px]">
              Daqui a 10 anos, você vai estar exatamente onde está hoje.{" "}
              <span className="text-accent-light">
                A menos que rompa o Padrão de Teto antes disso.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.6] text-text-secondary md:text-[19px] md:leading-[1.55]">
              Não é falta de esforço. É um padrão invisível que decide seus
              resultados, em relacionamento, espiritualidade, dinheiro,
              carreira e saúde, ao mesmo tempo, sem você perceber. Em 3 dias,
              você identifica o seu, libera o que está pesando e sai com um
              plano construído pros próximos 10 anos.
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
