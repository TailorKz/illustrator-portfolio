import { Navbar } from "./components/Navbar";
import { FloatingIcon } from "./components/FloatingIcon";
import {
  HeartIcon,
  StarIcon,
  SparkleIcon,
  FlowerIcon,
} from "./components/Icons";
import { WelcomeSection } from "./components/WelcomeSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CursorSparkles } from "./components/CursorSparkles";

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--color-cream)] overflow-hidden">
      <CursorSparkles />
      {/* Navbar Fixa */}
      <Navbar />

      {/* Ícones Flutuantes de Background (Global) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <FloatingIcon top="10%" left="5%" duration={8} delay={0} rotate={15}>
          <StarIcon className="w-8 h-8 text-[var(--color-mint-deep)] opacity-60" />
        </FloatingIcon>
        <FloatingIcon
          top="20%"
          right="10%"
          duration={10}
          delay={1}
          rotate={-10}
        >
          <HeartIcon className="w-10 h-10 text-[var(--color-pink-soft)]" />
        </FloatingIcon>
        <FloatingIcon top="60%" left="8%" duration={7} delay={2} rotate={20}>
          <FlowerIcon className="w-12 h-12 text-[var(--color-lavender)] opacity-70" />
        </FloatingIcon>
        <FloatingIcon
          top="80%"
          right="5%"
          duration={9}
          delay={0.5}
          rotate={-25}
        >
          <SparkleIcon className="w-8 h-8 text-[var(--color-butter-deep)] opacity-50" />
        </FloatingIcon>
      </div>

      {/* Conteúdo das Seções */}
      <main className="relative z-10 flex flex-col items-center w-full pb-24">
        <WelcomeSection />
        <ProjectsSection />

        {/* Seção About (Placeholder) */}
        <section
          id="about"
          className="min-h-screen w-full flex items-center justify-center pt-24"
        >
          <h2 className="font-hand text-6xl text-[var(--color-ink)]">
            About me
          </h2>
        </section>

        {/* Seção Contact (Placeholder) */}
        <section
          id="contact"
          className="min-h-screen w-full flex items-center justify-center pt-24"
        >
          <h2 className="font-hand text-6xl text-[var(--color-ink)]">
            Contact
          </h2>
        </section>
      </main>
    </div>
  );
}

export default App;
