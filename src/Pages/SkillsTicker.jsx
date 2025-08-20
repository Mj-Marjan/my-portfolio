import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiVite, SiFigma } from "react-icons/si";

const tickerSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-2xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-2xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500 text-2xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500 text-2xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-2xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-2xl" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500 text-2xl" /> },
];

export default function SkillsTicker() {
  return (
    <div className="relative overflow-hidden w-full py-6  mt-10 ">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...tickerSkills, ...tickerSkills].map((skill, index) => (
          <div key={index} className="flex items-center gap-2 text-white">
            {skill.icon}
            <span className="text-lg font-medium">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
