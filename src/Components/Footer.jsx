import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_x3n7sy6", // তোমার Service ID
        "template_yoxjlhm", // তোমার Template ID
        { user_email: email, message: message },
        "GtrmG4jm7Xb-B3RMp" // তোমার Public Key
      )
      .then(
        () => {
          toast.success("✅ Email sent successfully!");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast.error("❌ Something went wrong: " + error.text);
        }
      );
  };

  return (
    <footer className="bg-white/5 backdrop-blur-2xl text-gray-200 py-10 px-6 mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h1 className="flex items-center space-x-3 text-3xl font-extrabold">
            {/* লোগো - external URL */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />

            {/* Gradient Name */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-purple-500 drop-shadow-lg">
              MARJAN
            </span>
          </h1>
          <p className="mt-2 text-gray-400">
            Full Stack Web Developer | MERN Stack Enthusiast
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Email Form */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Stay in Touch
          </h3>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white/10 p-4 rounded-xl border border-white/20"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-300 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <textarea
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-300 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition font-semibold"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Md Asfier Rahman Marjan. All Rights
        Reserved.
      </div>
    </footer>
  );
}
