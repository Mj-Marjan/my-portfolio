import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiVite, SiFigma } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" />, level: 90 },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" />, level: 85 },
  { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" />, level: 80 },
  { name: "Express.js", icon: <SiExpress className="text-gray-500 text-4xl" />, level: 75 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" />, level: 85 },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" />, level: 90 },
  { name: "Vite", icon: <SiVite className="text-purple-500 text-4xl" />, level: 80 },
  { name: "GitHub", icon: <FaGithub className="text-white text-4xl" />, level: 85 },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" />, level: 80 },
  { name: "Figma", icon: <SiFigma className="text-pink-500 text-4xl" />, level: 70 },
];

// 🔹 Parent container animation (stagger effect)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // প্রতিটা কার্ড একটার পর একটা আসবে
      delayChildren: 0.2,
    },
  },
};

// 🔹 Child (card) animation
const cardVariants = {
  hiddenLeft: { opacity: 0, x: -120 },
  hiddenRight: { opacity: 0, x: 120 },
  visible: { opacity: 1, x: 0 },
};

export default function SkillsSection() {
  return (
    <section className="py-16 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Gradient Headline */}
       <h2 className="text-4xl font-bold mb-6 text-cyan-400"> 💻My Skills</h2>

        {/* Container with stagger */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center justify-center 
                bg-white/10 backdrop-blur-lg border border-white/20
                p-6 rounded-2xl shadow-lg cursor-pointer overflow-hidden group"
              variants={cardVariants}
              initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.08 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
              }}
            >
              {/* Shine Effect Layer */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              </div>

              {/* Icon */}
              {skill.icon}
              <p className="mt-3 text-lg font-semibold">{skill.name}</p>

              {/* Progress Bar */}
              <div className="w-full mt-4 bg-white/20 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-[#64ffda] via-[#00fff0] to-[#00d9ff]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                ></motion.div>
              </div>
              <p className="text-sm mt-1">{skill.level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
