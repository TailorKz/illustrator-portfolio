import { useEffect, useRef, useState } from "react";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  hue: "butter" | "pink";
};

let sparkleId = 0;

export function CursorSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarsePointer || prefersReducedMotion) return;

    function handleMove(e: MouseEvent) {
      const now = performance.now();
      if (now - lastSpawn.current < 90) return;
      lastSpawn.current = now;

      setSparkles((prev) => [
        ...prev.slice(-14), // no máx. ~15 brilhos vivos ao mesmo tempo
        {
          id: sparkleId++,
          x: e.clientX,
          y: e.clientY,
          size: 5 + Math.random() * 5,
          hue: Math.random() > 0.35 ? "butter" : "pink",
        },
      ]);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  function remove(id: number) {
    setSparkles((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999]">
      {sparkles.map((s) => (
        <span
          key={s.id}
          onAnimationEnd={() => remove(s.id)}
          className={`sparkle-trail absolute rounded-full ${
            s.hue === "butter" ? "bg-butter" : "bg-pink-soft"
          }`}
          style={{ left: s.x, top: s.y, width: s.size, height: s.size }}
        />
      ))}
    </div>
  );
}