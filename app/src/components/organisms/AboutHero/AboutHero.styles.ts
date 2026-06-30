import { alpha } from "@mui/material/styles";
import type { Theme } from "@mui/material";

export const styles = {
  navigationWrapper: (theme: Theme) => ({
    position: "sticky", // change to "fixed" if your home page uses a fixed navbar
    top: 0,
    zIndex: theme.zIndex.appBar,
    backgroundColor: theme.palette.background.default,
  }),

  section: (theme: Theme) => ({
    background: theme.palette.background.default,
    py: {
      xs: 6,
      md: 10,
    },
  }),

  container: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      lg: "1.1fr 1fr",
    },
    gap: 8,
    alignItems: "center",
  },

  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  eyebrow: (theme: Theme) => ({
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
    letterSpacing: 4,
    fontSize: 13,
    fontWeight: 600,
    mb: 2,
  }),

  title: (theme: Theme) => ({
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    color: theme.palette.text.primary,
    lineHeight: 1.15,
    mb: 4,
    fontSize: {
      xs: "2.8rem",
      md: "4rem",
    },

    "& span": {
      color: theme.palette.secondary.main,
    },
  }),

  description: (theme: Theme) => ({
    color: alpha(theme.palette.text.primary, 0.72),
    fontSize: "1.08rem",
    lineHeight: 1.9,
    mb: 3,
    maxWidth: 650,
  }),

  statsContainer: {
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(2,1fr)",
      sm: "repeat(4,1fr)",
    },
    gap: 3,
    mt: 5,
    pt: 4,
    borderTop: "1px solid",
    borderColor: "divider",
  },

  statValue: (theme: Theme) => ({
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    color: theme.palette.secondary.main,
    fontSize: "2rem",
  }),

  statLabel: (theme: Theme) => ({
    mt: 0.5,
    color: alpha(theme.palette.text.primary, 0.6),
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: ".78rem",
  }),

  right: {
    position: "relative",
  },

  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 2.5,
    alignItems: "start",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: 2.5,
  },

  image: {
    width: "100%",
    borderRadius: 5,
    objectFit: "cover",
    boxShadow: "0 20px 50px rgba(0,0,0,.12)",
    transition: ".4s",

    "&:hover": {
      transform: "translateY(-8px)",
    },
  },

  badge: (theme: Theme) => ({
    position: "absolute",
    bottom: 35,
    left: -20,

    background: theme.palette.secondary.main,
    color: "#fff",

    borderRadius: 4,
    px: 3,
    py: 2,

    boxShadow: "0 20px 50px rgba(0,0,0,.18)",

    zIndex: 20,
  }),

  badgeTitle: {
    fontSize: ".72rem",
    textTransform: "uppercase",
    letterSpacing: 2,
  },

  badgeYear: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: "2rem",
    lineHeight: 1,
    mt: 1,
  },
};
