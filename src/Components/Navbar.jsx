import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navItems = ["home", "about", "skills", "portfolio","Education", "contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-white">Port<span className="text-blue-400">folio</span></h1>

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navItems.map(item => (
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

        <div className="flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
            Download CV
          </button>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }} className="md:hidden bg-gray-900/95 px-6 py-4 space-y-4 text-white font-medium">
          {navItems.map(item => (
            <ScrollLink key={item} to={item} smooth={true} duration={700} offset={-80} onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-blue-400 capitalize">
              {item}
            </ScrollLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
