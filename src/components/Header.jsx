import { useEffect, useState } from "react";
import Container from "./Container";
import Button from "./Button";
import { MountainIcon } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle" : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <a href="#topo" className="flex items-center gap-3">
          <MountainIcon className="h-8 w-8 text-accent-primary" />
          <div className="leading-tight">
            <div className="font-sans text-sm font-semibold tracking-[0.18em] text-text-primary">
              METAMORFASE
            </div>
            <div className="hidden text-[10px] tracking-[0.12em] text-text-secondary sm:block">
              O PRÓXIMO NÍVEL COMEÇA AQUI
            </div>
          </div>
        </a>
        <Button href="#precos" size="sm">
          Garantir vaga
        </Button>
      </Container>
    </header>
  );
}
