import type { AboutSectionStyle } from "./AboutSection.types";

export const AboutSectionStyles: AboutSectionStyle = {
  root: {
    backgroundColor: "#F5EEE4",
    py: {
      xs: 8,
      md: 12,
    },
    px: 2,
    overflow: "hidden",

    "@keyframes fadeSlide": {
      "0%": {
        opacity: 0,
        transform: "translateY(30px)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },

    "@keyframes floatImage": {
      "0%": {
        transform: "translateY(0px)",
      },
      "50%": {
        transform: "translateY(-12px)",
      },
      "100%": {
        transform: "translateY(0px)",
      },
    },
  },

  container: {
    maxWidth: "1280px",
    mx: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },

  slide: {
    animation: "fadeSlide 700ms ease",
  },

  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: {
      xs: 5,
      md: 8,
    },

    flexDirection: {
      xs: "column",
      md: "row",
    },
  },

  image: {
    width: {
      xs: "100%",
      md: "48%",
    },

    maxHeight: {
      xs: 420,
      md: 700,
    },

    objectFit: "cover",

    borderRadius: "32px",

    boxShadow: "0 24px 60px rgba(0,0,0,.12)",

    animation: "floatImage 6s ease-in-out infinite",

    transition: "transform .4s ease, box-shadow .4s ease",

    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0 30px 70px rgba(0,0,0,.18)",
    },
  },

  contentWrapper: {
    width: {
      xs: "100%",
      md: "48%",
    },

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    gap: 3,
  },

  slideTitle: {
    fontSize: {
      xs: "2rem",
      md: "3rem",
    },

    fontWeight: 700,

    color: "#4B2E2B",

    lineHeight: 1.2,
  },

  description: {
    fontSize: {
      xs: "1rem",
      md: "1.125rem",
    },

    lineHeight: 1.9,

    color: "#6A5B52",
  },

  indicators: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    gap: 2,

    mt: 5,
  },

  indicator: {
    width: 14,
    height: 14,
    border: "none",
    borderRadius: "50%",

    cursor: "pointer",

    transition: "all .3s ease",

    "&:hover": {
      transform: "scale(1.2)",
    },
  },

  navigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: 4,
  },
};
