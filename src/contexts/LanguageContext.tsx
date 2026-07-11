import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Language } from "../data/i18n";

type LanguageContextType = {
  lang: Language;
  t: typeof translations.pt;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Inicia em PT por padrão
  const [lang, setLang] = useState<Language>("pt");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// Hook customizado para facilitar o uso
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  return context;
}
