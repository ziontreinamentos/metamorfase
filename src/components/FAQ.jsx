import { useState } from "react";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import { PlusIcon } from "./Icons";
import TopoTexture from "./TopoTexture";

// Só a resposta sobre local muda na lista de espera: ela pressupõe uma turma
// com data confirmada, o que não é o caso enquanto a próxima não é anunciada.
const RESPOSTA_LOCAL_LISTA =
  "As edições acontecem em Guararema, SP. A próxima data e o endereço completo serão anunciados primeiro para quem estiver na lista de espera.";

const faqs = [
  {
    q: "Vale a pena parar três dias?",
    a: "Centenas de escaladores já responderam essa pergunta com a própria vida depois da imersão: em relacionamento, dinheiro, carreira, espiritualidade e saúde. Mas talvez a pergunta mais importante seja outra: quanto custa não ir? Se o padrão que trava você hoje continuar intacto, os próximos 10 anos podem ser exatamente iguais aos últimos 10.",
  },
  {
    q: "Já fiz um evento parecido e não funcionou.",
    a: "A diferença é estrutura: 35+ dinâmicas guiadas pela metodologia ILP, sem venda constante durante o evento.",
  },
  {
    q: "Onde vai ser exatamente?",
    a: "Guararema, SP. Endereço completo enviado após inscrição.",
  },
  {
    q: "Preciso ir sozinho(a)?",
    a: "Individual ou em dupla, como preferir.",
  },
  {
    q: "Preciso já ter feito outro evento antes pra participar?",
    a: "Não é pré-requisito. O Metamorfase foi feito tanto pra quem já está em busca de desenvolvimento pessoal há um tempo quanto pra quem está iniciando agora. O que importa é estar pronto pra viver o processo, não ter currículo de eventos anteriores.",
  },
  {
    q: "E se eu me arrepender?",
    a: "Garantia incondicional: 100% do valor devolvido, sem burocracia.",
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
        <PlusIcon open={open} className="mt-1 h-5 w-5 shrink-0 text-accent-primary" />
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

export default function FAQ({ variant = "checkout" }) {
  const lista = faqs.map((faq) =>
    variant === "waitlist" && faq.q === "Onde vai ser exatamente?"
      ? { ...faq, a: RESPOSTA_LOCAL_LISTA }
      : faq,
  );

  return (
    <section className="relative overflow-hidden bg-bg-primary py-12 md:py-20">
      <TopoTexture />
      <Container className="relative max-w-3xl">
        <Eyebrow>Antes de decidir</Eyebrow>
        <h2 className="mt-6 font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          Perguntas que todo escalador já se fez
        </h2>

        <div className="mt-10">
          {lista.map((faq) => (
            <FaqItem key={faq.q} {...faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}
