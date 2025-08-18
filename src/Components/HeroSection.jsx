import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/Marjan.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-between px-10 text-white">
      
      {/* Background handled by AnimatedBackground component */}
      
      {/* Left Content */}
      <div className="max-w-xl z-10">
        {/* Small tagline */}
        <p className="text-[#64ffda] font-semibold">• 4 0 4 NO BUGS FOUND</p>
        
        {/* Main Heading */}
        <h1 className="mt-4 font-bold">
          Hello I'm <br />{" "}
          <span className="text-5xl font-bold bg-gradient-to-r from-[#64ffda] via-[#00fff0] to-[#00d9ff] bg-clip-text text-transparent">
            Asfier Rahman,
          </span>{" "}
          <br />
          <span className="text-3xl text-white">And I'm a |</span> <br />
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-3xl font-bold bg-gradient-to-r from-[#64ffda] via-[#00fff0] to-[#00d9ff] bg-clip-text text-transparent drop-shadow-lg"
          >
            Frontend MERN Stack Developer
          </motion.h1>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-white">
          Frontend-focused MERN Stack Developer from Rangpur, Bangladesh. I
          create beautiful and functional web applications using the latest
          technologies. Passionate about coding and always eager to learn new
          skills.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#64ffda] to-[#00d9ff] text-black font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
            View My Work
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-400 text-white font-semibold hover:bg-gray-800 hover:text-[#64ffda] transition-colors duration-300">
            View & Download Resume
          </button>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex space-x-6 text-2xl text-gray-300">
          <a href="#" className="hover:text-[#64ffda] transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="hover:text-[#64ffda] transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-[#64ffda] transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-[#64ffda] transition-colors">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative z-10">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#64ffda] to-[#00d9ff] blur-3xl opacity-50 animate-pulse"></div>
        <img
          src={profile}
          alt="profile"
          className="relative w-80 h-80 object-cover rounded-full  shadow-8xl hover:scale-105 transition-transform duration-300"
        />
        <motion.div 
         initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
        className="absolute bottom-10 right-0 bg-gradient-to-r from-[#64ffda] to-[#00d9ff] px-4 py-2 rounded-xl shadow-lg">
            
          <p className="text-black font-bold">Full</p>
          <p className="text-sm text-gray-800">Stack Developer</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
