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

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 2;

      for (let i = tabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(tabs[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            setActiveTab(tabs[i].id);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
   <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-3 md:pt-4 px-2 md:px-4 pointer-events-none">
     <motion.ul
       initial={{ y: -40, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.6, ease: "easeOut" }}
       onMouseLeave={() => setHoveredTab(null)}
       className="relative flex gap-0.5 max-[340px]:gap-0 sm:gap-2 pointer-events-auto bg-white/70 backdrop-blur-md px-1.5 py-1.5 max-[340px]:px-1 max-[340px]:py-1 md:px-2 md:py-2 rounded-full shadow-lg border border-black/5"
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
             /* Adicionado whitespace-nowrap (impede quebra de linha) e os redutores max-[340px]: */
             className="relative px-2.5 py-1.5 max-[340px]:px-1.5 max-[340px]:py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full cursor-pointer font-hand text-[14px] max-[340px]:text-[12px] sm:text-lg md:text-xl text-[var(--color-ink)] flex items-center gap-1 max-[340px]:gap-0.5 md:gap-1.5 select-none whitespace-nowrap"
           >
             <span
               className="absolute inset-0 rounded-full -z-20 pointer-events-none"
               style={{ backgroundColor: tab.color, opacity: 0.45 }}
             />
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
               className="text-sm max-[340px]:text-[10px] md:text-lg"
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
