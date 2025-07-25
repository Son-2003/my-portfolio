import { useEffect, useState } from "react";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {isDarkMode && <StarBackground isDarkMode={isDarkMode}/>}

      {/* Main Content */}
      <main>
        <HeroSection isDarkMode={isDarkMode}/>
        <AboutSection isDarkMode={isDarkMode}/>
        <SkillsSection isDarkMode={isDarkMode}/>
        <ProjectsSection isDarkMode={isDarkMode}/>
        <ContactSection isDarkMode={isDarkMode}/>
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode}/>
    </div>
  );
};
