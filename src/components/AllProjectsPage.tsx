import { useMemo, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { projects, type Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import { ProjectModal } from "./ProjectModal";

export function AllProjectsPage({ onBack }: { onBack: () => void }) {
  const [activeTag, setActiveTag] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  return (
    <div className="relative min-h-screen bg-[var(--color-beige)] pt-12 md:pt-20 pb-20 px-4 w-full">
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
          Explore todas as minhas ilustrações e projetos.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <ProjectFilter tags={tags} active={activeTag} onChange={setActiveTag} />
      </div>

      {/* A SOLUÇÃO MASONRY NATIVA E PERFEITA (4 Colunas) */}
      <div className="mx-auto w-full max-w-6xl pt-3 columns-1 sm:columns-2 lg:columns-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <div key={project.id} className="break-inside-avoid mb-6">
              <ProjectCard
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}