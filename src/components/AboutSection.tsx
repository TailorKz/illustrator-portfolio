import { motion } from "framer-motion";
import { TornEdge } from "./TornEdge";
import profile from "../assets/profile.webp";
import { FloatingIcon } from "./FloatingIcon";

function SectionTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative inline-block mb-8"
    >
      <h2 className="font-hand text-4xl text-ink md:text-6xl">About me</h2>
      <motion.svg
        className="absolute -bottom-2 left-0 h-3 w-[85%]"
        viewBox="0 0 200 16"
        fill="none"
        stroke="var(--color-pink)"
        strokeWidth="4"
        strokeLinecap="round"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M4 10C24 4 40 13 60 8C82 3 96 12 116 7C138 2 152 11 172 6C182 4 190 7 196 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
        />
      </motion.svg>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex w-full min-h-screen flex-col items-center bg-[#fffedf] pb-24 pt-16 md:pt-24"
    >
      {/* Efeito de Papel/Cartaz sobre a cor Amarelo Clarinho */}
      <div
        className="paper-grain absolute inset-0 z-0 pointer-events-none opacity-60"
        aria-hidden="true"
      />
 {/* ELEMENTOS FLUTUANTES NO FUNDO */}
      <FloatingIcon top="15%" right="5%" duration={6} rotate={15} driftX={-10} className="hidden md:block z-0 opacity-60">
        <img src="/borboleta.webp" alt="" className="w-20" />
      </FloatingIcon>
      <FloatingIcon bottom="25%" left="2%" duration={8} rotate={-10} driftX={10} className="hidden lg:block z-0 opacity-50">
        <img src="/florespequenas.webp" alt="" className="w-24" />
      </FloatingIcon>
      
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 flex flex-col">
        {/* PARTE SUPERIOR: Texto/Título (Esquerda) e Foto (Direita) */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex w-full md:w-1/2 flex-col items-start">
            <SectionTitle />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col gap-5 font-sans text-lg text-ink-soft leading-relaxed"
            >
              <p>
                Olá! Sou{" "}
                <strong className="text-ink font-bold">
                  Patrícia Philippsen Gabriel,{" "}
                </strong>
                também conhecida como @patynete nas redes sociais, tenho 21 anos
                e sou de Santa Catarina. A paixão pela arte sempre caminhou
                junto comigo desde a infância e as ideias nunca estiveram em
                falta, criatividade e amor são palavras chaves para minhas
                inspirações e projetos!
              </p>
              <p>
                No meu portifólio você verá trabalhos diversos, como em:
                <strong className="text-ink font-bold"> Ilustração Digital, Aquarela, Tinta acrílica, Tinta à óleo,
                Lápis de cor, Marcadores e Grafite.</strong> <br/><br/>Atualmente estou cursando
                Ilustração e Concept Art pela EBAC, onde busco evoluir e
                aperfeiçoar em todos os âmbitos possíveis para que possa
                entregar o melhor de mim em minhas obras.
              </p>
              <p>Será um prazer trabalharmos juntos para criar algo incrível! ♡</p>
            </motion.div>
          </div>

          {/* MOLDURA COM FOTO (Estilo Polaroid) */}
          <motion.div
            initial={{ opacity: 0, rotate: 6, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: 3, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative w-full max-w-[320px] md:w-1/2 mx-auto md:ml-auto"
          >
            {/* CORAÇÕES CRAVADOS (Canto Superior Esquerdo) */}
            <img
              src="/heart.webp"
              alt="Corações"
              className="absolute -top-10 -right-10 md:-top-12 md:-right-12 w-28 md:w-32 h-auto z-30 drop-shadow-lg rotate-[-15deg] pointer-events-none"
            />

            {/* Fita Adesiva Decorativa */}
            <div className="absolute -top-4 left-1/2 z-20 h-8 w-24 -translate-x-1/2 rotate-[-5deg] border border-pink-200/50 bg-pink-100/60 shadow-sm backdrop-blur-sm" />

            <div className="bg-white p-4 pb-16 shadow-[0_10px_40px_rgba(58,46,46,0.15)] rounded-sm relative z-10">
              <div className="aspect-[3/4] w-full bg-zinc-200 overflow-hidden relative flex items-center justify-center border border-black/5">
                {/* PLACEHOLDER: Quando tiver a foto, comente este span e habilite a tag img abaixo */}

                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="absolute bottom-5 left-0 w-full text-center font-hand text-3xl text-ink-soft">
                Me, 2026
              </p>
            </div>

            {/* TULIPAS CRAVADAS (Canto Inferior Direito) */}
            <img
              src="/tulipasrosas.webp"
              alt="Tulipas Rosas"
              className="absolute -bottom-10 -right-12 md:-bottom-12 md:-left-16 w-36 md:w-34 h-auto z-30 drop-shadow-xl -rotate-[22deg] pointer-events-none"
            />
          </motion.div>
        </div>
<div className="w-full flex justify-center mt-20 mb-8 opacity-40">
          <svg className="w-full max-w-2xl h-6" viewBox="0 0 400 20" fill="none" stroke="var(--color-ink-soft)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none">
            <motion.path 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              d="M10 10 Q 40 2 70 12 T 130 8 T 190 12 T 250 8 T 310 12 T 390 10" 
              strokeDasharray="6 6"
            />
          </svg>
        </div>
        {/* PARTE INFERIOR: Cursos e Experiência Divididos */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          {/* CURSOS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="font-hand text-4xl text-pink-500 mb-8 flex items-center gap-3">
              <span className="text-3xl">🎓</span> Cursos
            </h3>
            <div className="flex flex-col gap-10 relative border-l-2 border-pink-200 ml-3 pl-8">
              <div className="relative">
                {/* O Bolinho da Timeline que tem o fundo exatamente igual a página para parecer vazado */}
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#fffedf] bg-pink-400" />
                <h4 className="font-sans font-bold text-ink text-xl">
                  Concept Art
                </h4>
                <p className="font-sans text-sm text-pink-500 font-bold mb-2">
                  EBAC - Escola Britânica de Artes Criativas e Tecnologia • 2025
                </p>
                <p className="font-sans text-ink-soft leading-relaxed">
                  Formação voltada para o desenvolvimento de habilidades técnicas e criativas na criação de artes conceituais para games, animações e produções audiovisuais. 
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#fffedf] bg-pink-400" />
                <h4 className="font-sans font-bold text-ink text-xl">
                  Ilustrador Profissional
                </h4>
                <p className="font-sans text-sm text-pink-500 font-bold mb-2">
                  EBAC - Escola Britânica de Artes Criativas e Tecnologia • 2025
                </p>
                <p className="font-sans text-ink-soft leading-relaxed">
                  Formação completa voltada para o mercado de ilustração, com foco em desenvolvimento de estilo próprio, técnicas tradicionais e digitais, e aplicação da ilustração em diferentes segmentos como editorial, publicitário, literário e artístico.
                </p>
              </div>
            </div>
          </motion.div>

          {/* EXPERIÊNCIA PROFISSIONAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="font-hand text-4xl text-butter-deep mb-8 flex items-center gap-3">
              <span className="text-3xl">💼</span> Experiência Profissional
            </h3>
            <div className="flex flex-col gap-10 relative border-l-2 border-butter-deep/40 ml-3 pl-8">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#fffedf] bg-butter-deep" />
                <h4 className="font-sans font-bold text-ink text-xl">
                  Ilustradora Freelancer
                </h4>
                <p className="font-sans text-sm text-butter-deep font-bold mb-2">
                  Autônomo • 2021 - Atual
                </p>
                <p className="font-sans text-ink-soft leading-relaxed">
                  Atuo como ilustradora freelancer, criando imagens que contam histórias, especialmente através de personagens originais (OCs), uma das áreas que mais tenho explorado e desenvolvido atualmente, além de ilustrações digitais para estampas e capas de livros até projetos de identidade visual, como logotipos com elementos ilustrados. 
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#fffedf] bg-butter-deep" />
                <h4 className="font-sans font-bold text-ink text-xl">
                  Designer
                </h4>
                <p className="font-sans text-sm text-butter-deep font-bold mb-2">
                  Taggy Contact • Outubro 2025
                </p>
                <p className="font-sans text-ink-soft leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates voluptatum nesciunt cum, nemo alias eligendi. Cum perferendis neque sunt, dolorum nesciunt ex sapiente? Deserunt, nulla beatae? Quisquam, ipsum natus! Recusandae?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Adicionei a transição para a próxima tela de Contato! */}
      <TornEdge bottomColor="#e7ffe9" />
    </section>
  );
}
