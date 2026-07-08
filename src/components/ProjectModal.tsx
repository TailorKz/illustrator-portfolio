import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { Project } from "../data/projects";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Trava o scroll E oculta a Navbar enquanto o modal estiver aberto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Ocultando a Navbar suavemente
    const navbar = document.querySelector("nav");
    if (navbar) {
      navbar.style.opacity = "0";
      navbar.style.pointerEvents = "none";
      navbar.style.transition = "opacity 0.3s ease";
    }

    return () => {
      document.body.style.overflow = "unset";
      
      // Trazendo a Navbar de volta ao fechar
      if (navbar) {
        navbar.style.opacity = "1";
        navbar.style.pointerEvents = "auto";
      }
    };
  }, []);

  return (
    <>
      {/* 1. MODAL PRINCIPAL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-[#3a2e2e]/60 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl h-[90vh] md:h-[85vh] bg-[#fffaf6] rounded-[24px] shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Botão de Fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur text-ink hover:bg-pink-100 hover:text-pink-500 transition-colors shadow-sm"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="relative z-10 flex flex-col md:flex-row h-full overflow-hidden">
            
            {/* LADO ESQUERDO: ÁREA DA IMAGEM COM BLUR */}
            <div className="relative w-full md:w-[55%] flex flex-col items-center justify-center bg-zinc-900 overflow-hidden min-h-[40vh] md:min-h-full">
              
              {(project.fullImage || project.image) && (
                <div 
                  className="absolute inset-0 opacity-40 bg-cover bg-center transform scale-110"
                  style={{ 
                    backgroundImage: `url(${project.fullImage || project.image})`, 
                    filter: 'blur(40px)' 
                  }}
                />
              )}

              {project.fullImage || project.image ? (
                <motion.div 
                  className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 cursor-zoom-in group"
                  onClick={() => setIsZoomed(true)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative inline-flex items-center justify-center">
                    <img
                      src={project.fullImage || project.image}
                      alt={project.title}
                      className="max-h-[50vh] md:max-h-[70vh] w-auto object-contain drop-shadow-2xl rounded-sm"
                    />
                    
                    {/* Overlay de Lupa */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm flex flex-col items-center justify-center backdrop-blur-[2px]">
                      <svg className="w-12 h-12 text-white/90 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>

                  <span className="absolute bottom-6 font-sans text-xs tracking-widest text-white/70 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Clique para ampliar
                  </span>
                </motion.div>
              ) : (
                <div className="text-white/50 font-hand text-4xl z-10">Sem imagem</div>
              )}
            </div>

            {/* LADO DIREITO: ÁREA DE TEXTOS */}
            <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col bg-[#fffaf6] overflow-y-auto scrollbar-hide relative">
               <div className="paper-grain absolute inset-0 z-0 pointer-events-none opacity-40" />
               
               <div className="relative z-10 flex flex-col h-full">
                  <span className="text-pink-500 font-sans font-bold tracking-widest text-xs uppercase mb-2">
                    {project.category} • {project.year}
                  </span>
                  
                  <h2 className="font-hand text-5xl md:text-6xl text-ink leading-[1.1] mb-6">
                    {project.title}
                  </h2>
                  
                  <p className="font-sans text-ink-soft text-base leading-relaxed mb-8 flex-grow">
                    {project.description || "Nenhuma descrição fornecida para esta arte ainda. Mas você pode adicionar os detalhes sobre o processo criativo, ferramentas utilizadas e a inspiração por trás dela!"}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-pink-100/50">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 bg-white border border-pink-200 text-pink-600 rounded-full text-xs font-bold shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 2. VISÃO AMPLIADA (LIGHTBOX) COM BOTÃO TEMÁTICO */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-[100001] flex flex-col items-center justify-center bg-black/95 p-4 md:p-8 cursor-zoom-out"
          >
            {/* Ícone de Fechar no topo */}
            <button className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-50">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Imagem (Limitamos a altura para sobrar espaço para o botão) */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={project.fullImage || project.image}
              alt={project.title}
              className="w-full h-[80vh] md:h-[85vh] object-contain drop-shadow-2xl select-none"
            />

            {/* Botão Temático Inferior */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation(); // Evita que feche duas vezes
                setIsZoomed(false);
              }}
              className="absolute bottom-6 md:bottom-10 px-8 py-3 bg-pink-500/20 hover:bg-pink-500 text-white font-sans font-bold tracking-widest text-sm uppercase rounded-full border border-pink-500/50 hover:border-pink-500 backdrop-blur-md transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)] z-50"
            >
              Fechar Imagem
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}