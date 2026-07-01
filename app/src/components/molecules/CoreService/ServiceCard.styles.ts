import { alpha } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const styles = {
  card: (theme: Theme) => ({
    height: "100%",

    display: "flex",
    flexDirection: "column",

    overflow: "hidden",

    borderRadius: 5,

    backgroundColor: theme.palette.background.paper,

    border: `1px solid #C88736`,

    boxShadow: "0 12px 35px rgba(0,0,0,.08)",

    transition: "all .35s ease",

    "&:hover": {
      transform: "translateY(-10px)",

      boxShadow: "0 28px 60px rgba(0,0,0,.18)",

      "& .service-image": {
        transform: "scale(1.08)",
      },

      "& .service-icon": {
        transform: "translateY(-8px) scale(1.05)",
      },
    },
  }),

  imageWrapper: {
    position: "relative",

    overflow: "hidden",

    height: {
      xs: 220,
      md: 260,
    },
  },

  image: {
    width: "100%",
    height: "100%",

    objectFit: "cover",

    transition: "transform .6s ease",

    "&.service-image": {},
  },

  overlay: {
    position: "absolute",

    inset: 0,

    background: "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.05))",
  },

  icon: (theme: Theme) => ({
    position: "absolute",

    bottom: 20,

    left: 20,

    width: {
      xs: 54,
      md: 62,
    },

    height: {
      xs: 54,
      md: 62,
    },

    borderRadius: "50%",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    backgroundColor: theme.palette.secondary.main,

    color: "#fff",

    boxShadow: "0 10px 25px rgba(0,0,0,.2)",

    transition: "all .35s ease",

    "&.service-icon": {},
  }),

  content: {
    flex: 1,

    display: "flex",

    flexDirection: "column",

    p: {
      xs: 3,
      md: 4,
    },
  },

  title: (theme: Theme) => ({
    color: theme.palette.text.primary,

    fontFamily: "'Playfair Display', serif",

    fontWeight: 700,

    mb: 1,

    fontSize: {
      xs: "1.35rem",
      md: "1.6rem",
    },
  }),

  subtitle: (theme: Theme) => ({
    color: theme.palette.secondary.main,

    fontWeight: 600,

    mb: 2,

    textTransform: "uppercase",

    letterSpacing: 1,

    fontSize: ".82rem",
  }),

  description: (theme: Theme) => ({
    color: alpha(theme.palette.text.primary, 0.72),

    lineHeight: 1.8,

    mb: 3,

    flexGrow: 1,

    fontSize: {
      xs: ".92rem",
      md: ".98rem",
    },
  }),

  expandHeader: {
    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",

    pt: 2,

    borderTop: "1px solid",

    borderColor: "divider",
  },

  expandTitle: (theme: Theme) => ({
    color: theme.palette.text.primary,

    fontWeight: 600,

    fontSize: ".95rem",
  }),

  expandButton: {
    transition: "transform .3s ease",
  },

  expandButtonOpen: {
    transform: "rotate(180deg)",
  },

  listItem: {
    py: 0.6,

    px: 0,
  },

  listIcon: {
    minWidth: 30,
  },

  listText: (theme: Theme) => ({
    color: alpha(theme.palette.text.primary, 0.75),

    fontSize: ".92rem",

    lineHeight: 1.7,
  }),
};
