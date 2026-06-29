import type { ServiceCardStyles } from "./ServiceCard.types";

export const serviceCardStyles: ServiceCardStyles = {
  root: {
    display: "grid",

    gridTemplateColumns: {
      xs: "1fr",
      md: "320px 90px 1fr 120px",
    },

    alignItems: "center",

    overflow: "hidden",

    borderRadius: "24px",

    background: "linear-gradient(90deg,#17120F 0%,#0E0B09 100%)",

    border: "1px solid rgba(199,142,73,.25)",

    transition: "all .35s ease",

    position: "relative",

    "&:hover": {
      transform: "translateY(-8px)",

      boxShadow: "0 24px 60px rgba(0,0,0,.35)",

      borderColor: "#C88736",
    },
  },

  imageContainer: {
    overflow: "hidden",

    height: {
      xs: 220,
      md: 240,
    },
  },

  image: {
    width: "100%",

    height: "100%",

    objectFit: "cover",

    transition: "transform .6s ease",

    "&:hover": {
      transform: "scale(1.08)",
    },
  },

  overlay: {
    position: "absolute",

    inset: 0,

    background: "linear-gradient(90deg,transparent 0%,rgba(0,0,0,.25) 100%)",

    pointerEvents: "none",
  },

  iconWrapper: {
    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    width: 74,

    height: 74,

    mx: "auto",

    borderRadius: "50%",

    border: "1px solid #C88736",

    color: "#E8C28B",

    background: "linear-gradient(180deg,#9D6333,#6E4324)",

    transition: ".35s",

    "& svg": {
      fontSize: 34,
    },

    "&:hover": {
      transform: "rotate(8deg) scale(1.08)",
    },
  },

  content: {
    py: 5,

    px: {
      xs: 3,
      md: 0,
    },
  },

  title: {
    color: "#D7A05E",

    fontSize: {
      xs: "1.8rem",
      md: "2.2rem",
    },

    fontWeight: 700,

    fontFamily: "'Playfair Display', serif",

    mb: 2,
  },

  description: {
    color: "#DDD5CC",

    lineHeight: 1.9,

    fontSize: "1rem",

    maxWidth: 560,
  },

  number: {
    fontSize: {
      xs: "3rem",
      md: "5rem",
    },

    fontWeight: 800,

    color: "rgba(200,135,54,.18)",

    textAlign: "center",

    userSelect: "none",
  },

  decoration: {
    position: "absolute",

    right: 30,

    bottom: 20,

    opacity: 0.06,

    fontSize: 150,

    color: "#C88736",

    pointerEvents: "none",
  },
};
