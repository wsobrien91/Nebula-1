import anime from "animejs";


export const wiggle = (targets) => anime({
    targets,
    translateX: 250,
    rotate: "1turn",
    backgroundColor: "#FFF",
    duration: 800,
  });