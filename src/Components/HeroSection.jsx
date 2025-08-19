import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { Typewriter } from "react-simple-typewriter";

import profile from "../assets/Marjan.png";
import { FaReact, FaNodeJs, FaJsSquare, FaCss3Alt, FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const HeroSection = () => {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const textVariant = { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 1 } } };
  const imageVariant = { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 1 } } };
  const iconVariant = { hidden: { y: -50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1, repeat: Infinity, repeatType: "mirror" } } };

  // Social links
  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/yourusername" },
    { icon: FaLinkedin, link: "https://linkedin.com/in/yourusername" },
    { icon: FaTwitter, link: "https://twitter.com/yourusername" },
    { icon: FaFacebook, link: "https://facebook.com/yourusername" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-10 text-white overflow-hidden">

      {/* Particles Background */}
      <Particles
        options={{
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
          particles: {
            color: { value: "#64ffda" },
            links: { enable: true, color: "#64ffda", distance: 150 },
            move: { enable: true, speed: 1 },
            number: { value: 50 },
            size: { value: 3 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Left Content */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-xl z-10 text-center md:text-left">
        
        <motion.p variants={textVariant} className="text-[#64ffda] font-semibold text-sm md:text-base">
          • 4 0 4 NO BUGS FOUND
        </motion.p>

        <motion.h1 variants={textVariant} className="mt-4 font-bold">
          Hello I'm <br />
          <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#64ffda] via-[#00fff0] to-[#00d9ff] bg-clip-text text-transparent">
            Asfier Rahman,
          </span>{" "}
          <br />
          <span className="text-lg md:text-2xl text-white">And I'm a |</span>{" "}
          <br />
          <motion.span variants={textVariant} className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#64ffda] via-[#00fff0] to-[#00d9ff] bg-clip-text text-transparent drop-shadow-lg">
           <span className="text-cyan-400">
    <Typewriter
      words={[' Frontend MERN Stack Developer']}
      loop={0} // 0 means infinite loop
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
          </motion.span>
        </motion.h1>

        <motion.p variants={textVariant} className="mt-6 text-sm md:text-lg text-gray-200 leading-relaxed">
          Frontend-focused MERN Stack Developer from Rangpur, Bangladesh. I
          create beautiful and functional web applications using the latest
          technologies. Passionate about coding and always eager to learn new
          skills.
        </motion.p>

        {/* Social Icons in circle above buttons */}
        <motion.div variants={textVariant} className="mt-6 flex justify-center md:justify-start gap-4">
          {socialLinks.map(({ icon: Icon, link }, idx) => (
            <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
              <div className="w-12 h-12 rounded-full border border-gray-400 hover:text-black text-white hover:bg-gradient-to-r from-[#64ffda] via-[#00fff0] to-[#00d9ff] flex items-center justify-center text-black text-xl hover:scale-110 transition-transform duration-300 shadow-lg">
                <Icon />
              </div>
            </a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div variants={textVariant} className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#64ffda] to-[#00d9ff] text-black font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
            View My Work
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-400 text-white font-semibold hover:bg-gray-800 hover:text-[#64ffda] transition-colors duration-300">
            View & Download Resume
          </button>
        </motion.div>
      </motion.div>

      {/* Right Content - Image + Floating Tech Icons */}
      <motion.div variants={imageVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10 mt-10 md:mt-0 flex justify-center">
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#64ffda] to-[#00d9ff] blur-3xl opacity-50 animate-pulse"></div>
        <img src={profile} alt="profile" className="relative w-48 h-48 md:w-80 md:h-80 object-cover rounded-full shadow-2xl hover:scale-105 transition-transform duration-300" />
        <div className="absolute bottom-5 md:bottom-10 right-2 md:right-0 bg-gradient-to-r from-[#64ffda] to-[#00d9ff] px-3 py-2 md:px-4 md:py-2 rounded-xl shadow-lg">
          <p className="text-black font-bold text-sm md:text-base">Full</p>
          <p className="text-xs md:text-sm text-gray-800">Stack Developer</p>
        </div>

        {/* Floating Tech Icons */}
        <motion.div variants={iconVariant} className="absolute top-[-20px] left-[-20px] text-[#61dafb] text-3xl"><FaReact /></motion.div>
        <motion.div variants={iconVariant} className="absolute top-[-10px] right-[-15px] text-[#f0db4f] text-3xl"><FaJsSquare /></motion.div>
        <motion.div variants={iconVariant} className="absolute bottom-[-15px] left-[10px] text-[#3c873a] text-3xl"><FaNodeJs /></motion.div>
        <motion.div variants={iconVariant} className="absolute bottom-[-10px] right-[10px] text-[#264de4] text-3xl"><FaCss3Alt /></motion.div>

      </motion.div>

    </section>
  );
};

export default HeroSection;
