import React from "react";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Pages/AboutSection";
import SkillsSection from "../Pages/SkillsSection";
import ProjectsSection from "../Pages/ProjectsSection";
import Education from "../Pages/Education";
import Contact from "../Pages/Contact";

const Home = () => {
  return (
    <div className="pt-20">
      <HeroSection id="home" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <ProjectsSection id="portfolio" />
      <Education id="education" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;
