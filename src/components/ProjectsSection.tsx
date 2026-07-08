import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { projects, type Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import { useColumns } from "../hooks/useColumns";
import { ProjectModal } from "./ProjectModal";

const ASPECT_WEIGHT: Record<Project["aspect"], number> = {
  square: 1,
  portrait: 1.33,
  tall: 1.5,
  wide: 0.85,
};

export function ProjectsSection({ onSeeAll }: { onSeeAll: () => void }) {
  const [activeTag, setActiveTag] = useState("Principais");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); 
  const columnCount = useColumns({ default: 1, sm: 2, lg: 4 });

  const tags = useMemo(
    () => ["Principais", ...Array.from(new Set(projects.flatMap((p) => p.tags)))],
    []
  );

  const filtered = useMemo(() => {
      const list = activeTag === "Principais" 
        ? projects 
        : projects.filter((p) => p.tags.includes(activeTag));
        
      return list.slice(0, 9);
    }, [activeTag]
  );

  const columns = useMemo(() => {
    const cols: Project[][] = Array.from({ length: columnCount }, () => []);
    const heights = new Array(columnCount).fill(0);
    filtered.forEach((project) => {
      const shortest = heights.indexOf(Math.min(...heights));
      cols[shortest].push(project);
      heights[shortest] += ASPECT_WEIGHT[project.aspect];
    });
    return cols;
  }, [filtered, columnCount]);

  return (
    <section
      id="projects"
      className="relative flex w-full min-h-screen flex-col items-center bg-[var(--color-beige)] pb-20 pt-16"
    >
      {/* Renderiza o modal se houver um projeto selecionado */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
      {/* Cabeçalho da Seção */}
      <div className="mx-auto mb-10 flex w-full max-w-6xl flex-col items-end justify-between gap-4 px-4 md:flex-row">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-hand text-6xl text-ink md:text-8xl"
        >
          Projects
          <div className="mt-2 h-1 w-3/4 rounded-full bg-pink" />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-right md:mt-0"
        >
          <p className="mb-4 max-w-xs font-sans text-sm text-ink-soft">
            Uma seleção dos principais trabalhos.
          </p>
          <button 
            onClick={onSeeAll}
            className="rounded-full border border-pink-soft px-6 py-2 text-sm font-bold tracking-widest text-pink transition-colors hover:bg-pink-soft/40 cursor-pointer relative z-10"
          >
            VER TODOS <span className="ml-2">→</span>
          </button>
        </motion.div>
      </div>

      {/* Filtro por estilo */}
      <ProjectFilter tags={tags} active={activeTag} onChange={setActiveTag} />

      <div className="mx-auto flex w-full max-w-6xl justify-center gap-6 px-4 pt-3">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-1 flex-col gap-6">
            <AnimatePresence mode="popLayout">
              {col.map((project) => (
                <ProjectCard key={project.id} project={project} index={filtered.indexOf(project)}
                onClick={() => setSelectedProject(project)} />
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>
{/* NOVO BOTÃO INFERIOR ANIMADO */}
      <div className="w-full flex justify-center mt-16 relative z-10">
        <motion.button
          onClick={onSeeAll}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-3 px-8 py-4 bg-white border-2 border-pink-200 text-pink-500 rounded-full font-sans font-bold tracking-widest text-sm uppercase shadow-lg shadow-pink-500/10 hover:border-pink-400 hover:text-pink-600 transition-colors cursor-pointer"
        >
          <span className="relative z-10">Veja mais projetos</span>
          <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          <div className="absolute inset-0 rounded-full bg-pink-50 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </div>
      {filtered.length === 0 && (
        <p className="mt-10 font-sans text-sm text-ink-soft">
          Nenhum projeto com esse estilo ainda — em breve!
        </p>
      )}
    </section>
  );
}