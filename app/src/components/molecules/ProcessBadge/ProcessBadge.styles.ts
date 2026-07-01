import { alpha } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const styles = {
  container: (theme: Theme) => ({
    position: "absolute",

    left: "50%",
    top: "58%",

    transform: "translate(-50%, -50%)",

    background: "linear-gradient(180deg,#2B1A11 0%, #1A100A 100%)",

    color: "#fff",

    width: {
      xs: 170,
      sm: 190,
      md: 210,
    },

    height: {
      xs: 170,
      sm: 190,
      md: 210,
    },

    borderRadius: 4,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    textAlign: "center",

    border: `1px solid ${alpha(theme.palette.secondary.main, 0.35)}`,

    boxShadow: "0 25px 60px rgba(0,0,0,.35)",

    zIndex: 10,
  }),

  number: (theme: Theme) => ({
    fontFamily: "'Playfair Display', serif",

    color: theme.palette.secondary.main,

    fontWeight: 700,

    lineHeight: 1,

    fontSize: {
      xs: "3rem",
      md: "4rem",
    },

    mb: 1,
  }),

  title: {
    textTransform: "uppercase",

    letterSpacing: 2,

    fontWeight: 600,

    fontSize: {
      xs: ".8rem",
      md: ".95rem",
    },

    mb: 1,
  },

  divider: (theme: Theme) => ({
    width: 50,

    height: 2,

    bgcolor: theme.palette.secondary.main,

    borderRadius: 999,

    mb: 2,
  }),

  subtitle: {
    color: "rgba(255,255,255,.75)",

    fontSize: {
      xs: ".8rem",
      md: ".9rem",
    },

    px: 2,

    lineHeight: 1.6,
  },
};
