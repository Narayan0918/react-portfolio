// src/particlesConfig.js
const particlesConfig = {
  // The 'background' property has been removed.
  fpsLimit: 120,
  interactivity: {
    events: {
      resize: true,
    },
  },
  particles: {
    color: {
      value: ['#00ffff', '#ff8c00'],
    },
    links: {
      color: '#444',
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
    twinkle: {
      particles: {
        enable: true,
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
  detectRetina: true,
};

export default particlesConfig;