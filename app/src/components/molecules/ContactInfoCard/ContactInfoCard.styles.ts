import type { SxProps, Theme } from "@mui/material";

export const ContactInfoCardStyles: Record<string, SxProps<Theme>> = {
  root: {
    display: "flex",
    gap: 3,
    alignItems: "flex-start",

    p: 3,

    borderRadius: 4,

    bgcolor: "#FFFFFF",

    border: "1px solid #E6D8C7",

    transition: "all .35s ease",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 18px 40px rgba(0,0,0,.08)",
    },
  },

  iconWrapper: {
    width: 64,
    height: 64,

    borderRadius: "50%",

    bgcolor: "#F5EBDD",

    color: "#B7782E",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    flexShrink: 0,

    "& svg": {
      fontSize: 32,
    },
  },

  content: {
    flex: 1,
  },

  title: {
    fontWeight: 700,

    fontSize: "1.25rem",

    color: "#2E1B12",

    mb: 1.5,

    fontFamily: "Playfair Display, serif",
  },

  item: {
    color: "#5B4A42",

    fontSize: "1rem",

    lineHeight: 1.9,
  },
};
