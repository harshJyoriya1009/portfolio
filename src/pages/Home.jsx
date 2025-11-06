import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>


    </div>
  );
}
