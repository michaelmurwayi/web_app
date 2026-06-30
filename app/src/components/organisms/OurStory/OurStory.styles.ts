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
      lg: "1fr 1.05fr",
    },
    gap: {
      xs: 6,
      md: 10,
    },
    alignItems: "center",
  },

  imageWrapper: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: {
      xs: 350,
      md: 620,
    },
    objectFit: "cover",
    borderRadius: 6,
    boxShadow: "0 25px 60px rgba(0,0,0,.15)",
    transition: ".4s",

    "&:hover": {
      transform: "scale(1.02)",
    },
  },

  content: {
    display: "flex",
    flexDirection: "column",
  },

  eyebrow: (theme: Theme) => ({
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
    letterSpacing: 4,
    fontWeight: 600,
    mb: 2,
    fontSize: 13,
  }),

  title: (theme: Theme) => ({
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    lineHeight: 1.15,
    color: theme.palette.text.primary,
    mb: 4,
    fontSize: {
      xs: "2.4rem",
      md: "3.5rem",
    },

    "& span": {
      color: theme.palette.secondary.main,
    },
  }),

  paragraph: (theme: Theme) => ({
    color: alpha(theme.palette.text.primary, 0.72),
    lineHeight: 1.9,
    fontSize: "1.05rem",
    mb: 3,
  }),

  featureGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
    },
    gap: 2,
    mt: 4,
  },

  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },

  featureText: (theme: Theme) => ({
    fontWeight: 600,
    color: theme.palette.text.primary,
  }),
};
