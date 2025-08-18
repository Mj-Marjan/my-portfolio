import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#0f172a]/95 to-[#1e293b]/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Port<span className="text-blue-400">folio</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
            <li key={item} className="relative cursor-pointer group">
              {item}
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          {/* Dark/Light toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* CV Button */}
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
            Download CV
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="md:hidden bg-[#0f172a]/95 px-6 py-4 space-y-4 text-white font-medium"
        >
          {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
            <div
              key={item}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {item}
            </div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
