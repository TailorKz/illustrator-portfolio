import { motion } from "framer-motion";
import letterA from "../assets/letters/a.webp";
import letterE from "../assets/letters/e.webp";
import letterN from "../assets/letters/n.webp";
import letterP from "../assets/letters/p.webp";
import letterT from "../assets/letters/t.webp";
import letterY from "../assets/letters/y.webp";
import profile from "../assets/profile.webp";
import { useLanguage } from "../contexts/LanguageContext";
import { FloatingIcon } from "./FloatingIcon";
import { TornEdge } from "./TornEdge";

const PATYNETE = [
  letterP,
  letterA,
  letterT,
  letterY,
  letterN,
  letterE,
  letterT,
  letterE,
];

function SectionTitle() {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative inline-block mb-8"
    >
      <h2 className="font-hand text-6xl md:text-7xl text-ink">
        {t.about.title}
      </h2>
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
function LetterName() {
  return (
    <motion.div
      role="img"
      aria-label="Patynete"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex justify-center items-end gap-0.5 sm:gap-1 md:gap-1.5 mt-10"
    >
      {PATYNETE.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -8 : 8 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            delay: 0.1 + i * 0.08,
            type: "spring",
            stiffness: 260,
            damping: 14,
          }}
          className="h-7 sm:h-8 md:h-10"
        >
          <motion.img
            src={src}
            alt=""
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1.8 + (i % 3) * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 + i * 0.15,
            }}
            className="h-full w-auto object-contain drop-shadow-md select-none pointer-events-none"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative flex w-full min-h-screen flex-col items-center bg-[#fffedf] pb-24 pt-16 md:pt-24"
    >
      {/* Efeito de Papel/Cartaz */}
      <div
        className="paper-grain absolute inset-0 z-0 pointer-events-none opacity-60"
        aria-hidden="true"
      />

      {/* ELEMENTOS FLUTUANTES NO FUNDO */}
      <FloatingIcon
        top="15%"
        right="5%"
        duration={6}
        rotate={15}
        driftX={-10}
        className="hidden md:block z-0 opacity-60"
      >
        <img src="/borboleta.webp" alt="" className="w-20" />
      </FloatingIcon>
      <FloatingIcon
        bottom="25%"
        left="2%"
        duration={8}
        rotate={-10}
        driftX={10}
        className="hidden lg:block z-0 opacity-50"
      >
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
                {t.about.conteninicio}{" "}
                <strong className="text-ink font-bold">
                  Patrícia Philippsen Gabriel,{" "}
                </strong>
                {t.about.content1}
              </p>
              <p>
                {t.about.content2}
                <strong className="text-ink font-bold">
                  {" "}
                  {t.about.content2_1}
                </strong>{" "}
                <br />
                <br />
                {t.about.content3}
              </p>
              <p>{t.about.content4}</p>
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
                <img
                  src={profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="absolute bottom-5 left-0 w-full text-center font-hand text-3xl text-ink-soft">
                {t.about.me}
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

        {/* LINHA PONTILHADA DE SEPARAÇÃO */}
        <div className="w-full flex justify-center mt-20 mb-8 opacity-40">
          <svg
            className="w-full max-w-2xl h-6 overflow-visible"
            viewBox="0 0 400 20"
            fill="none"
            stroke="var(--color-ink-soft)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            preserveAspectRatio="none"
          >
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
              <span className="text-3xl">🎓</span> {t.about.cursos}
            </h3>
            <div className="flex flex-col gap-10 relative border-l-2 border-pink-200 ml-3 pl-8">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#fffedf] bg-pink-400" />
                <h4 className="font-sans font-bold text-ink text-xl">
                  Concept Art
                </h4>
                <p className="font-sans text-sm text-pink-500 font-bold mb-2">
                  EBAC - Escola Britânica de Artes Criativas e Tecnologia • 2025
                </p>
                <p className="font-sans text-ink-soft leading-relaxed">
                  {t.about.concepttexto}
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#fffedf] bg-pink-400" />
                <h4 className="font-sans font-bold text-ink text-xl">
                  {t.about.ilustrador}
                </h4>
                <p className="font-sans text-sm text-pink-500 font-bold mb-2">
                  EBAC - Escola Britânica de Artes Criativas e Tecnologia • 2025
                </p>
                <p className="font-sans text-ink-soft leading-relaxed">
                  {t.about.ilustradortexto}
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
              <span className="text-3xl">💼</span> {t.about.experiencia}
            </h3>
            <div className="flex flex-col gap-10 relative border-l-2 border-butter-deep/40 ml-3 pl-8">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#fffedf] bg-butter-deep" />
                <h4 className="font-sans font-bold text-ink text-xl">
                  Designer
                </h4>
                <p className="font-sans text-sm text-butter-deep font-bold mb-2">
                  {t.about.experienciaano}
                </p>
                <p className="font-sans text-ink-soft leading-relaxed">
                  {t.about.experienciatexto1}
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-[#fffedf] bg-butter-deep" />
                <h4 className="font-sans font-bold text-ink text-xl">
                  {t.about.experienciatitulo2}
                </h4>
                <p className="font-sans text-sm text-butter-deep font-bold mb-2">
                  {t.about.experiencia2ano}
                </p>
                <p className="font-sans text-ink-soft leading-relaxed">
                  {t.about.experienciatexto2}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <LetterName />
      </div>

      <TornEdge bottomColor="#e7ffe9" />
    </section>
  );
}
