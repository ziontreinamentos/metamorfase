import Container from "./Container";
import Eyebrow from "./Eyebrow";
import { PlayIcon } from "./Icons";
import { getYouTubeThumb, YouTubePlayer, useYouTubePlay } from "./YouTubeEmbed";

const stats = [
  { value: "+35", label: "dinâmicas em 3 dias" },
  { value: "5", label: "áreas da vida trabalhadas" },
  { value: "Centenas", label: "de escaladores já formados" },
];

const videoIds = ["b33J7vXNN0o", "vZY3bsRYuWQ", "qTKgJQqBMSs", "stfhZktM2K0"];

function VideoCard({ videoId }) {
  const { playing, play } = useYouTubePlay();

  if (playing) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-bg-primary">
        <YouTubePlayer videoId={videoId} className="absolute inset-0 h-full w-full" />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={play}
      aria-label="Assistir depoimento em vídeo"
      className="group relative aspect-video overflow-hidden rounded-2xl bg-bg-primary"
    >
      <img
        src={getYouTubeThumb(videoId)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute inset-0 bg-bg-primary/10 transition-colors group-hover:bg-bg-primary/0" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-primary text-bg-primary shadow-lg transition-transform group-hover:scale-105">
          <PlayIcon className="h-6 w-6 translate-x-0.5" />
        </span>
      </span>
    </button>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-bg-light py-12 md:py-20">
      <Container>
        <Eyebrow light>Quem já escalou</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-[28px] font-normal leading-[1.15] text-text-on-light md:text-[42px]">
          O que acontece quando essa distância desaparece.
        </h2>
        <p className="mt-6 max-w-2xl text-[16px] leading-[1.6] text-text-on-light-muted md:text-[18px]">
          Não são pessoas que participaram de mais um evento. São pessoas que
          começaram a viver resultados diferentes.
        </p>

        <div className="mt-12 divide-y divide-text-on-light-muted/15 border-t border-text-on-light-muted/15">
          {stats.map((stat) => (
            <div key={stat.label} className="py-8">
              <p className="font-serif text-[40px] font-normal leading-none text-text-on-light md:text-[48px]">
                {stat.value}
              </p>
              <p className="mono-label mt-3 text-[13px] uppercase text-text-on-light-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {videoIds.map((videoId) => (
            <VideoCard key={videoId} videoId={videoId} />
          ))}
        </div>
      </Container>
    </section>
  );
}
