import Container from "./Container";
import TopoTexture from "./TopoTexture";
import luanaPhoto from "../assets/luana-photo.jpg";

export default function AboutLuana() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary py-10 md:py-16">
      <TopoTexture />
      <Container className="relative max-w-3xl">
        <div className="grid items-center gap-8 md:grid-cols-[220px_1fr] md:gap-12">
          <img
            src={luanaPhoto}
            alt="Luana Corrêa"
            className="mx-auto aspect-[3/4] w-full max-w-[200px] rounded-2xl border border-border-subtle object-cover shadow-[0_0_30px_#0000004d] md:mx-0"
          />

          <div>
            <h3 className="font-serif text-[20px] font-medium leading-[1.25] text-text-primary md:text-[24px]">
              Ao lado dele, quem sustenta parte da jornada
            </h3>
            <p className="mt-4 text-[15px] leading-[1.6] text-text-secondary md:text-[16px]">
              Ao lado do Diego, conduzindo parte da imersão, está Luana
              Corrêa, parceira de vida e de trabalho. Formada em Educação
              Física, com duas pós-graduações em Biomecânica, ela passou
              quase uma década atuando na área de atividade física, de
              professora a personal trainer, até se tornar empresária ao
              lado dele.
            </p>
            <p className="mt-4 text-[15px] leading-[1.6] text-text-secondary md:text-[16px]">
              Luana também passou pelas mesmas formações que moldaram o
              método do Diego, e hoje conduz junto os treinamentos e as
              dinâmicas ligadas a corpo, energia e saúde dentro do
              Metamorfase. Não é teoria: é o que ela e o Diego constroem
              juntos, todos os dias.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
