import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 text-white overflow-hidden"
    >
      {/* Background Blur Circles */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <h2 className="text-4xl font-bold mb-20 text-cyan-400 text-center">
        📩 Contact Me
      </h2>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        {/* Left Info */}
        <motion.div
          className="space-y-6"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-cyan-300">
            Let's Connect
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Feel free to reach out for collaborations, projects, or just a
            friendly hello 👋. I’m always open to exciting opportunities and
            meaningful conversations.
          </p>

          <div className="flex gap-6 text-3xl text-cyan-400">
            <a href="https://www.facebook.com/mdmarjan.mdmarjan.18" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:scale-125 hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://github.com/Mj-Marjan" target="_blank" rel="noreferrer">
              <FaGithub className="hover:scale-125 hover:text-gray-400 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/md-marjan/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:scale-125 hover:text-blue-400 transition duration-300" />
            </a>
          </div>
        </motion.div>

        {/* Contact Info */}
       <motion.div
  className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl border border-white/20 space-y-6 
             transition duration-500 hover:scale-105 hover:shadow-cyan-500/30 hover:border-cyan-400"
  initial={{ x: 50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.7 }}
>
  <div className="flex items-center gap-4">
    <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
    <p className="text-gray-200">Rangpure, Dhaka, Bangladesh</p>
  </div>

  <div className="flex items-center gap-4">
    <FaPhone className="text-cyan-400 text-2xl" />
    <p className="text-gray-200">+880 1701-598139</p>
  </div>

  <div className="flex items-center gap-4">
    <FaEnvelope className="text-cyan-400 text-2xl" />
    <p className="text-gray-200">mdmarjan2233@gmail.com</p>
  </div>
</motion.div>

      </div>
    </section>
  );
}
