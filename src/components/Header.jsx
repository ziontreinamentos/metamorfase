import { useEffect, useState } from "react";
import Container from "./Container";
import Button from "./Button";
import { LogoFull } from "./Logo";
import { WHATSAPP_LINK } from "../whatsapp";

export default function Header({ variant = "checkout" }) {
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
        <a href="#topo" className="flex items-center">
          <LogoFull className="h-8 md:h-9" />
        </a>
        {variant === "whatsapp" ? (
          <Button href={WHATSAPP_LINK} size="sm">
            Falar com a equipe
          </Button>
        ) : (
          <Button href="#precos" size="sm">
            Garantir vaga
          </Button>
        )}
      </Container>
    </header>
  );
}
