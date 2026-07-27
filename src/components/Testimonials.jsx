import Container from "./Container";
import Eyebrow from "./Eyebrow";
import { PlayIcon } from "./Icons";

const stats = [
  { value: "+35", label: "dinâmicas em 3 dias" },
  { value: "5", label: "áreas da vida trabalhadas" },
  { value: "Centenas", label: "de escaladores já formados" },
];

const videos = [1, 2, 3, 4];

export default function Testimonials() {
  return (
    <section className="bg-bg-light py-16 md:py-28">
      <Container>
        <Eyebrow>Quem já escalou</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-[28px] font-normal leading-[1.15] text-text-on-light md:text-[42px]">
          O que acontece quando essa distância desaparece.
        </h2>
        <p className="mt-6 max-w-2xl text-[16px] leading-[1.6] text-text-on-light-muted md:text-[18px]">
          Não são pessoas que participaram de mais um evento. São pessoas que
          começaram a viver resultados diferentes.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-bg-light-card p-8 text-center shadow-[0_4px_20px_#0000000d]"
            >
              <p className="font-serif text-[40px] font-medium leading-none text-accent-primary md:text-[48px]">
                {stat.value}
              </p>
              <p className="mt-3 text-[15px] text-text-on-light-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-[13px] font-medium uppercase tracking-[0.1em] text-text-on-light-muted">
          O impacto do método em quem já aplicou
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`Assistir depoimento em vídeo ${n}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-b from-accent-light to-bg-primary"
            >
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-bg-primary transition-transform group-hover:scale-105">
                  <PlayIcon className="h-6 w-6 translate-x-0.5" />
                </span>
              </span>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-10 text-left">
                <span className="font-serif text-[15px] italic leading-snug text-text-primary">
                  Depoimento de escalador
                </span>
              </span>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
