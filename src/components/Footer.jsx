import Container from "./Container";
import { LogoFull } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-primary py-12">
      <Container className="flex flex-col items-start gap-4">
        <LogoFull className="h-8" />
        <p className="max-w-md text-[13px] leading-[1.6] text-text-muted">
          METAMORFASE: uma imersão presencial de inteligência emocional.
          Vagas limitadas.
        </p>
      </Container>
    </footer>
  );
}
