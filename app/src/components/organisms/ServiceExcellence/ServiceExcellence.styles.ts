import { alpha } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const styles = {
  section: (theme: Theme) => ({
    backgroundColor: theme.palette.background.default,

    py: {
      xs: 6,
      sm: 8,
      md: 10,
      lg: 12,
    },
  }),

  container: {
    position: "relative",

    overflow: "hidden",

    borderRadius: {
      xs: 4,
      md: 6,
      lg: 8,
    },

    minHeight: {
      xs: 420,
      sm: 500,
      md: 600,
      lg: 700,
    },

    display: "flex",

    alignItems: "center",
  },

  background: {
    position: "absolute",

    inset: 0,

    width: "100%",

    height: "100%",

    objectFit: "cover",

    objectPosition: "center",
  },

  overlay: {
    position: "absolute",

    inset: 0,

    background: {
      xs: "linear-gradient(180deg, rgba(36,20,10,.85) 0%, rgba(36,20,10,.78) 100%)",

      md: "linear-gradient(90deg, rgba(36,20,10,.92) 0%, rgba(36,20,10,.82) 45%, rgba(36,20,10,.72) 100%)",
    },
  },

  content: {
    position: "relative",

    zIndex: 2,

    width: "100%",

    maxWidth: {
      xs: "100%",
      md: 620,
      lg: 700,
    },

    px: {
      xs: 3,
      sm: 5,
      md: 8,
      lg: 10,
    },

    py: {
      xs: 5,
      sm: 6,
      md: 8,
    },
  },

  eyebrow: (theme: Theme) => ({
    color: theme.palette.secondary.main,

    textTransform: "uppercase",

    letterSpacing: {
      xs: 2,
      md: 5,
    },

    fontWeight: 600,

    fontSize: {
      xs: ".72rem",
      sm: ".8rem",
      md: ".85rem",
    },

    mb: 2,
  }),

  title: {
    color: "#fff",

    fontFamily: "'Playfair Display', serif",

    fontWeight: 700,

    lineHeight: 1.05,

    mb: 3,

    fontSize: {
      xs: "2.25rem",
      sm: "3rem",
      md: "4rem",
      lg: "5rem",
    },

    "& span": {
      display: "block",

      color: "transparent",

      WebkitTextStroke: {
        xs: "1px #D18A3B",
        md: "1.5px #D18A3B",
      },
    },
  },

  description: {
    color: alpha("#fff", 0.9),

    mt: {
      xs: 2,
      md: 4,
    },

    maxWidth: {
      xs: "100%",
      md: 560,
    },

    lineHeight: 1.8,

    fontSize: {
      xs: ".95rem",
      sm: "1rem",
      md: "1.15rem",
    },
  },

  chips: {
    display: "flex",

    flexWrap: "wrap",

    justifyContent: {
      xs: "center",
      md: "flex-start",
    },

    gap: {
      xs: 1,
      sm: 1.5,
      md: 2,
    },

    mt: {
      xs: 4,
      md: 5,
    },
  },
};
