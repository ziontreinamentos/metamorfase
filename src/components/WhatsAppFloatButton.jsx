import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./Icons";
import { WHATSAPP_LINK } from "../whatsapp";

const COLLAPSE_NEAR_IDS = ["precos", "cta-final"];

export default function WhatsAppFloatButton() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const targets = COLLAPSE_NEAR_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    );
    if (targets.length === 0) return undefined;

    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target);
          } else {
            visible.delete(entry.target);
          }
        });
        setCollapsed(visible.size > 0);
      },
      { threshold: 0.15 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a equipe pelo WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-cta-green px-4 py-3.5 font-semibold text-cta-text shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-[1.03] hover:bg-cta-green-hover md:bottom-7 md:right-7 md:px-5 md:py-4 ${
        collapsed
          ? "pointer-events-none translate-x-20 opacity-0"
          : "translate-x-0 opacity-100"
      }`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span className="hidden text-[14px] sm:inline md:text-[15px]">
        Falar com a equipe
      </span>
    </a>
  );
}
