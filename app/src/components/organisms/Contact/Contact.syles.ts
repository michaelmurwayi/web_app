import type { SxProps, Theme } from "@mui/material";

export const ContactStyles: Record<string, SxProps<Theme>> = {
  root: {
    position: "relative",
    overflow: "hidden",

    py: {
      xs: 10,
      md: 14,
    },

    px: 2,

    background: "linear-gradient(180deg, #FFFDF9 0%, #F7F2EA 100%)",
  },

  container: {
    maxWidth: 1400,
    mx: "auto",
    position: "relative",
    zIndex: 2,
  },

  heading: {
    textAlign: "center",

    mb: {
      xs: 8,
      md: 10,
    },
  },

  content: {
    display: "grid",

    gridTemplateColumns: {
      xs: "1fr",
      lg: "1fr 1fr",
    },

    gap: {
      xs: 6,
      md: 8,
      lg: 10,
    },

    alignItems: "center",
  },

  leftColumn: {
    gap: 3,
  },

  socials: {
    display: "flex",

    flexWrap: "wrap",

    gap: 2,

    mt: 4,
  },

  socialButton: {
    width: 56,

    height: 56,

    borderRadius: "50%",

    bgcolor: "#F5EBDD",

    color: "#B7782E",

    transition: "all .35s ease",

    "&:hover": {
      bgcolor: "#B7782E",

      color: "#fff",

      transform: "translateY(-4px)",

      boxShadow: "0 12px 30px rgba(183,120,46,.35)",
    },
  },

  imageWrapper: {
    position: "relative",

    overflow: "hidden",

    borderRadius: 6,

    border: "3px solid #C88736",

    boxShadow: "0 30px 60px rgba(0,0,0,.12)",

    "&::before": {
      content: '""',

      position: "absolute",

      inset: 0,

      background:
        "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,.15) 100%)",

      zIndex: 1,
    },
  },

  image: {
    width: "100%",

    display: "block",

    height: {
      xs: 380,
      md: 520,
    },

    objectFit: "cover",

    transition: "transform .6s ease",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },
};
