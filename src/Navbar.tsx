import { motion } from "framer-motion";

const tabs = [
  { id: "welcome", label: "Welcome", bgColor: "bg-[#fdf3f0]", textColor: "text-pink-500", icon: "★" }, // Usa a cor cream
  { id: "projects", label: "Projects", bgColor: "bg-[#bff0d3]", textColor: "text-gray-700" }, // Usa a cor mint
  { id: "about", label: "About", bgColor: "bg-[#ddd6fe]", textColor: "text-gray-700" }, // Usa a cor lavender
  { id: "contact", label: "Contact", bgColor: "bg-[#fde68a]", textColor: "text-gray-700" }, // Usa a cor butter
];

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center pt-2 px-4 pointer-events-none">
      {/* Container das abas - pointer-events-auto permite clicar apenas nas abas, 
          deixando o fundo transparente e "clicável" caso tenha algo atrás */}
      <ul className="flex gap-2 sm:gap-4 pointer-events-auto">
        {tabs.map((tab) => (
          <motion.li
            key={tab.id}
            // Animação ao passar o mouse (hover)
            whileHover={{ y: -5, scale: 1.05 }}
            // Animação ao clicar (tap)
            whileTap={{ scale: 0.95 }}
            className={`${tab.bgColor} ${tab.textColor} px-6 py-3 rounded-t-2xl rounded-b-none shadow-md cursor-pointer border-t border-l border-r border-black/5 flex items-center gap-2 transition-colors font-sans font-semibold tracking-wide`}
            onClick={() => scrollToSection(tab.id)}
          >
            {tab.icon && <span className="text-pink-500">{tab.icon}</span>}
            {tab.label}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}