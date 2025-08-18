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
      points: 6.0,
      spacing: 20.0,
      color: 0x64ffda, // teal color for points
      backgroundAlpha: 0, // transparent, will show gradient
      maxDistance: 25.0,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1a1b2e] via-[#2c2d44] to-[#0f0c29]">
      <div ref={vantaRef} className="w-full h-full" />
    </div>
  );
};

export default AnimatedBackground;
