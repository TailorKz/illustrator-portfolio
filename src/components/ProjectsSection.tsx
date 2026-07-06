import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { projects, type Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import { useColumns } from "../hooks/useColumns";

const ASPECT_WEIGHT: Record<Project["aspect"], number> = {
  square: 1,
  portrait: 1.33,
  tall: 1.5,
  wide: 0.85,
};

export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState("Principais");
  const columnCount = useColumns({ default: 1, sm: 2, lg: 4 });

  const tags = useMemo(
    () => ["Principais", ...Array.from(new Set(projects.flatMap((p) => p.tags)))],
    []
  );

  const filtered = useMemo(
    () => (activeTag === "Principais" ? projects : projects.filter((p) => p.tags.includes(activeTag))),
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
    <section
      id="projects"
      className="relative flex w-full min-h-screen flex-col items-center bg-[var(--color-beige)] pb-20 pt-16"
    >
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
            Uma seleção dos trabalhos mais recentes.
          </p>
          <button className="rounded-full border border-pink-soft px-6 py-2 text-sm font-bold tracking-widest text-pink transition-colors hover:bg-pink-soft/40">
            VER TODOS <span className="ml-2">↓</span>
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
                <ProjectCard key={project.id} project={project} index={filtered.indexOf(project)} />
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 font-sans text-sm text-ink-soft">
          Nenhum projeto com esse estilo ainda — em breve!
        </p>
      )}
    </section>
  );
}