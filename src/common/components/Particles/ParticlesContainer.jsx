import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import style from "../../../Main/Main.module.scss";

export const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {

    await loadFull(engine);
  }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);
  return (
    <Particles
      className={style.particle}
      id="tsparticles"
      init={particlesInit}
      //loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },

          color: {
            value: "#ffffff",
          },
          shadow: {
            enable: true,
            color: "#000000",
            blur: 5,
            offset: {
              x: 3,
              y: 3,
            },
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
            shadow: {
              enable: true,
              blur: 5,
              color: "#000000",
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        fullScreen: false,
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        fpsLimit: 120,
        retina_detect: true,
      }}
    />
  );
};
