import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import { ArrowRightIcon, PlayIcon } from "./Icons";
import { getYouTubeThumb, YouTubePlayer, useYouTubePlay } from "./YouTubeEmbed";

const stats = [
  { value: "+35", label: "dinâmicas em 3 dias" },
  { value: "5", label: "áreas da vida trabalhadas" },
  { value: "Centenas", label: "de escaladores já formados" },
];

const videos = [
  { id: "b33J7vXNN0o", caption: "Liberou a trava profissional" },
  { id: "vZY3bsRYuWQ", caption: "Liberou a insegurança" },
  { id: "qTKgJQqBMSs", caption: "Eliminou o medo de falar em público" },
  { id: "stfhZktM2K0", caption: "Salto financeiro e no relacionamento" },
];

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
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-bg-primary"
    >
      <img
        src={getYouTubeThumb(videoId)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
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

function VideoCarousel() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    const card = track?.children[index];
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const stepScroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.children[0];
    const step = firstCard ? firstCard.offsetWidth + 20 : track.clientWidth * 0.8;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const target = Math.min(Math.max(track.scrollLeft + direction * step, 0), maxScroll);
    track.scrollTo({ left: target, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const scrollLeft = track.scrollLeft;

      if (scrollLeft >= maxScroll - 4) {
        setActiveIndex(videos.length - 1);
        return;
      }
      if (scrollLeft <= 4) {
        setActiveIndex(0);
        return;
      }

      const cards = Array.from(track.children);
      let closest = 0;
      let closestDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - track.offsetLeft - scrollLeft);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === videos.length - 1;

  return (
    <div className="mt-16">
      <div className="relative">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="w-[82%] shrink-0 snap-start sm:w-[55%] md:w-[42%] lg:w-[34%]"
            >
              <VideoCard videoId={video.id} />
              <p className="mono-label mt-3 text-[14px] text-text-on-light md:text-[15px]">
                {video.caption}
              </p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => stepScroll(-1)}
          disabled={isFirst}
          aria-label="Depoimento anterior"
          className="absolute left-2 top-[38%] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg-light-card text-accent-primary shadow-[0_4px_20px_#0000001a] transition-opacity disabled:pointer-events-none disabled:opacity-0 md:flex"
        >
          <ArrowRightIcon className="h-5 w-5 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => stepScroll(1)}
          disabled={isLast}
          aria-label="Próximo depoimento"
          className="absolute right-2 top-[38%] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg-light-card text-accent-primary shadow-[0_4px_20px_#0000001a] transition-opacity disabled:pointer-events-none disabled:opacity-0 md:flex"
        >
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {videos.map((video, i) => (
          <button
            key={video.id}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Ir para o depoimento ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === activeIndex
                ? "w-6 bg-accent-primary"
                : "w-2 bg-text-on-light-muted/30 hover:bg-text-on-light-muted/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-bg-light py-12 md:py-20">
      <Container>
        <Eyebrow light>Quem já escalou</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-[28px] font-normal leading-[1.15] text-text-on-light md:text-[42px]">
          O que acontece quando o peso finalmente sai das costas.
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
      </Container>

      <div className="pl-6 md:pl-10 lg:pl-20">
        <VideoCarousel />
      </div>

      <Container>
        <p className="mt-8 text-[13px] italic leading-[1.6] text-text-on-light-muted">
          Resultados individuais. Cada depoimento reflete a experiência real
          de quem participou; os resultados podem variar de pessoa para
          pessoa.
        </p>
      </Container>
    </section>
  );
}
