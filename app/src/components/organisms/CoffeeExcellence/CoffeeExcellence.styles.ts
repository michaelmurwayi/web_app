import type { SxProps, Theme } from "@mui/material/styles";

export const CoffeeExcellenceStyles: Record<string, SxProps<Theme>> = {
  root: {
    py: {
      xs: 10,
      md: 14,
    },
    px: {
      xs: 2,
      sm: 4,
      md: 6,
    },
    bgcolor: "#FBF8F3",
    overflow: "hidden",
    position: "relative",
  },

  container: {
    maxWidth: 1400,
    mx: "auto",
  },

  heading: {
    maxWidth: 850,
    mx: "auto",
    textAlign: "center",
    mb: {
      xs: 6,
      md: 8,
    },
  },

  description: {
    mt: 3,
    color: "#6B5B4B",
    lineHeight: 1.9,
    fontSize: {
      xs: "1rem",
      md: "1.05rem",
    },
  },

  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    height: "100%",
  },

  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },

  imageWrapper: {
    overflow: "hidden",
    borderRadius: 6,
    bgcolor: "#fff",
    boxShadow: "0 20px 60px rgba(0,0,0,.10)",
  },

  image: {
    width: "100%",
    height: {
      xs: 280,
      md: 480,
    },
    display: "block",
    objectFit: "cover",
    transition: "transform .5s ease",

    "&:hover": {
      transform: "scale(1.04)",
    },
  },

  chipSection: {
    p: 3,
    borderRadius: 5,
    bgcolor: "#FFFDF9",
    border: "1px solid #E7DCCB",
  },

  chipTitle: {
    mb: 3,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 700,
    letterSpacing: 2,
    color: "#7A5B39",
    fontSize: ".9rem",
  },

  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 2,
  },

  chip: {
    width: 58,
    height: 58,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "50%",

    bgcolor: "#F5EFE5",

    border: "1px solid #E5D4BA",

    fontWeight: 700,

    color: "#5A3B22",

    cursor: "default",

    transition: ".3s",

    "&:hover": {
      bgcolor: "#B7782E",
      color: "#fff",
      transform: "translateY(-4px)",
      boxShadow: "0 10px 25px rgba(183,120,46,.35)",
    },
  },

  flavorSection: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  flavorContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 3,
  },

  banner: {
    display: "flex",
    gap: 3,
    alignItems: "center",

    p: 4,

    borderRadius: 6,

    bgcolor: "#2F4F2F",

    color: "#fff",

    boxShadow: "0 18px 45px rgba(0,0,0,.18)",
  },

  bannerIcon: {
    width: 64,
    height: 64,

    borderRadius: "50%",

    bgcolor: "rgba(255,255,255,.12)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,

    "& svg": {
      fontSize: 32,
    },
  },

  bannerTitle: {
    fontWeight: 700,
    mb: 1,
    fontSize: "1.1rem",
  },

  bannerDescription: {
    lineHeight: 1.8,
    opacity: 0.92,
  },
};
