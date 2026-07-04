import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Image", category: "Branding", year: "2026", color: "bg-pink-100", pin: true },
  { id: 2, title: "Image", category: "Autoral Design", year: "2026", color: "bg-purple-100", tape: true },
  { id: 3, title: "Image", category: "Scenario", year: "2025", color: "bg-green-100", clip: true },
  { id: 4, title: "Image", category: "Autoral Design", year: "2024", color: "bg-blue-100", tape: true },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full min-h-screen pt-32 pb-16 flex flex-col items-center">
      
      {/* Cabeçalho da Seção */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-end mb-16 px-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-hand text-6xl md:text-8xl text-[var(--color-ink)]"
        >
          Projects
          <div className="h-1 w-3/4 bg-pink-400 rounded-full mt-2" />
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-right mt-4 md:mt-0"
        >
          <p className="font-sans text-gray-500 max-w-xs text-sm mb-4">
            text
          </p>
          <button className="text-pink-500 font-bold text-sm tracking-widest border border-pink-200 py-2 px-6 rounded-full hover:bg-pink-50 transition-colors">
            VER TODOS <span className="ml-2">↓</span>
          </button>
        </motion.div>
      </div>

      {/* Grid de Projetos (Estilo Polaroid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Dispara animação um pouco antes de aparecer na tela
            transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
            whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }} // Efeito de levantar a foto no hover
            className="relative bg-white p-4 pb-6 rounded-sm shadow-xl border border-gray-100 flex flex-col items-center group cursor-pointer"
          >
            {/* Efeito Visual: Durex/Fita */}
            {project.tape && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-100/60 backdrop-blur-sm rotate-[-3deg] z-10 border border-yellow-200/30" />
            )}
            
            {/* Efeito Visual: Alfinete */}
            {project.pin && (
              <div className="absolute -top-3 left-6 w-4 h-4 bg-pink-500 rounded-full shadow-md z-10 shadow-pink-500/50 border-2 border-pink-400">
                <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-60" />
              </div>
            )}

            {/* Efeito Visual: Clipe de Papel */}
            {project.clip && (
              <div className="absolute -top-4 right-6 w-4 h-10 border-2 border-gray-400 rounded-full z-10 rotate-[15deg]" />
            )}

            {/* Imagem do Projeto (Placeholder colorido por enquanto) */}
            <div className={`w-full h-64 ${project.color} mb-4 overflow-hidden flex items-center justify-center`}>
              <span className="text-gray-400 font-sans text-sm">Imagem {project.title}</span>
            </div>
            
            {/* Textos da Polaroid */}
            <div className="w-full flex justify-between items-end">
              <div>
                <h3 className="font-sans font-bold text-gray-800 text-lg">{project.title}</h3>
                <p className="font-sans text-gray-500 text-sm">{project.category}</p>
                <p className="font-sans text-gray-400 text-xs mt-1">{project.year}</p>
              </div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="text-gray-400"
              >
                →
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}