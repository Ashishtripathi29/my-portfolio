// src/components/Background.js
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Background() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#000000" }, // Background color
        },
        particles: {
          number: { value: 70 }, // Number of dots
          color: { value: "#00ff99" }, // Dot color
          links: {
            enable: true,
            color: "#00ff99",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Keeps background behind content
      }}
    />
  );
}

export default Background;
