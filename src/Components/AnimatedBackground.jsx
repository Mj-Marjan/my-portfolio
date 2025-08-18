import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const AnimatedBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      points: 6.0, // 🔹 Net density কমালাম
      backgroundColor: 0x0a192f, // 🔹 Navy Blue background
      color: 0x64ffda, // 🔹 Net line color (Mint/Turquoise)
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 z-0" />;
};

export default AnimatedBackground;
