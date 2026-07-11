import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = () => {
    toggleLanguage();
    setIsOpen(false);
  };

  return (
    <div
      id="language-switcher"
      ref={menuRef}
      className="fixed z-[100] transition-opacity duration-300 origin-top-right top-6 right-6 md:right-10 max-[540px]:top-20 max-[540px]:right-4 max-[540px]:scale-[0.85]"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 112 : 56,
        }}
        className="w-14 bg-white/90 backdrop-blur-md rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.08)] border border-black/5 overflow-hidden flex flex-col"
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-[56px] flex flex-col items-center justify-center cursor-pointer hover:bg-black/5 transition-colors shrink-0"
        >
          {lang === "pt" ? <FlagBR /> : <FlagEN />}
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleSelect}
              className="w-full h-[56px] flex flex-col items-center justify-center cursor-pointer hover:bg-black/5 transition-colors border-t border-black/5 shrink-0"
            >
              {lang === "pt" ? <FlagEN /> : <FlagBR />}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}


function FlagBR() {
  return (
    <>
      <div className="relative w-[32px] h-[22px] rounded-[3px] overflow-hidden drop-shadow-sm">
        <img
          src="https://flagcdn.com/br.svg"
          alt="Bandeira do Brasil"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-[10px] font-bold text-ink mt-[3px] tracking-wide select-none">BR</span>
    </>
  );
}

function FlagEN() {
  return (
    <>
      <div className="relative w-[32px] h-[22px] rounded-[3px] overflow-hidden drop-shadow-sm">
        {/* Bandeira UK no fundo (Aparece na metade inferior direita) */}
        <img
          src="https://flagcdn.com/gb.svg"
          alt="Bandeira Reino Unido"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Bandeira EUA por cima (Cortada na diagonal para aparecer só na metade superior esquerda) */}
        <img
          src="https://flagcdn.com/us.svg"
          alt="Bandeira Estados Unidos"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
      </div>
      <span className="text-[10px] font-bold text-ink mt-[3px] tracking-wide select-none">EN</span>
    </>
  );
}
