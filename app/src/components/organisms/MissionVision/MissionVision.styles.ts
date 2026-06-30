import { alpha } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const styles = {
  section: (theme: Theme) => ({
    py: {
      xs: 10,
      md: 14,
    },
    backgroundColor: theme.palette.background.default,
  }),

  container: {
    display: "grid",

    gridTemplateColumns: {
      xs: "1fr",
      lg: "1fr 1fr",
    },

    gap: {
      xs: 8,
      lg: 10,
    },

    alignItems: "center",
  },

  left: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  divider: (theme: Theme) => ({
    width: 72,
    height: 4,
    borderRadius: 10,
    backgroundColor: theme.palette.secondary.main,
    mt: 2,
    mb: 4,
  }),

  featureGrid: {
    display: "grid",

    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(3,1fr)",
    },

    gap: 2,

    mt: 2,
  },

  right: {
    position: "relative",

    display: "flex",

    justifyContent: "center",
  },

  image: {
    width: "100%",

    maxWidth: 700,

    height: {
      xs: 380,
      lg: 700,
    },

    objectFit: "cover",

    borderRadius: 8,

    boxShadow: "0 25px 60px rgba(0,0,0,.18)",
  },

  imageOverlay: {
    position: "absolute",

    bottom: 0,

    left: 0,

    right: 0,

    padding: 5,

    borderRadius: 8,

    background: "linear-gradient(to top, rgba(0,0,0,.65), transparent)",

    color: "#fff",
  },

  quote: {
    fontStyle: "italic",

    fontSize: "1.15rem",
  },

  quoteAuthor: (theme: Theme) => ({
    mt: 1,

    color: alpha(theme.palette.secondary.light, 0.85),

    letterSpacing: 2,

    textTransform: "uppercase",

    fontSize: ".8rem",
  }),

  badge: (theme: Theme) => ({
    position: "absolute",

    top: 30,

    right: -20,

    backgroundColor: theme.palette.secondary.dark,

    color: "#fff",

    borderRadius: 4,

    padding: 3,

    minWidth: 150,

    boxShadow: "0 18px 40px rgba(0,0,0,.25)",
  }),

  badgeTitle: {
    fontSize: ".8rem",

    textTransform: "uppercase",

    letterSpacing: 2,
  },

  badgeValue: {
    fontSize: "2.4rem",

    fontWeight: 700,
  },

  badgeSubtitle: {
    opacity: 0.9,
  },
};
