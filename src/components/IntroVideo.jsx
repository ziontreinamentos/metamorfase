import { useState } from "react";
import Container from "./Container";
import MountainScene from "./MountainScene";
import { MountainIcon, PlayIcon } from "./Icons";

export default function IntroVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-bg-primary py-14 md:py-24">
      <Container>
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Reproduzir vídeo de introdução do Metamorfase"
          className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-border-subtle"
        >
          <MountainScene className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-bg-primary/35 transition-colors group-hover:bg-bg-primary/20" />

          <div className="absolute left-6 top-6 flex items-center gap-2 md:left-8 md:top-8">
            <MountainIcon className="h-6 w-6 text-accent-primary" />
            <span className="text-sm font-semibold tracking-[0.18em] text-text-primary">
              METAMORFASE
            </span>
          </div>

          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-bg-primary shadow-lg transition-transform group-hover:scale-105 md:h-20 md:w-20">
              <PlayIcon className="h-7 w-7 translate-x-0.5 md:h-8 md:w-8" />
            </span>
          </span>

          {playing && (
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-bg-primary/70 px-4 py-2 text-xs text-text-secondary">
              Vídeo em breve
            </span>
          )}
        </button>
      </Container>
    </section>
  );
}
