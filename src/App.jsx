import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import useMousePosition from "./hooks/useMousePosition";
import "./styles/globals.css";
import "./styles/animations.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const mousePosition = useMousePosition();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollTo = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll spy
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"].map(
      (id) => document.getElementById(id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => {
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10" />
        <div className="absolute top-20 left-10 w-4 h-4 border border-purple-500 rotate-45 animate-pulse" />
        <div
          className="absolute top-40 right-20 w-6 h-6 border border-pink-500 animate-spin"
          style={{ animationDuration: "8s" }}
        />
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-purple-500 rounded-full animate-bounce" />
      </div>

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        handleScrollTo={handleScrollTo}
      />

      {/* Sections */}
      <section id="home">
        <HeroSection isLoaded={isLoaded} handleScrollTo={handleScrollTo} />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
};

export default App;
