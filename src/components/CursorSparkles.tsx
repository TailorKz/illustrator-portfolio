import { useEffect, useRef, useState } from "react";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  hue: "butter" | "pink";
};

const SPARKLE_LIFETIME_MS = 700; // keep this in sync with the CSS animation duration below
let sparkleId = 0;

export function CursorSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const lastSpawn = useRef(0);
  const timeouts = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarsePointer || prefersReducedMotion) return;

    function handleMove(e: MouseEvent) {
      const now = performance.now();
      if (now - lastSpawn.current < 90) return;
      lastSpawn.current = now;

      const id = sparkleId++;
      setSparkles((prev) => [
        ...prev.slice(-14),
        {
          id,
          x: e.clientX,
          y: e.clientY,
          size: 5 + Math.random() * 5,
          hue: Math.random() > 0.35 ? "butter" : "pink",
        },
      ]);

      // Each sparkle removes itself on a fixed timer. This is the source
      // of truth for cleanup — it doesn't depend on the mouse moving again
      // or on the CSS animation actually firing an "animationend" event.
      const timeoutId = setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
        timeouts.current.delete(timeoutId);
      }, SPARKLE_LIFETIME_MS);
      timeouts.current.add(timeoutId);
    }

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      timeouts.current.forEach(clearTimeout);
      timeouts.current.clear();
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999]">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className={`sparkle-trail absolute rounded-full ${
            s.hue === "butter" ? "bg-butter" : "bg-pink-soft"
          }`}
          style={{ left: s.x, top: s.y, width: s.size, height: s.size }}
        />
      ))}
    </div>
  );
}