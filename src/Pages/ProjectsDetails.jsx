import { useParams, useNavigate } from "react-router";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import imageMCMS from "../assets/MCMS.png";
import imageFAF from "../assets/lost-and-found.png";
import imageRoommate from "../assets/Roommat-finder.png";

const projects = {
  mcms: {
    title: "Medical Camp Management System",
    image: imageMCMS,
    description:
      "A full-stack MERN application to manage medical camps where organizers can create and manage camps, and participants can register, pay, and track their activities.",
    features: [
      "Organizer can create & manage camps",
      "Participants can register & pay securely",
      "Stripe payment integration",
      "Authentication & authorization system",
    ],
    tech: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Stripe"],
    github:
      "https://github.com/Mj-Marjan/Mj-Marjan-Medical-Camp-Management-System-client-side",
    live: "https://medical-camp-ee67c.web.app/",
  },
  ecommerce: {
    title: "Lost and Found Item",
    image: imageFAF,
    description:
      "A web app where users can post lost or found items. Includes authentication, protected routes, CRUD operations, and conditional contact info display.",
    features: [
      "Users can post lost & found items",
      "Authentication & JWT secured routes",
      "CRUD operations implemented",
      "Conditional contact info display",
    ],
    tech: ["React", "Firebase", "Express", "MongoDB", "JWT"],
    github:
      "https://github.com/Mj-Marjan/find-and-lose-website-client-side",
    live: "https://lost-and-found-item-74d5f.web.app/",
  },
  portfolio: {
    title: "Roommate Finder Website",
    image: imageRoommate,
    description:
      "A roommate finder platform where users can create profiles, search for roommates, like profiles, and securely contact potential matches.",
    features: [
      "User profile creation & search",
      "Like & favorite profiles",
      "Secure contact info sharing",
      "Responsive UI & protected routes",
    ],
    tech: ["React", "TailwindCSS", "Firebase", "Express", "MongoDB"],
    github:
      "https://github.com/Mj-Marjan/Roomate-finder-website-clint-site",
    live: "https://auth-intrigation-roomate.web.app/",
  },
};

export default function ProjectsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) {
    return (
      <div className="text-center py-20 text-white min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl">❌ Project Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-5 px-5 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full hover:scale-105 transition-transform duration-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 text-white  max-w-5xl min-h-screen mx-auto">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full"
      >
        ⬅ Back
      </button>

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg"
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 sm:h-72 object-cover rounded-xl mb-6"
        />

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        <h3 className="text-lg sm:text-xl font-semibold mb-3">🚀 Key Features:</h3>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {/* Tech Stack */}
        <h3 className="text-lg sm:text-xl font-semibold mb-3">
          ⚡ Technologies Used:
        </h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 hover:scale-105 transition-transform duration-300 rounded-full"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#64ffda] to-[#00d9ff] text-black rounded-full hover:scale-105 transition-transform duration-300"
          >
            <FaExternalLinkAlt /> Live Site
          </a>
        </div>
      </motion.div>

      {/* Back to projects button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-black rounded-full transition-colors duration-300"
        >
          🔙 Back to All Projects
        </button>
      </div>
    </section>
  );
}
