import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "welcome", label: "Welcome", icon: "✿", color: "#f9a8c9" },
  { id: "projects", label: "Projects", icon: "✎", color: "#7dd8a3" },
  { id: "about", label: "About", icon: "☺", color: "#b8a4f0" },
  { id: "contact", label: "Contact", icon: "✉", color: "#f5c451" },
];

export function Navbar({ onNavigate }: { onNavigate?: () => void }) {
  const [activeTab, setActiveTab] = useState<string | null>("welcome"); // Inicia no welcome
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // 1. O RADAR (Intersection Observer)
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Se a seção cruzou o centro da tela, ela se torna a aba ativa
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    // Configuração do radar: -40% no topo e no fundo força ele a só
    // ativar a seção quando ela realmente estiver no "meio" do seu monitor.
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-40% 0px -40% 0px",
    });

    // Pega as IDs do nosso array e manda o radar observar cada uma
    tabs.forEach((tab) => {
      const element = document.getElementById(tab.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // 👇 Fonte única de verdade: hover sempre tem prioridade sobre o active.
  const highlightedTab = hoveredTab ?? activeTab;

  const scrollToSection = (id: string) => {
    setActiveTab(id);

    if (onNavigate) {
      onNavigate();
    }

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <motion.ul
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onMouseLeave={() => setHoveredTab(null)}
        className="relative flex gap-1 sm:gap-2 pointer-events-auto bg-white/70 backdrop-blur-md px-2 py-2 rounded-full shadow-lg border border-black/5"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isHighlighted = highlightedTab === tab.id;

          return (
            <motion.li
              key={tab.id}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onClick={() => scrollToSection(tab.id)}
              whileTap={{ scale: 0.92 }}
              className="relative px-4 sm:px-5 py-2.5 rounded-full cursor-pointer font-hand text-lg sm:text-xl text-[var(--color-ink)] flex items-center gap-1.5 select-none"
            >
              {/* Cor base — já vem setada, sempre visível */}
              <span
                className="absolute inset-0 rounded-full -z-20 pointer-events-none"
                style={{ backgroundColor: tab.color, opacity: 0.45 }}
              />

              {/* Blob que intensifica a cor — só existe UMA instância por vez */}
              {isHighlighted && (
                <motion.span
                  layoutId="navbar-blob"
                  className="absolute inset-0 rounded-full -z-10 pointer-events-none"
                  style={{
                    backgroundColor: tab.color,
                    opacity: isActive ? 0.95 : 0.7,
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {/* 🫧 Bolha/halo de vidro — percorre a aba em foco, estilo "liquid glass" */}
              {isHighlighted && (
                <motion.span
                  layoutId="navbar-ring"
                  className="absolute -inset-[3px] rounded-full pointer-events-none"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.9)",
                    boxShadow:
                      "0 0 0 1px rgba(255,255,255,0.3), 0 2px 10px rgba(255,255,255,0.5), inset 0 1px 3px rgba(255,255,255,0.6)",
                  }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                />
              )}

              <motion.span
                animate={
                  hoveredTab === tab.id
                    ? { rotate: [0, -12, 12, -6, 0], y: [0, -3, 0] }
                    : {}
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-base sm:text-lg"
              >
                {tab.icon}
              </motion.span>

              {tab.label}
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
}
