import { useState } from "react";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import { ChevronIcon } from "./Icons";

const faqs = [
  {
    q: "Vale a pena parar três dias?",
    a: "A pergunta não é se você consegue parar três dias. É quanto custa continuar repetindo os mesmos resultados pelos próximos anos.",
  },
  {
    q: "Já fiz um evento parecido e não funcionou.",
    a: "O mercado queimou muita gente com promessas rasas. O Metamorfase nasceu dessa insatisfação: não é mais do mesmo. Quem já viveu outras imersões costuma dizer que nunca tinha visto uma profundidade assim.",
  },
  {
    q: "Onde vai ser exatamente?",
    a: "Guararema, interior de São Paulo. O endereço completo e as informações de hospedagem são enviados no grupo exclusivo após sua inscrição.",
  },
  {
    q: "Preciso ir sozinho(a) ou posso levar alguém?",
    a: "Os dois formatos existem: escalada individual ou em dupla, ideal para quem quer atravessar essa jornada ao lado de alguém.",
  },
  {
    q: "Preciso já ter feito outro evento antes pra participar?",
    a: "Não. O Metamorfase pode ser seu primeiro passo presencial ou a continuidade de um processo que você já começou.",
  },
  {
    q: "E se eu me arrepender?",
    a: "Viva os 3 dias completos. Se ao final não fizer sentido pra você, devolvemos 100% do valor investido, sem burocracia.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border-subtle py-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="font-serif text-[18px] font-medium leading-[1.3] text-text-primary md:text-[20px]">
          {q}
        </span>
        <ChevronIcon open={open} className="h-5 w-5 shrink-0 text-accent-primary" />
      </button>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.6] text-text-secondary md:text-[16px]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-bg-primary py-16 md:py-28">
      <Container className="max-w-3xl">
        <Eyebrow>Antes de decidir</Eyebrow>
        <h2 className="mt-6 font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          Perguntas que todo escalador já se fez
        </h2>

        <div className="mt-10">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}
