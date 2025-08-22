import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import {
  Download,
  Pencil,
  Plane,
  Music,
  Coffee,
  Rocket,
  Brush,
  Gamepad,
  BookOpen,
  Film,
  User,
  Calendar,
  Flag,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import profile from "../assets/Mj.png";

const AboutSection = () => {
  return (
    <section className="relative py-20 bg-transparent text-white" id="about">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Profile Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#64ffda] to-[#00d9ff] blur-3xl opacity-50 animate-pulse"></div>
          <img
            src={profile}
            alt="profile"
            className="relative w-48 h-48 md:w-80 md:h-85 object-cover rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
          />

          {/* Resume Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://docs.google.com/document/d/1nT99iz9b839DubTinHg_vCOGnoaXAhW9llWDmtUyS1k/edit?tab=t.0"
            
            className="mt-6 inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg shadow-cyan-500/40 transition"
          >
            <Download size={18} /> Download Resume
          </motion.a>
        </motion.div>

        {/* Right Side - Info */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">ABOUT ME</h2>
          <p className="text-white mb-6 leading-relaxed">
            Hello! I'm{" "}
            <span className="text-cyan-400">Asfier Rahman Marjan</span>. A
            passionate MERN Stack Frontend Developer. I love creating dynamic,
            modern, and user-friendly web applications. Always curious and
            motivated to learn new technologies like{" "}
            <span className="text-cyan-300">Machine Learning</span>.I love
            turning ideas into real products using <br />{" "}
            <span className="text-cyan-400">
              <Typewriter
                words={["React, Node.js, and MongoDB."]}
                loop={0} // 0 means infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <User className="text-cyan-400" size={20} />
              <span>
                <span className="font-bold text-cyan-400">NAME:</span> Asfier
                Rahman Marjan
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Calendar className="text-cyan-400" size={20} />
              <span>
                <span className="font-bold text-cyan-400">DATE OF BIRTH:</span>{" "}
                2005 (20 years old)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Flag className="text-cyan-400" size={20} />
              <span>
                <span className="font-bold text-cyan-400">NATIONALITY:</span>{" "}
                Bangladeshi
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-cyan-400" size={20} />
              <span>
                <span className="font-bold text-cyan-400">ADDRESS:</span>{" "}
                Rangpur, Bangladesh
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-cyan-400" size={20} />
              <span>
                <span className="font-bold text-cyan-400">PHONE:</span> +880
                1701-598-139
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-cyan-400" size={20} />
              <span>
                <span className="font-bold text-cyan-400">E-MAIL:</span>{" "}
                mdmarjan2233@gmail.com
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Interests Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 mt-16"
      >
        <h3 className="text-3xl font-bold text-cyan-400 mb-10 text-center md:text-left md:ml-30">
          MY INTERESTS
        </h3>
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-8 text-center">
          {[
            { icon: Pencil, label: "Writing" },
            { icon: Plane, label: "Travel" },
            { icon: Music, label: "Music" },
            { icon: Coffee, label: "Coffee" },
            { icon: BookOpen, label: "Learning" },
            { icon: Film, label: "Movie Watching" },
            { icon: Gamepad, label: "Gaming" },
            { icon: User, label: "Community" },
            { icon: Rocket, label: "Tech" },
            { icon: Brush, label: "Design" },
          ].map(({ icon: Icon, label }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="group relative w-14 h-14 rounded-full border border-cyan-400 flex items-center justify-center cursor-pointer transition"
            >
              <Icon size={28} className="transition group-hover:text-black" />
              <span className="absolute bottom-[-2rem] opacity-0 group-hover:opacity-100 text-lg font-semibold text-cyan-300 mt-2 transition">
                {label}
              </span>
              <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition -z-10"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
