import { motion } from "framer-motion";

export function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="relative min-h-screen w-full bg-[#fae1db] flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-8"
    >
      {/* ========================================= */}
      {/* ESTRELAS (Agora com z-50 para ficarem BEM ACIMA de todas as folhas) */}
      {/* Para mudar a posição delas, altere o top, bottom, left e right abaixo */}
      {/* ========================================= */}
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
        className="absolute bottom-56 left-8 md:left-20 w-20 md:w-28 z-50 drop-shadow-md opacity-90"
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

      {/* ========================================= */}
      {/* A PRANCHETA ROSA */}
      {/* ========================================= */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[1050px] bg-[#fbc6ce] rounded-[32px] md:rounded-[48px] shadow-2xl flex items-center justify-center p-6 sm:p-12 md:p-16 border-[2px] border-white/40"
      >
        <div className="absolute top-0 left-0 right-0 h-6 bg-white/20 rounded-t-[32px] md:rounded-t-[48px] pointer-events-none" />

        {/* Folha rasgada (Fundo) */}
        <img
          src="/folha.png"
          alt="Folha de caderno rasgada"
          className="absolute left-[-2%] md:left-[2%] top-[5%] h-[85%] w-auto object-contain z-10 drop-shadow-lg rotate-1"
        />

        {/* Canetas */}
        <img
          src="/canetas.png"
          alt="Canetas coloridas"
          className="absolute bottom-4 right-[-20px] md:right-[-40px] w-32 md:w-85 z-40 hidden md:block drop-shadow-2xl rotate-[-5deg] -scale-x-100"

        />

        {/* ========================================= */}
        {/* CONTAINER DA FOLHA PRINCIPAL */}
        {/* ========================================= */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative z-20 w-full max-w-[800px] min-h-[60vh] md:min-h-[65vh] flex flex-col items-center justify-center"
        >
          {/* O PAPEL QUADRICULADO INCLINADO (O texto não fica aqui dentro!) */}
          <div
            className="absolute inset-0 bg-white rounded-md shadow-xl border border-gray-200/60 transform -rotate-2"
            style={{
              backgroundImage:
                "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          >
            {/* Elementos presos na folha (Inclinam junto com ela) */}
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
              className="absolute top-[-10px] right-10 md:right-12 w-14 md:w-35 drop-shadow-xl origin-top"
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

          {/* O PAPELZINHO COM TEXTO (Posicionado no canto esquerdo da folha) */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -4 }}
            className="absolute bottom-[-20px] md:bottom-1 left-[-15px] md:left-[-40px] w-48 md:w-56 z-50 cursor-pointer flex flex-col items-center justify-center rotate-[-6deg]"
          >
            {/* A imagem do papelzinho funciona como fundo absoluto */}
            <img
              src="/papelzinho.png"
              alt=""
              className="absolute inset-0 w-full h-full object-contain drop-shadow-xl"
            />
            {/* O texto por cima da imagem */}
            <p className="relative font-hand text-lg md:text-xl text-gray-700 leading-tight text-center mt-2 pr-2">
              let's
              <br />
              create
              <br />
              something
              <br />
              amazing <span className="text-pink-500">♥</span>
            </p>
          </motion.div>

          {/* --- CONTEÚDO DE TEXTO (RETO) --- */}
          {/* Esta div está separada do fundo, por isso o texto não sofre a rotação de -2 graus */}
          <div className="relative z-30 flex flex-col items-center text-center px-6 py-12 md:pr-12 pointer-events-auto">
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-hand text-5xl md:text-[70px] text-pink-500 mb-[-10px] md:mb-[-15px]"
            >
              welcome
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-sans italic text-lg md:text-xl text-gray-700 mb-2"
            >
              to my
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="relative flex flex-col items-center"
            >
              <h1 className="font-hand text-6xl md:text-[110px] leading-none font-bold text-[var(--color-ink)] tracking-tight">
                Portfolio
              </h1>

              <svg
                className="w-48 md:w-[280px] mt-[-5px] md:mt-[-10px] text-[var(--color-ink)] transform rotate-1"
                viewBox="0 0 300 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              >
                <path d="M10,20 Q150,5 290,20 Q150,35 20,30" />
              </svg>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-6 md:mt-8 font-sans text-gray-600 text-sm md:text-base max-w-[280px] md:max-w-sm px-4 font-medium"
            >
              Design com propósito, criatividade
              <br className="hidden md:block" /> e atenção aos detalhes.
            </motion.p>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#f689a7] text-white font-sans font-bold py-3 px-8 md:px-10 rounded-full shadow-lg hover:bg-pink-500 transition-colors tracking-widest text-xs md:text-sm uppercase"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver Projetos
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
