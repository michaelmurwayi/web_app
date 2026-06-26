import type { SxProps, Theme } from "@mui/material";

export const CompanySloganStyles: Record<string, SxProps<Theme>> = {
  root: {
    py: {
      xs: 10,
      md: 14,
    },
    px: 2,
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(180deg, #FFFDF9 0%, #F8F3EB 100%)",
  },

  container: {
    maxWidth: 1000,
    mx: "auto",
    textAlign: "center",
  },

  quoteContainer: {
    mt: 8,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    gap: 2,
  },

  quoteMark: {
    fontSize: {
      xs: "4rem",
      md: "6rem",
    },

    lineHeight: 1,

    color: "#B7782E",

    opacity: 0.35,

    fontFamily: "Playfair Display, serif",

    userSelect: "none",
  },

  slogan: {
    maxWidth: 850,

    mx: "auto",

    textAlign: "center",

    fontFamily: '"Playfair Display", serif',

    fontStyle: "italic",

    fontWeight: 600,

    color: "#2E1B12",

    lineHeight: 1.25,

    letterSpacing: "0.02em",

    fontSize: {
      xs: "2rem",
      sm: "2.5rem",
      md: "3.5rem",
      lg: "4.25rem",
    },

    px: {
      xs: 2,
      md: 6,
    },
  },
};
