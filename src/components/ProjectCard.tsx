import { motion } from "framer-motion";
import type { Project } from "../data/projects";

const ASPECT_CLASS: Record<Project["aspect"], string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  tall: "aspect-[2/3]",
  wide: "aspect-[4/3]",
};

const REST_ROTATION = [-2.5, 1.5, -1, 2, -1.8, 1];

function Decoration({ type }: { type: Project["decoration"] }) {
  if (type === "tape") {
    return (
      <div className="absolute -top-2 md:-top-3 left-1/2 z-10 h-4 w-10 md:h-6 md:w-16 -translate-x-1/2 rotate-[-3deg] border border-butter-deep/20 bg-butter/60 shadow-sm backdrop-blur-sm" />
    );
  }
  if (type === "pin") {
    return (
      <div className="absolute -top-2 md:-top-3 left-3 md:left-6 z-10 h-3 w-3 md:h-4 md:w-4 rounded-full border-2 border-pink bg-pink-deep shadow-md shadow-pink/50">
        <div className="absolute left-[2px] top-[2px] md:left-1 md:top-1 h-1 w-1 rounded-full bg-white/60" />
      </div>
    );
  }
  if (type === "clip") {
    return (
      <div className="absolute -top-3 md:-top-4 right-3 md:right-6 z-10 h-6 w-3 md:h-10 md:w-4 rotate-[15deg] rounded-full border-2 border-ink-soft/60" />
    );
  }
  return null;
}

export function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const rest = REST_ROTATION[index % REST_ROTATION.length];
  const delayTime = (index % 10) * 0.05;

  return (
    <motion.div
      layout
      onClick={onClick}
      initial={{ opacity: 0, y: 40, rotate: rest }}
      whileInView={{ opacity: 1, y: 0, rotate: rest }}
      viewport={{ once: true, margin: "-60px" }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{
        delay: delayTime,
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
      style={{ transformOrigin: "center bottom" }}
      className="group relative flex w-full cursor-pointer flex-col bg-[#fffaf6] p-2 pb-3 md:p-3 md:pb-5 shadow-[0_2px_4px_rgba(58,46,46,0.06),0_16px_28px_rgba(58,46,46,0.14)]"
    >
      <Decoration type={project.decoration} />
      <div
        className={`relative mb-2 md:mb-4 flex w-full items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent} ${ASPECT_CLASS[project.aspect]}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 2px, transparent 2px, transparent 14px)",
              }}
            />
            <span className="pointer-events-none absolute -bottom-2 md:-bottom-4 -right-1 md:-right-2 select-none font-hand text-[4rem] md:text-[7rem] leading-none text-white/25">
              {project.title.charAt(0)}
            </span>
            <span className="relative px-3 md:px-5 text-center font-hand text-sm md:text-xl text-white drop-shadow-sm">
              {project.title}
            </span>
            <div className="absolute right-0 top-0 h-4 w-4 md:h-6 md:w-6 bg-white/25 [clip-path:polygon(100%_0,0_0,100%_100%)]" />
          </>
        )}
      </div>
      <div className="flex w-full items-end justify-between px-1">
        <div>
          <h3 className="font-sans text-xs md:text-base font-bold text-ink leading-tight">
            {project.title}
          </h3>
          <p className="font-sans text-[10px] md:text-sm text-ink-soft leading-tight">
            {project.category}
          </p>
          <p className="mt-0.5 font-sans text-[9px] md:text-xs text-ink-soft/70">
            {project.year}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
