import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex w-full min-h-screen flex-col items-center bg-[#effff0] pb-24 pt-16 md:pt-24 overflow-hidden"
    >
      <div
        className="paper-grain absolute inset-0 z-0 pointer-events-none opacity-60"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 flex flex-col items-center">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="font-hand text-6xl md:text-7xl text-[var(--color-ink)] mb-4 relative inline-block">
            Entre em Contato!
            <motion.svg
              viewBox="0 0 300 20"
              className="absolute -bottom-2 left-0 w-full h-4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.path
                d="M5 12 Q80 2 150 10 T295 8"
                stroke="var(--color-pink-soft)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </h2>
          <p className="font-sans text-ink-soft max-w-md mx-auto mt-4">
            Tem um projeto em mente, quer fazer uma encomenda ou apenas dar um
            oi? Me mande uma mensagem!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row w-full gap-14 lg:gap-10 items-start justify-center">
          {/* LADO ESQUERDO: "murinho" de cartõezinhos com fita adesiva */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-7 w-full lg:w-1/3 pt-2"
          >
            <h3 className="font-hand text-4xl text-ink mb-1">
              Me encontre por aqui!
            </h3>

            {/* Cartão Instagram */}
            <motion.a
              href="https://instagram.com/patynete"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ rotate: -3 }}
              whileHover={{ rotate: 0, scale: 1.03, y: -3 }}
              className="group relative flex items-center gap-4 bg-white p-4 pl-5 rounded-md shadow-md border border-black/5"
            >
              <span className="absolute -top-3 left-8 w-14 h-6 bg-[var(--color-butter-deep)]/70 rotate-[-4deg] rounded-sm shadow-sm" />
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-full text-white shadow-md group-hover:scale-110 transition-transform shrink-0">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div>
                <p className="font-hand text-lg text-ink leading-none mb-0.5">
                  Instagram
                </p>
                <span className="font-sans text-xs text-ink/50">
                  @patynete
                </span>
              </div>
            </motion.a>

            {/* Cartão LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/patr%C3%ADcia-philippsen-gabriel-6b2b21298/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ rotate: 2 }}
              whileHover={{ rotate: 0, scale: 1.03, y: -3 }}
              className="group relative flex items-center gap-4 bg-white p-4 pl-5 rounded-md shadow-md border border-black/5"
            >
              <span className="absolute -top-3 right-8 w-14 h-6 bg-[var(--color-lavender)]/70 rotate-[5deg] rounded-sm shadow-sm" />
              <div className="w-12 h-12 flex items-center justify-center bg-[#0a66c2] rounded-full text-white shadow-md group-hover:scale-110 transition-transform shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div>
                <p className="font-hand text-lg text-ink leading-none mb-0.5">
                  LinkedIn
                </p>
                <span className="font-sans text-xs text-ink/50">Patrícia Philippsen Gabriel</span>
              </div>
            </motion.a>

            {/* Cartão E-mail */}
            <motion.a
              href="mailto:seu_email@gmail.com"
              initial={{ rotate: -2 }}
              whileHover={{ rotate: 0, scale: 1.03, y: -3 }}
              className="group relative flex items-center gap-4 bg-white p-4 pl-5 rounded-md shadow-md border border-black/5"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-[var(--color-mint-deep)]/70 rotate-[3deg] rounded-sm shadow-sm" />
              <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-ink)] rounded-full text-white shadow-md group-hover:scale-110 transition-transform shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <div>
                <p className="font-hand text-lg text-ink leading-none mb-0.5">
                  E-mail
                </p>
                <span className="font-sans text-xs text-ink/50">
                  patriciapg.ipo@gmail.com
                </span>
              </div>
            </motion.a>
          </motion.div>

        {/* LADO DIREITO: folha de carta simples, flutuando sobre o fundo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative bg-[#fffefb] rounded-2xl shadow-lg border border-black/5 overflow-hidden"
            >
              {/* Faixa colorida no topo, tipo cabeçalho de carta */}
              <div className="bg-[var(--color-mint-deep)]/25 px-8 md:px-9 py-5 flex items-center justify-between">
                <p className="font-hand text-3xl text-ink">
                  Envie sua mensagem!
                </p>
                <motion.span
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-2xl"
                >
                  💌
                </motion.span>
              </div>

              <form
                action="https://formsubmit.co/SEU_EMAIL_AQUI@gmail.com"
                method="POST"
                className="flex flex-col gap-5 p-8 md:p-9"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Novo contato pelo Portfólio!"
                />
                <input type="hidden" name="_captcha" value="false" />

                <div className="flex flex-col gap-2">
                  <label className="font-hand text-xl text-ink/70">
                    Seu nome:
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="bg-transparent border-b-2 border-dashed border-ink/25 outline-none focus:border-[var(--color-mint-deep)] transition-colors font-hand text-xl text-ink px-1 py-1.5"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-hand text-xl text-ink/70">
                    Seu e-mail:
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="bg-transparent border-b-2 border-dashed border-ink/25 outline-none focus:border-[var(--color-mint-deep)] transition-colors font-hand text-xl text-ink px-1 py-1.5"
                  />
                </div>

                <div className="flex flex-col gap-2 mt-1">
                  <label className="font-hand text-xl text-ink/70">
                    Sua mensagem:
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="escreve aqui sua ideia, projeto ou só um oi :)"
                    className="bg-transparent outline-none font-hand text-xl text-ink leading-[2.4rem] resize-none placeholder:text-ink/20"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(transparent, transparent 2.35rem, rgba(0,0,0,0.1) 2.35rem, rgba(0,0,0,0.1) calc(2.35rem + 1.5px))",
                      backgroundPositionY: "2.3rem",
                    }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.04, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="mt-2 self-start bg-ink text-white font-hand text-xl px-8 py-3 rounded-full shadow-md hover:bg-[var(--color-mint-deep)] transition-colors flex items-center gap-2"
                >
                  Enviar
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ✈️
                  </motion.span>
                </motion.button>
              </form>
            </motion.div>

            {/* Sombra suave no chão */}
            <div className="absolute -bottom-3 left-6 right-6 h-6 bg-black/10 blur-lg rounded-full -z-10" />
          </motion.div>
        </div>
        
      </div>
      {/* FOOTER / COPYRIGHT */}
        <div className="absolute bottom-0 left-0 w-full py-6 flex justify-center border-t border-black/5 bg-[#effff0]">
          <p className="font-sans text-sm text-ink-soft">
            © {new Date().getFullYear()} Patrícia Philippsen Gabriel. Todos os direitos reservados.
          </p>
        </div>
      
    </section>
  );
}
