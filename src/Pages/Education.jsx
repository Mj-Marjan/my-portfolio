import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Education() {
  const timeline = [
    {
      title: "Diploma in Computer Science & Technology (CST)",
      place: "BTEB | Session: 2021 - 2022",
      description:
        "Completed a 4-year Diploma focusing on software development, database, and networking fundamentals.",
    },
    {
      title: "SCIC - Programming Hero (Batch 11)",
      place: "Programming Hero | 2025 (Ongoing)",
      description:
        "Selected for the Special Coaching Program (SCIC). Currently building MERN projects and sharpening problem solving skills.",
    },
    {
      title: "Future Plan - BSc in CSE",
      place: "Daffodil International University",
      description:
        "Planning to pursue a Bachelor’s degree in Computer Science & Engineering to enhance knowledge in AI, Software Engineering, and Research.",
    },
  ];

  return (
    <section className="py-16 px-6 text-white" id="education" >
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">
        🎓 Education
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-cyan-400 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content Box */}
              <motion.div
                className="md:w-1/2 p-6 bg-white/10 backdrop-blur-xl 
                border border-white/20 rounded-2xl shadow-lg
                hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300"
                animate={{ 
                  y: [0, -10, 0] // up-down floating
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              >
                <h3 className="text-xl font-semibold text-cyan-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{item.place}</p>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>

              {/* Icon */}
              <motion.div
                className="relative flex items-center justify-center w-12 h-12 
                bg-cyan-500 rounded-full shadow-lg mx-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <FaGraduationCap className="text-white text-lg" />
              </motion.div>

              {/* Empty Spacer */}
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
