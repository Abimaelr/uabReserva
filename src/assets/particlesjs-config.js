const opitions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 50,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 400,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#FFFF",
    },
    links: {
      color: "#FFFF",
      distance: 180,
      enable: true,
      opacity: 0.2,
      width: 2,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "right",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 1000,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 12,
    },
  },
  detectRetina: true,
}

export default opitions;
