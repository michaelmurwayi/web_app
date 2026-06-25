import type { OurServicesStyle } from "./OurServices.types";

export const OurServicesStyles: OurServicesStyle = {
  root: {
    position: "relative",

    overflow: "hidden",

    py: {
      xs: 10,
      md: 16,
    },

    px: 2,

    background: `
      radial-gradient(circle at top left, rgba(200,135,54,.12), transparent 35%),
      radial-gradient(circle at bottom right, rgba(111,69,35,.15), transparent 40%),
      linear-gradient(
        180deg,
        #0A0908 0%,
        #14100D 50%,
        #0A0908 100%
      )
    `,

    "&::before": {
      content: '""',

      position: "absolute",

      inset: 0,

      background:
        "linear-gradient(rgba(255,255,255,.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.015) 1px, transparent 1px)",

      backgroundSize: "60px 60px",

      opacity: 0.2,

      pointerEvents: "none",
    },
  },

  container: {
    position: "relative",

    zIndex: 2,

    maxWidth: "1440px",

    mx: "auto",
  },

  header: {
    display: "flex",

    flexDirection: "column",

    alignItems: "center",

    textAlign: "center",

    mb: {
      xs: 8,
      md: 10,
    },
  },

  subtitle: {
    mt: 4,

    maxWidth: 760,

    color: "#D9D0C7",

    fontSize: {
      xs: "1rem",
      md: "1.15rem",
    },

    lineHeight: 1.9,

    letterSpacing: ".02em",
  },

  cards: {
    display: "flex",

    flexDirection: "column",

    gap: {
      xs: 4,
      md: 5,
    },

    mt: 6,
  },
};
