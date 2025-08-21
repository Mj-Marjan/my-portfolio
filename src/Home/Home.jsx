import React from "react";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Pages/AboutSection";
import SkillsSection from "../Pages/SkillsSection";
import ProjectsSection from "../Pages/ProjectsSection";
import Education from "../Pages/Education";

const Home = () => {
  return (
    <div className="pt-20">
      <HeroSection id="home" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <ProjectsSection id="portfolio" />
      <Education id="education" />
      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-500 text-white text-4xl">
        Contact Section
      </section>
    </div>
  );
};

export default Home;
