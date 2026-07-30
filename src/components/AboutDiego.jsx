import Container from "./Container";
import Eyebrow from "./Eyebrow";
import diegoPhoto from "../assets/diego-photo.jpg";
import TopoTexture from "./TopoTexture";

export default function AboutDiego() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-12 md:py-20">
      <TopoTexture />
      <Container className="relative">
        <div className="grid items-center gap-10 md:grid-cols-[340px_1fr] md:gap-16">
          <img
            src={diegoPhoto}
            alt="Diego Corrêa"
            className="mx-auto w-full max-w-xs rounded-2xl object-cover object-top shadow-[0_0_40px_#0000004d] md:mx-0 md:max-w-none"
          />

          <div>
            <Eyebrow>Quem conduz a jornada</Eyebrow>
            <h2 className="mt-6 font-serif text-[28px] font-normal leading-[1.15] text-text-primary md:text-[42px]">
              Quem é Diego Corrêa
            </h2>
            <p className="mt-6 text-[16px] leading-[1.6] text-text-secondary md:text-[18px]">
              Diego Corrêa é mentor, treinador comportamental e especialista
              em desenvolvimento humano. Há mais de uma década estuda
              comportamento, neurociência, hipnose e alta performance para
              ajudar pessoas a romper padrões que limitam seus resultados e
              construírem uma vida com mais propósito, liberdade e
              realização. É o criador da Metamorfase, uma imersão prática
              que já impactou centenas de vidas ao transformar conhecimento
              em mudança real.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
