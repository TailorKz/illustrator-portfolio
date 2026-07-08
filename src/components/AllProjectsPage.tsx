import { useMemo, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
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

export function AllProjectsPage({ onBack }: { onBack: () => void }) {
  const [activeTag, setActiveTag] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const columnCount = useColumns({ default: 1, sm: 2, lg: 4 });

  // Joga a tela para o topo sempre que a página "Galeria" for aberta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tags = useMemo(
    () => ["Todos", ...Array.from(new Set(projects.flatMap((p) => p.tags)))],
    []
  );

  const filtered = useMemo(
    () => (activeTag === "Todos" ? projects : projects.filter((p) => p.tags.includes(activeTag))),
    [activeTag]
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
    <div className="relative min-h-screen bg-[var(--color-beige)] pt-12 md:pt-20 pb-20 px-4 w-full">
      {/* O Modal continua existindo aqui também! */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto mb-8 md:mb-12">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-pink-500 hover:text-pink-600 transition-colors mb-8 font-bold tracking-widest uppercase text-sm cursor-pointer"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Voltar para o Início
        </button>
        
        <h1 className="font-hand text-6xl md:text-8xl text-ink">
          Todos os Projetos
          <div className="mt-2 h-1 w-48 rounded-full bg-pink" />
        </h1>
        <p className="mt-4 max-w-xl font-sans text-base text-ink-soft">
          Texto futuro ideias
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <ProjectFilter tags={tags} active={activeTag} onChange={setActiveTag} />
      </div>

      <div className="mx-auto flex w-full max-w-6xl justify-center gap-6 pt-3">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-1 flex-col gap-6">
            <AnimatePresence mode="popLayout">
              {col.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={filtered.indexOf(project)}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}