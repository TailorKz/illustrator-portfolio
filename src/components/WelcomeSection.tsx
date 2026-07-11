import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { FloatingIcon } from "./FloatingIcon";
import { FlowerIcon, PaletteIcon, PenIcon, SparkleIcon } from "./Icons";
import { TornEdge } from "./TornEdge";

// Recebemos a prop isLoading
export function WelcomeSection({ isLoading }: { isLoading?: boolean }) {
  const { t } = useLanguage();
  const controls = useAnimation();

  useEffect(() => {
    // Só dispara o início das animações quando o isLoading for falso
    if (!isLoading) {
      controls.start("visible");
    }
  }, [isLoading, controls]);

  return (
    <section
      id="welcome"
      className="secao-welcome relative z-20 w-full bg-[#fae1db] flex items-start justify-center pb-4"
    >
      <div
        className="paper-grain absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ícones de Fundo */}
      <motion.img
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        src="/estrelas1.png"
        alt=""
        className="estrela-1 absolute z-50 drop-shadow-md opacity-90"
      />
      <motion.img
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        src="/estrelas2.png"
        alt=""
        className="estrela-2 absolute z-50 drop-shadow-md opacity-90"
      />
      <motion.img
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        src="/estrelas1.png"
        alt=""
        className="estrela-3 absolute z-50 drop-shadow-md opacity-80 rotate-45"
      />
      <motion.img
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        src="/estrelas2.png"
        alt=""
        className="estrela-4 absolute z-50 drop-shadow-md opacity-90 -rotate-12 -scale-x-100"
      />

      {/* Container dos Ícones SVG */}
      <div className="container-icones">
        <FloatingIcon
          duration={6}
          rotate={-8}
          driftX={10}
          driftY={-14}
          className="icone-flutuante-1 z-40"
        >
          <FlowerIcon className="icone-svg-flor1 text-pink-deep/80 drop-shadow-md" />
        </FloatingIcon>
        <FloatingIcon
          duration={7.5}
          delay={0.6}
          rotate={10}
          driftX={-8}
          driftY={12}
          className="icone-flutuante-2 z-40"
        >
          <FlowerIcon className="icone-svg-flor2 -scale-x-100 text-butter-deep/80 drop-shadow-md" />
        </FloatingIcon>
        <FloatingIcon
          duration={3.4}
          driftX={4}
          driftY={-10}
          className="icone-flutuante-3 z-40"
        >
          <SparkleIcon className="icone-svg-brilho1 text-butter-deep drop-shadow" />
        </FloatingIcon>
        <FloatingIcon
          duration={4}
          delay={1}
          driftX={-6}
          driftY={8}
          className="icone-flutuante-4 z-40"
        >
          <SparkleIcon className="icone-svg-brilho2 text-pink drop-shadow" />
        </FloatingIcon>
        <FloatingIcon
          duration={5.5}
          rotate={-14}
          driftX={-6}
          driftY={-8}
          className="icone-flutuante-5 z-40 origin-bottom"
        >
          <PenIcon className="icone-svg-caneta text-ink-soft drop-shadow-md" />
        </FloatingIcon>
        <FloatingIcon
          duration={6.5}
          delay={0.4}
          rotate={8}
          driftX={8}
          driftY={10}
          className="icone-flutuante-6 z-40"
        >
          <PaletteIcon className="icone-svg-paleta text-kraft-deep drop-shadow-md" />
        </FloatingIcon>
      </div>

      {/* PRANCHETA ROSA */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { scale: 0.95, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
        }}
        className="prancheta-rosa relative z-10 w-full bg-[#fbc6ce] flex items-center justify-center border-[2px] border-white/40"
      >
        <img
          src="/folha.png"
          alt="Folha de caderno rasgada"
          className="imagem-folha absolute object-contain z-10 drop-shadow-lg rotate-1"
        />

        <img
          src="/canetas.png"
          alt="Canetas coloridas"
          className="imagem-canetas absolute z-40 rotate-[-5deg] -scale-x-100"
        />

        {/* QUADRICULADO PRINCIPAL */}
        <motion.div
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
            },
          }}
          className="container-quadriculado relative z-20 w-full flex flex-col items-center justify-center"
        >
          <div
            className="fundo-quadriculado absolute inset-0 bg-white rounded-md shadow-xl border border-gray-200/60 transform -rotate-2"
            style={{
              backgroundImage:
                "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          >
            {/* Decorações do quadro */}
            <img
              src="/clips.png"
              alt=""
              className="imagem-clips absolute rotate-42 drop-shadow-md"
            />
            <img
              src="/clippreto.png"
              alt=""
              className="imagem-clip-preto absolute drop-shadow-lg"
            />

            <motion.img
              initial={{ rotate: -8 }}
              animate={{ rotate: 8 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              src="/chaveirinho.png"
              alt=""
              className="imagem-chaveirinho absolute drop-shadow-xl origin-top"
            />

            <div className="container-alfinete absolute flex flex-col items-center">
              <img
                src="/alfinete.png"
                alt=""
                className="imagem-alfinete drop-shadow-lg relative z-30"
              />
              <img
                src="/laco.png"
                alt=""
                className="imagem-laco drop-shadow-md rotate-[-15deg] relative z-20"
              />
            </div>
          </div>

          {/* PAPELZINHO LET'S CREATE */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -4 }}
            className="container-papelzinho absolute z-50 cursor-pointer rotate-[-6deg]"
          >
            <img
              src="/papelzinho.png"
              alt=""
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="texto-papelzinho font-hand text-gray-700 leading-tight text-center">
                let's create <br /> something amazing{" "}
                <span className="text-pink-500">✿</span>
              </p>
            </div>
          </motion.div>

          <div className="container-textos relative z-30 flex flex-col items-center text-center pointer-events-auto">
            <motion.h2
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { delay: 0.4, duration: 0.5 },
                },
              }}
              className="texto-saudacao shine-text inline-block font-['Parisienne',_cursive] leading-[1.4]"
            >
              {t.home.greeting}
            </motion.h2>

            {/* SUBTÍTULO */}
            <motion.p
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.7 } },
              }}
              className="texto-subtitulo font-['Parisienne',_cursive] text-gray-700"
            >
              {t.home.subtitle}
            </motion.p>

            <motion.div
              initial="hidden"
              animate={isLoading ? "hidden" : "visible"}
              whileHover="hover"
              whileTap="hover"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.045, delayChildren: 0.9 },
                },
                hover: { transition: { staggerChildren: 0.05 } },
              }}
              className="container-titulo relative flex flex-col items-center"
            >
              <h1 className="texto-titulo font-['Kaushan_Script',_cursive] leading-none text-[var(--color-ink)] tracking-tight flex">
                {t.home.title.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 46,
                        rotate: i % 2 === 0 ? -14 : 14,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotate: 0,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 14,
                        },
                      },
                      hover: {
                        y: [0, -18, 0],
                        rotate: [0, i % 2 === 0 ? -6 : 6, 0],
                        transition: { duration: 0.55, ease: "easeInOut" },
                      },
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>

              <motion.svg
                className="linha-svg text-[var(--color-ink)] transform rotate-1"
                viewBox="0 0 300 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              >
                <motion.path
                  d="M10,20 Q150,5 290,20 Q150,35 20,30"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                      pathLength: 1,
                      opacity: 1,
                      transition: {
                        delay: 1.6,
                        duration: 0.9,
                        ease: "easeInOut",
                      },
                    },
                  }}
                />
              </motion.svg>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { delay: 1.1 } },
              }}
              className="botao-mais z-40 flex flex-col items-center cursor-pointer group"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="text-pink-500 font-sans font-bold tracking-widest text-sm uppercase mb-2 group-hover:text-pink-400 transition-colors">
                {t.home.mais}
              </span>
              <motion.svg
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-8 h-8 text-pink-500 group-hover:text-pink-400 transition-colors"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </motion.svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <TornEdge />
    </section>
  );
}
