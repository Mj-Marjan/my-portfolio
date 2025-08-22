import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["home", "about", "skills", "portfolio", "education", "contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/60 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        
        {/* Logo + Gradient Name */}
        <h1 className="flex items-center space-x-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-500 drop-shadow-lg text-xl md:text-3xl font-extrabold">
            MARJAN
          </span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navItems.map((item) => (
            <li key={item} className="relative cursor-pointer group">
              <ScrollLink
                to={item}
                smooth={true}
                duration={700}
                offset={-80}
                className="cursor-pointer capitalize"
              >
                {item}
              </ScrollLink>
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <a
            href="https://docs.google.com/document/d/1nT99iz9b839DubTinHg_vCOGnoaXAhW9llWDmtUyS1k/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#64ffda] to-[#00d9ff] text-black font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="md:hidden bg-gray-900/95 px-6 py-4 space-y-4 text-white font-medium"
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={700}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="block cursor-pointer hover:text-blue-400 capitalize text-lg"
              >
                {item}
              </ScrollLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
