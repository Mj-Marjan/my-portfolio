import Marquee from "react-fast-marquee";
import { useState } from "react";

const neonColors = ["#64ffda", "#ff61a6", "#ffd166", "#06d6a0", "#ef476f"];

const NewsTicker = () => {
  const items = [
    { logo: "⚙️", text: "MERN Stack Projects", description: "Full stack projects using MongoDB, Express, React, Node.js." },
    { logo: "🔐", text: "Authentication Systems", description: "Secure login, JWT, OAuth, and password protection." },
    { logo: "🎨", text: "UI/UX Design", description: "Modern, responsive, and user-friendly designs." },
    { logo: "🧠", text: "AI & Machine Learning", description: "AI powered features and ML models integration." },
    { logo: "🎤", text: "Debating & Communication", description: "Improve speaking & presentation skills." },
    { logo: "👨‍💼", text: "Project Leadership", description: "Leading teams & managing projects efficiently." },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <Marquee gradient={false} speed={60} className="py-25">
      {items.map((item, index) => {
        const color = neonColors[index % neonColors.length];
        return (
          <div
            key={index}
            className="relative flex items-center space-x-2 px-6 py-2 rounded-lg cursor-pointer"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Logo */}
            <span
              className="text-2xl"
              style={{
                color: color,
                textShadow: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}`,
              }}
            >
              {item.logo}
            </span>

            {/* Text */}
            <span
              className="font-semibold text-lg"
              style={{
                color: "white",
                textShadow: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}`,
              }}
            >
              {item.text}
            </span>

            {/* Hover Card */}
            {hoverIndex === index && (
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 bg-gray-900 bg-opacity-20 backdrop-blur-md rounded-xl p-4 shadow-lg border transition-all duration-300 scale-105 hover:scale-110 z-50"
                style={{
                  borderColor: color,
                  boxShadow: `0 0 15px ${color}, 0 0 30px ${color}, 0 0 45px ${color}`,
                }}
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    color: color,
                    textShadow: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}`,
                  }}
                >
                  {item.text}
                </h3>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </Marquee>
  );
};

export default NewsTicker;
