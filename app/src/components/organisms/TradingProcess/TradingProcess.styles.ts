import { alpha } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const styles = {
  section: (theme: Theme) => ({
    py: {
      xs: 8,
      md: 12,
      lg: 14,
    },

    background: "#1B120C",
    position: "relative",
    overflow: "hidden",
  }),

  container: {
    display: "grid",

    gridTemplateColumns: {
      xs: "1fr",
      lg: "1.1fr .9fr",
    },

    gap: {
      xs: 6,
      md: 8,
      lg: 10,
    },

    alignItems: "center",
  },

  left: {
    display: "flex",
    flexDirection: "column",
  },

  title: {
    color: "#fff",
    mb: 6,
  },

  subtitle: {
    color: "rgba(255,255,255,.72)",

    maxWidth: 700,

    lineHeight: 1.8,

    mb: {
      xs: 5,
      md: 7,
    },

    fontSize: {
      xs: ".95rem",
      md: "1.05rem",
    },
  },

  imageContainer: {
    position: "relative",

    width: "100%",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    minHeight: {
      xs: 420,
      md: 620,
    },
  },

  image: {
    width: "100%",

    maxWidth: 520,

    height: {
      xs: 420,
      md: 620,
    },

    objectFit: "cover",

    borderRadius: 6,

    boxShadow: "0 25px 70px rgba(0,0,0,.35)",

    transition: "transform .45s ease",

    "&:hover": {
      transform: "scale(1.03)",
    },
  },

  badgeWrapper: {
    position: "absolute",

    inset: 0,

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    pointerEvents: "none",
  },

  backgroundGlow: (theme: Theme) => ({
    position: "absolute",

    right: -180,

    top: -180,

    width: 420,

    height: 420,

    borderRadius: "50%",

    background: alpha(theme.palette.secondary.main, 0.08),

    filter: "blur(120px)",
  }),

  backgroundGlowBottom: (theme: Theme) => ({
    position: "absolute",

    left: -220,

    bottom: -220,

    width: 480,

    height: 480,

    borderRadius: "50%",

    background: alpha(theme.palette.secondary.main, 0.05),

    filter: "blur(140px)",
  }),
};
