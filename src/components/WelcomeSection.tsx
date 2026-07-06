import { motion } from "framer-motion";
import { TornEdge } from "./TornEdge";
import { FloatingIcon } from "./FloatingIcon";
import { FlowerIcon, SparkleIcon, PenIcon, PaletteIcon } from "./Icons";

export function WelcomeSection() {
  return (
    <section
      id="welcome"
      // pb-20 serve para dar espaço para o papelzinho
      className="relative z-20 w-full bg-[#fae1db] flex items-start justify-center pt-8 md:pt-10 px-4 sm:px-8 pb-4"
    >

       {/* Textura de papel/cartolina sobre o rosa */}
+      <div
      className="paper-grain absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
      {/* ESTRELAS */}
      <motion.img
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        src="/estrelas1.png"
        alt=""
        className="absolute top-32 left-4 md:left-20 w-24 md:w-32 z-50 drop-shadow-md opacity-90"
      />
      <motion.img
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        src="/estrelas2.png"
        alt=""
        className="absolute bottom-86 left-8 md:left-20 w-20 md:w-28 z-50 drop-shadow-md opacity-90"
      />
      <motion.img
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        src="/estrelas1.png"
        alt=""
        className="absolute top-34 right-4 md:right-12 w-20 md:w-32 z-50 drop-shadow-md opacity-80 rotate-45"
      />
      <motion.img
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        src="/estrelas2.png"
        alt=""
        className="absolute bottom-32 right-12 md:right-74 w-16 md:w-24 z-50 drop-shadow-md opacity-90 -rotate-12 -scale-x-100"
      />
{/* flores, brilhos e icones soltos no fundo */}
      <FloatingIcon
        top="24%"
        left="3%"
        duration={6}
        rotate={-8}
        driftX={10}
        driftY={-14}
        className="hidden sm:block z-40"
      >
        <FlowerIcon className="h-9 w-9 text-pink-deep/80 drop-shadow-md md:h-12 md:w-12" />
      </FloatingIcon>

      <FloatingIcon
        bottom="20%"
        left="10%"
        duration={7.5}
        delay={0.6}
        rotate={10}
        driftX={-8}
        driftY={12}
        className="hidden md:block z-40"
      >
        <FlowerIcon className="h-7 w-7 -scale-x-100 text-butter-deep/80 drop-shadow-md md:h-10 md:w-10" />
      </FloatingIcon>

      <FloatingIcon
        top="12%"
        right="8%"
        duration={3.4}
        driftX={4}
        driftY={-10}
        className="z-40"
      >
        <SparkleIcon className="h-6 w-6 text-butter-deep drop-shadow md:h-8 md:w-8" />
      </FloatingIcon>

      <FloatingIcon
        bottom="16%"
        right="4%"
        duration={4}
        delay={1}
        driftX={-6}
        driftY={8}
        className="hidden sm:block z-40"
      >
        <SparkleIcon className="h-5 w-5 text-pink drop-shadow md:h-7 md:w-7" />
      </FloatingIcon>

      <FloatingIcon
        top="36%"
        right="2%"
        duration={5.5}
        rotate={-14}
        driftX={-6}
        driftY={-8}
        className="hidden lg:block z-40 origin-bottom"
      >
        <PenIcon className="h-8 w-8 text-ink-soft drop-shadow-md md:h-11 md:w-11" />
      </FloatingIcon>

      <FloatingIcon
        bottom="6%"
        left="4%"
        duration={6.5}
        delay={0.4}
        rotate={8}
        driftX={8}
        driftY={10}
        className="hidden md:block z-40"
      >
        <PaletteIcon className="h-9 w-9 text-kraft-deep drop-shadow-md md:h-12 md:w-12" />
      </FloatingIcon>
      {/* PRANCHETA ROSA */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[1050px] bg-[#fbc6ce] rounded-[32px] md:rounded-[48px] flex items-center justify-center p-6 sm:p-12 md:p-16 border-[2px] border-white/40"
      >
        {/* Folha rasgada (Fundo) */}
        <img
          src="/folha.png"
          alt="Folha de caderno rasgada"
          className="absolute left-[-2%] md:left-[2%] top-[5%] h-[85%] w-auto object-contain z-10 drop-shadow-lg rotate-1"
        />
        <img
          src="/canetas.png"
          alt="Canetas coloridas"
          className="absolute bottom-4 right-[-20px] md:right-[-40px] w-32 md:w-85 z-40 hidden md:block rotate-[-5deg] -scale-x-100"
        />

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

          className="relative z-20 w-full max-w-[800px] flex flex-col items-center justify-center py-12 md:py-16"
        >
          {/* PAPEL QUADRICULADO PRINCIPAL */}
          <div
            className="absolute inset-0 bg-white rounded-md shadow-xl border border-gray-200/60 transform -rotate-2"
            style={{
              backgroundImage:
                "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          >
            <img
              src="/clips.png"
              alt=""
              className="absolute top-[-25px] left-6 md:left-12 w-10 rotate-42 md:w-18 drop-shadow-md"
            />
            <img
              src="/clippreto.png"
              alt=""
              className="absolute top-[-48px] right-24 md:right-40 w-12 md:w-26 drop-shadow-lg"
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
              className="absolute top-[-10px] right-2 md:right-2 w-14 md:w-35 drop-shadow-xl origin-top"
            />
            <div className="absolute top-1/2 left-2 md:left-6 -translate-y-1/2 flex flex-col items-center">
              <img
                src="/alfinete.png"
                alt=""
                className="w-18 md:w-18 drop-shadow-lg relative z-30 mb-[-15px] bottom-26 right-24"
              />
              <img
                src="/laco.png"
                alt=""
                className="w-36 md:w-46 drop-shadow-md rotate-[-15deg] relative z-20 bottom-26 right-19"
              />
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: -4 }}
            className="absolute bottom-[-50px] md:bottom-[-60px] left-[-20px] md:left-[-20px] w-[180px] md:w-[220px] z-50 cursor-pointer rotate-[-6deg]"
          >
            <img
              src="/papelzinho.png"
              alt=""
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-hand text-2xl md:text-3xl lg:text-3xl text-gray-700 leading-tight text-center pb-2">
                let's create <br /> something amazing{" "}
                <span className="text-pink-500">♥</span>
              </p>
            </div>
          </motion.div>

          {/* TEXTO E BOTÃO*/}
          <div className="relative z-30 flex flex-col items-center text-center px-6 pointer-events-auto mt-4">
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="shine-text inline-block font-['Parisienne',_cursive] text-7xl md:text-[100px] leading-[1.4] px-4 md:px-6 py-2 md:py-3 -translate-y-[10px] md:-translate-y-[15px] -mb-6 md:-mb-9"
            >
              welcome
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-['Parisienne',_cursive] text-3xl md:text-5xl text-gray-700 mb-1 mt-2"
            >
              to my
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="hover"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.045, delayChildren: 0.9 },
                },
                hover: { transition: { staggerChildren: 0.05 } },
              }}
              className="relative flex flex-col items-center mt-2 md:mt-4"
            >
              <h1 className="font-['Kaushan_Script',_cursive] text-[80px] md:text-[130px] leading-none text-[var(--color-ink)] tracking-tight flex">
                {"Portfolio".split("").map((letter, i) => (
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
                className="w-64 md:w-[340px] mt-[-5px] md:mt-[-10px] text-[var(--color-ink)] transform rotate-1"
                viewBox="0 0 300 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              >
                <motion.path
                  d="M10,20 Q150,5 290,20 Q150,35 20,30"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.9, ease: "easeInOut" }}
                />
              </motion.svg>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-12 md:mt-16 z-40 flex flex-col items-center cursor-pointer group"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="text-pink-500 font-sans font-bold tracking-widest text-sm uppercase mb-2 group-hover:text-pink-400 transition-colors">
                See More
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

      {/* RASGO DE PAPEL */}
      <TornEdge />
    </section>
  );
}
