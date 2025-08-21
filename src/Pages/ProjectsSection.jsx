import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import imageMCMS from "../assets/MCMS.png";
import imageFAF from "../assets/lost-and-found.png";
import imageRoommate from "../assets/Roommat-finder.png";

const projects = [
  {
    id: 1,
     key: "mcms",
    title: "MCMS Website",
    image: imageMCMS,
    github: "https://github.com/Mj-Marjan/Mj-Marjan-Medical-Camp-Management-System-client-side",
    live: "https://medical-camp-ee67c.web.app/",
    route: "/projects/mcms",
  },
  {
    id: 2,
    title: "lost-and-found-item",
    key: "ecommerce",
    image: imageFAF,
    github: "https://github.com/Mj-Marjan/find-and-lose-website-client-side",
    live: "https://lost-and-found-item-74d5f.web.app/",
    route: "/projects/ecommerce",
  },
  {
    id: 3,
    title: "Roommate Finder Website",
    key: "portfolio",
    image: imageRoommate,
    github: "https://github.com/Mj-Marjan/Roomate-finder-website-clint-site",
    live: "https://auth-intrigation-roomate.web.app/",
    route: "/projects/portfolio",
  },
];

export default function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 text-white" id="portfolio">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white py-6">Explore</p>
        <h2 className="text-4xl font-bold mb-10 text-cyan-400"> 🚀 My Recent Projects</h2>

        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative w-64 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg cursor-pointer flex flex-col"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,255,255,0.5)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
              animate={{ y: [0, -10, 0] }} // Floating animation
              transition={{ duration: 3, repeat: 1, ease: "easeInOut", delay: index * 0.3 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover rounded-t-2xl"
              />

              {/* Card Content */}
              <div className="p-4  flex flex-col gap-3">
                <h3 className="text-lg font-semibold">{project.title}</h3>

                <div className="flex justify-between items-center mt-2">
                  {/* Left Side → GitHub + Live */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-gradient-to-r from-[#64ffda] to-[#00d9ff] hover:opacity-80 transition"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>

                  {/* Right Side → View More */}
                  <button
                    onClick={() => navigate(`/projects/${project.key}`)}
                    className="px-3 py-1 bg-gradient-to-r from-[#64ffda] to-[#00d9ff] text-black font-semibold rounded-full hover:opacity-80 transition"
                  >
                    View More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
