import { motion } from "framer-motion";

type ProjectFilterProps = {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
};

export function ProjectFilter({ tags, active, onChange }: ProjectFilterProps) {
  return (
    <div className="mb-10 flex w-full max-w-6xl gap-2 flex-wrap justify-center px-4">
      {tags.map((tag) => {
        const isActive = tag === active;
        return (
          <button
            key={tag}
            onClick={() => onChange(tag)}
            className={`relative shrink-0 overflow-hidden rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
              isActive
                ? "border-pink text-white"
                : "border-pink-soft bg-white/70 text-ink-soft hover:bg-pink-soft/40"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-active-bg"
                className="absolute inset-0 -z-10 rounded-full bg-pink"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {tag}
          </button>
        );
      })}
    </div>
  );
}
