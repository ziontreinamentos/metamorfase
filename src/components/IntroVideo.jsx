import Container from "./Container";
import { LogoFull } from "./Logo";
import { PlayIcon } from "./Icons";
import { getYouTubeThumb, YouTubePlayer, useYouTubePlay } from "./YouTubeEmbed";

const VIDEO_ID = "JRBpKBgc3_8";

export default function IntroVideo() {
  const { playing, play } = useYouTubePlay();

  return (
    <section className="bg-bg-primary py-10 md:py-16">
      <Container>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border-subtle bg-bg-card">
          {playing ? (
            <YouTubePlayer videoId={VIDEO_ID} className="absolute inset-0 h-full w-full" />
          ) : (
            <button
              type="button"
              onClick={play}
              aria-label="Reproduzir vídeo de introdução do Metamorfase"
              className="group absolute inset-0 block h-full w-full"
            >
              <img
                src={getYouTubeThumb(VIDEO_ID)}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-bg-primary/35 transition-colors group-hover:bg-bg-primary/20" />

              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
                <LogoFull className="h-6 drop-shadow-lg md:h-7" />
              </div>

              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-primary text-bg-primary shadow-lg transition-transform group-hover:scale-105 md:h-20 md:w-20">
                  <PlayIcon className="h-7 w-7 translate-x-0.5 md:h-8 md:w-8" />
                </span>
              </span>
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
