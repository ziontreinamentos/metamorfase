import Container from "./Container";
import Eyebrow from "./Eyebrow";
import TopoTexture from "./TopoTexture";
import mountainBg from "../assets/impact-mountain.jpg";

const items = [
  "Você faz tudo certo. Estuda, se organiza, se cobra. Mesmo assim sente que sua vida parou de evoluir há anos.",
  "Você já investiu em curso, livro, mentoria, terapia. Cada um te deu um insight novo. Nenhum te mostrou o padrão em si.",
  "Os anos passam, e a versão sua que você sabe que é capaz de ser continua presa dentro da versão que você vive hoje.",
];

export default function Diagnosis() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-12 md:py-20">
      <img
        src={mountainBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/85 to-bg-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/40" />
      <TopoTexture />
      <Container className="relative">
        <Eyebrow>O Diagnóstico</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          O problema nunca foi falta de potencial. Foi o Padrão de Teto que
          você nunca aprendeu a enxergar.
        </h2>
        <p className="mt-6 max-w-2xl text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Você trabalha muito. Busca aprender. Já fez terapia, já fez curso,
          já foi na mentoria certa. E mesmo assim, domingo à noite, a mesma
          sensação de sempre chega, porque existe um padrão específico
          produzindo, sempre, os mesmos resultados.
        </p>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Você não está travado por falta de capacidade. Você está
          carregando peso que não é mais seu (crenças, decisões, situações
          não resolvidas), e ninguém nunca te mostrou como deixar esse peso
          pra trás.
        </p>

        <div className="mt-14 divide-y divide-border-subtle border-t border-border-subtle">
          {items.map((text, i) => (
            <div key={i} className="flex gap-5 py-8 md:gap-8">
              <span className="font-serif text-[36px] leading-none text-accent-primary md:text-[48px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="pt-1 text-[16px] leading-[1.6] text-text-primary md:pt-2 md:text-[18px]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
