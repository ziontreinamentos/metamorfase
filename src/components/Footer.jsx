import Container from "./Container";
import { MountainIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-primary py-12">
      <Container className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6 text-accent-primary" />
          <span className="text-sm font-semibold tracking-[0.18em] text-text-primary">
            METAMORFASE
          </span>
        </div>
        <p className="max-w-md text-[13px] leading-[1.6] text-text-muted">
          METAMORFASE: uma imersão presencial de inteligência emocional.
          Vagas limitadas.
        </p>
      </Container>
    </footer>
  );
}
