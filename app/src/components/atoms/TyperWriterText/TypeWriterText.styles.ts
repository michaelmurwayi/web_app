export const TypewriterTextStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },

  word: {
    position: "relative",

    opacity: 0,

    transform: "translateY(20px)",

    transition: `
      opacity 0.8s ease,
      transform 0.8s ease,
      color 0.4s ease
    `,
  },

  visible: {
    opacity: 1,
    transform: "translateY(0)",
  },

  completed: {
    textShadow: "0 0 12px rgba(200,135,54,0.25)",
  },

  cursor: {
    display: "inline-block",

    width: "2px",

    height: "1em",

    marginLeft: "4px",

    verticalAlign: "middle",

    backgroundColor: "currentColor",

    animation: "blink 1s infinite",
  },
};
