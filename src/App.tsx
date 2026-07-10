import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { FloatingIcon } from "./components/FloatingIcon";
import { HeartIcon, StarIcon, SparkleIcon, FlowerIcon } from "./components/Icons";
import { WelcomeSection } from "./components/WelcomeSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CursorSparkles } from "./components/CursorSparkles";
import { LoadingScreen } from "./components/LoadingScreen";
import { AllProjectsPage } from "./components/AllProjectsPage";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";

const PRELOAD_IMAGES = [
  "/estrelas1.png", "/estrelas2.png", "/folha.png", "/canetas.png",
  "/clips.png", "/clippreto.png", "/chaveirinho.png", "/alfinete.png",
  "/laco.png", "/papelzinho.png"
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // ESTADO QUE CONTROLA AS PÁGINAS DO SITE
  const [currentPage, setCurrentPage] = useState<"home" | "all-projects">("home");

  useEffect(() => {
    const loadImages = Promise.all(
      PRELOAD_IMAGES.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        });
      })
    );

    const minTime = new Promise((resolve) => setTimeout(resolve, 2200));

    Promise.all([loadImages, minTime]).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--color-cream)] overflow-hidden">
      
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <CursorSparkles />
      
      <Navbar onNavigate={() => setCurrentPage("home")} />

      {/* Ícones flutuantes decorativos globais */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <FloatingIcon top="10%" left="5%" duration={8} delay={0} rotate={15}>
          <StarIcon className="w-8 h-8 text-[var(--color-mint-deep)] opacity-60" />
        </FloatingIcon>
        <FloatingIcon top="20%" right="10%" duration={10} delay={1} rotate={-10}>
          <HeartIcon className="w-10 h-10 text-[var(--color-pink-soft)]" />
        </FloatingIcon>
        <FloatingIcon top="60%" left="8%" duration={7} delay={2} rotate={20}>
          <FlowerIcon className="w-12 h-12 text-[var(--color-lavender)] opacity-70" />
        </FloatingIcon>
        <FloatingIcon top="80%" right="5%" duration={9} delay={0.5} rotate={-25}>
          <SparkleIcon className="w-8 h-8 text-[var(--color-butter-deep)] opacity-50" />
        </FloatingIcon>
      </div>

      <main className="relative z-10 flex flex-col items-center w-full">
        {currentPage === "home" ? (
          <>
            <WelcomeSection isLoading={isLoading} />
            <ProjectsSection onSeeAll={() => setCurrentPage("all-projects")} />
            
            {/* Chamando a nossa nova seção! */}
            <AboutSection />
            <ContactSection />
            {/* O fundo do contato agora combina com o rasgo da AboutSection */}
            
          </>
        ) : (
          <AllProjectsPage onBack={() => setCurrentPage("home")} />
        )}
      </main>
    </div>
    
  );
}

export default App;