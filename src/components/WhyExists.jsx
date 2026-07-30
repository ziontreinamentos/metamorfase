import Container from "./Container";
import Eyebrow from "./Eyebrow";
import diegoPhoto from "../assets/diego-photo.jpg";
import TopoTexture from "./TopoTexture";

export default function WhyExists() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-12 md:py-20">
      <TopoTexture />
      <Container className="relative max-w-3xl">
        <Eyebrow>Por que o Metamorfase existe</Eyebrow>
        <h2 className="mt-6 font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
          Por que o Metamorfase existe
        </h2>
        <p className="mt-6 text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Eu vendia picolé quando criança. Depois virei analista de TI,
          gerente administrativo, e cheguei a liderar equipes numa
          multinacional como a Ambev, analisando indicadores de alta
          performance. De fora, minha trajetória parecia certa em cada
          etapa.
        </p>
        <p className="mt-4 text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Por dentro, eu não sabia parar. Gerenciei uma empresa, empreendi
          em outra, trabalhava cerca de 16 horas por dia, porque desde
          criança eu tinha uma busca incessante por ser o melhor em tudo:
          filho, aluno, profissional.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-4 border-y border-border-subtle py-8 sm:gap-8">
          <div>
            <p className="font-serif text-[32px] leading-none text-accent-primary md:text-[40px]">
              16h
            </p>
            <p className="mono-label mt-2 text-[11px] uppercase leading-snug text-text-secondary md:text-[12px]">
              por dia, todos os dias
            </p>
          </div>
          <div>
            <p className="font-serif text-[32px] leading-none text-accent-primary md:text-[40px]">
              30
            </p>
            <p className="mono-label mt-2 text-[11px] uppercase leading-snug text-text-secondary md:text-[12px]">
              anos quando a crise chegou
            </p>
          </div>
          <div>
            <p className="font-serif text-[32px] leading-none text-accent-primary md:text-[40px]">
              1 ano
            </p>
            <p className="mono-label mt-2 text-[11px] uppercase leading-snug text-text-secondary md:text-[12px]">
              só entendendo o padrão
            </p>
          </div>
        </div>

        <h3 className="mt-10 font-serif text-[22px] font-medium leading-[1.2] text-text-primary md:text-[26px]">
          A crise que virou o método
        </h3>

        <p className="mt-4 text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Aos 30 anos, essa busca virou crise de ansiedade, depressão e
          procrastinação. Foi aí que entendi que o problema nunca tinha
          sido esforço. Eu carregava peso que não era mais meu, e ninguém
          nunca tinha me mostrado isso antes.
        </p>
        <p className="mt-4 text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Depois de começar minha terapia, voltei pra casa decidido a
          assumir as rédeas da minha vida. Encerrei relacionamentos que não
          faziam sentido, saí de empresas que não me representavam mais.
        </p>
        <p className="mt-4 text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Passei um ano me dedicando só a entender esse padrão a fundo,
          incluindo uma pós-graduação em Neurociências no Instituto Albert
          Einstein, em São Paulo, e mais de nove formações complementares.
        </p>
        <p className="mt-4 text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
          Depois de atender mais de 1.000 pessoas individualmente,
          desenvolvi a metodologia ILP (Identificação, Liberação e
          Planejamento), que hoje sustenta tudo que entrego no Metamorfase.
        </p>

        <div className="mt-10 rounded-2xl border border-border-highlight bg-bg-card-elevated p-8 shadow-[0_0_30px_#e8823c1f] md:p-10">
          <p className="font-serif text-[22px] leading-[1.4] text-text-primary md:text-[28px]">
            O Metamorfase é a síntese do que eu queria ter encontrado quando
            mais precisei: não mais um discurso bonito, mas 3 dias de
            prática real pra identificar o padrão, liberar o peso e
            planejar o próximo passo.
          </p>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <img
            src={diegoPhoto}
            alt="Diego Corrêa"
            className="h-16 w-16 rounded-2xl object-cover object-top md:h-20 md:w-20"
          />
          <div>
            <p className="font-serif text-[18px] font-medium text-text-primary md:text-[20px]">
              Diego Corrêa
            </p>
            <p className="mono-label mt-1 text-[12px] uppercase text-text-secondary">
              Criador do Metamorfase · +10 anos estudando comportamento e
              neurociência · +1.000 pessoas atendidas individualmente
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
