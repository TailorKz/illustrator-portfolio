import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const tabs = [
  { id: "welcome", icon: "✿", color: "#f9a8c9" },
  { id: "projects", icon: "✎", color: "#ffcc85" },
  { id: "about", icon: "☺", color: "#f7f037" },
  { id: "contact", icon: "✉", color: "#b0ffb7" },
];

export function Navbar({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string | null>("welcome");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // 1. O RADAR INFALÍVEL (Busca a posição em tempo real)
  useEffect(() => {
    const handleScroll = () => {
      // Definimos a "linha de gatilho" bem no meio da tela
      const triggerPoint = window.innerHeight / 2;

      // Lemos as seções de trás para frente (Contact -> About -> Projects -> Welcome)
      // para garantir que a aba mude corretamente conforme rolamos para baixo
      for (let i = tabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(tabs[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Se o topo da seção cruzou a linha de gatilho, a bolha vai para ela
          if (rect.top <= triggerPoint) {
            setActiveTab(tabs[i].id);
            return; 
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Chama a função imediatamente para a bolha carregar no lugar certo
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
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

              {t.navbar[tab.id as keyof typeof t.navbar]}
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
}