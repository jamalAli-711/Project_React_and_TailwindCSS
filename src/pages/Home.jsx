import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import CVTemplate from "./CVTemplate";
// import {}
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* StarBackground Effects */}
        <StarBackground/>
      {/* Navbar */}
      <Navbar/>
      {/* ContactSection */}
      <br></br>
      <main >
      <HeroSection />
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      {/* <CVTemplate /> */}
      <ContactSection/>
      </main>

    </div>
  );
};
