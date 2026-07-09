import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import { useColumns } from "../hooks/useColumns";
import { ProjectModal } from "./ProjectModal";
import { TornEdge } from "./TornEdge";
import { FloatingIcon } from "./FloatingIcon";

const ASPECT_WEIGHT: Record<Project["aspect"], number> = {
  square: 1,
  portrait: 1.33,
  tall: 1.5,
  wide: 0.85,
};

   // IMAGENS DE FUNDO

const decorativeImages: {
  src: string;
  alt?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: string;
  opacity: string;
  duration: number;
  rotate?: number;
  driftX?: number;
  driftY?: number;
  delay?: number;
  className: string;
}[] = [
  {
    src: "../../public/girassol.webp",
    top: "12%",
    left: "4%",
    size: "w-20 md:w-38",
    opacity: "opacity-80",
    duration: 7,
    rotate: -6,
    driftX: 6,
    driftY: -8,
    className: "hidden lg:block z-0",
  },
  {
    src: "../../public/borboleta.webp",
    top: "28%",
    right: "2%",
    size: "w-14 md:w-30",
    opacity: "opacity-80",
    duration: 5.5,
    rotate: 8,
    driftX: -6,
    driftY: 8,
    delay: 0.3,
    className: "hidden md:block z-0",
  },
  {
    src: "../../public/bee.webp",
    bottom: "20%",
    left: "2%",
    size: "w-20 md:w-24",
    opacity: "opacity-75",
    duration: 6.5,
    rotate: -4,
    driftX: 5,
    driftY: 10,
    className: "hidden lg:block z-0 -scale-x-100 -rotate-22",
  },
  {
    src: "../../public/tulipaslaranjas.webp",
    bottom: "8%",
    right: "3%",
    size: "w-16 md:w-24",
    opacity: "opacity-70",
    duration: 8,
    rotate: 5,
    driftX: -8,
    driftY: -6,
    delay: 0.6,
    className: "hidden md:block z-0",
  },
  {
    src: "../../public/coracao.webp",
    top: "48%",
    left: "15%",
    size: "w-12 md:w-16",
    opacity: "opacity-60",
    duration: 5,
    rotate: -10,
    driftX: 4,
    driftY: 6,
    className: "hidden xl:block z-0",
  },
  {
    src: "../../public/florespequenas.webp",
    top: "4%",
    right: "6%",
    size: "w-14 md:w-20",
    opacity: "opacity-70",
    duration: 6,
    rotate: 6,
    driftX: -5,
    driftY: -8,
    delay: 0.4,
    className: "hidden lg:block z-0",
  },
];

// Botão "Ver todos" — agora com cara de botão de verdade: contorno, preenche no hover, seta
function PillButton ({
  onClick,
  label,
  className = "",
}: {
  onClick: () => void;
  label: string;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);
 
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative inline-flex cursor-pointer items-center gap-2 px-8 py-3 font-sans text-sm font-bold uppercase tracking-widest text-ink transition-colors duration-300 group-hover:text-pink ${className}`}
    >
      <span className="relative z-10">{label}</span>
      <motion.svg
        className="relative z-10 h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        animate={{ x: hovered ? 4 : [0, 3, 0] }}
        transition={
          hovered
            ? { duration: 0.3, ease: "easeOut" }
            : { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </motion.svg>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 200 70"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M15,35 C10,12 45,4 100,5 C160,6 195,15 190,38 C185,63 145,68 100,66 C50,64 20,60 15,35Z"
          fill="none"
          stroke="var(--color-pink)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={false}
          animate={{ pathLength: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </svg>
    </button>
  );
}
 
// Link "Veja mais projetos" — sublinhado desenhado à mão no hover + seta com balanço
function SeeMoreLink({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
 
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
      className="group flex items-center gap-4 cursor-pointer"
    >
      <span className="relative font-hand text-3xl text-ink transition-colors duration-300 group-hover:text-pink md:text-4xl">
        Veja mais projetos
        <svg
          className="pointer-events-none absolute -bottom-1 left-0 h-3 w-full overflow-visible"
          viewBox="0 0 240 14"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M3 8C45 3 95 11 140 6C175 2 205 10 236 6"
            fill="none"
            stroke="var(--color-pink)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={false}
            animate={{ pathLength: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
        </svg>
      </span>
 
      <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-pink-soft bg-white transition-colors duration-300 group-hover:border-pink group-hover:bg-pink-soft/40">
        <motion.svg
          className="h-5 w-5 text-pink"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          animate={{ x: hovered ? 5 : [0, 3, 0] }}
          transition={
            hovered
              ? { duration: 0.3, ease: "easeOut" }
              : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </motion.svg>
      </span>
    </motion.button>
  );
}
 
// Título "Projects" — pequeno, à esquerda, traço rosa rabiscado (diferente do traço do hero)
function SectionTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative inline-block mb-4"
    >
      <h2 className="font-hand text-4xl text-ink md:text-6xl">Projects</h2>
      <motion.svg
        className="absolute -bottom-2 left-0 h-3 w-[85%]"
        viewBox="0 0 200 16"
        fill="none"
        stroke="var(--color-pink)"
        strokeWidth="4"
        strokeLinecap="round"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M4 10C24 4 40 13 60 8C82 3 96 12 116 7C138 2 152 11 172 6C182 4 190 7 196 6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
        />
      </motion.svg>
    </motion.div>
  );
}
 
export function ProjectsSection({ onSeeAll }: { onSeeAll: () => void }) {
  const [activeTag, setActiveTag] = useState("Principais");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const columnCount = useColumns({ default: 1, sm: 2, lg: 4 });
 
  const tags = useMemo(
    () => ["Principais", ...Array.from(new Set(projects.flatMap((p) => p.tags)))],
    []
  );
 
  const filtered = useMemo(() => {
    const list =
      activeTag === "Principais" ? projects : projects.filter((p) => p.tags.includes(activeTag));
 
    return list.slice(0, 9);
  }, [activeTag]);
 
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
      className="relative flex w-full min-h-screen flex-col items-center overflow-hidden bg-[var(--color-beige)] pb-20 pt-16 md:pt-24"
    >
      <div className="paper-grain pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
 
      {decorativeImages.map((img, i) => (
        <FloatingIcon
          key={i}
          top={img.top}
          left={img.left}
          right={img.right}
          bottom={img.bottom}
          duration={img.duration}
          rotate={img.rotate}
          driftX={img.driftX}
          driftY={img.driftY}
          delay={img.delay}
          className={img.className}
        >
          <img
            src={img.src}
            alt={img.alt ?? ""}
            loading="lazy"
            className={`${img.size} ${img.opacity} object-contain drop-shadow-md`}
          />
        </FloatingIcon>
      ))}
 
      {/* Renderiza o modal se houver um projeto selecionado */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
 <div className="relative z-10 mx-auto w-full max-w-6xl px-4 flex flex-col items-start">
  <SectionTitle />

  <motion.p
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 }}
    className="mt-5 rounded-lg bg-white/70 px-4 py-2 font-hand text-lg text-ink-soft shadow-sm"
  >
    Uma seleção dos principais trabalhos.
  </motion.p>
</div>

{/* Filtro por estilo */}
<div className="relative z-10 mt-8">
  <ProjectFilter
    tags={tags}
    active={activeTag}
    onChange={setActiveTag}
  />
</div>
 
      {/* Botão "Ver todos" abaixo dos filtros */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="relative z-10 mt-6"
      >
        <PillButton onClick={onSeeAll} label="Ver todos" />
      </motion.div>
 
      <div className="relative z-10 mx-auto mt-10 flex w-full max-w-6xl justify-center gap-6 px-4">
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
 
      {/* Link inferior "Veja mais projetos" */}
      <div className="relative z-10 mt-16 flex w-full justify-center">
        <SeeMoreLink onClick={onSeeAll} />
      </div>
 
      {filtered.length === 0 && (
        <p className="relative z-10 mt-10 font-sans text-sm text-ink-soft">
          Nenhum projeto com esse estilo ainda — em breve!
        </p>
      )}
 
      <TornEdge bottomColor="#fffedf" />
    </section>
  );
}
