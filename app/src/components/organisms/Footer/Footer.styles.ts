import type { SxProps, Theme } from "@mui/material";

export const FooterStyles: Record<string, SxProps<Theme>> = {
  root: {
    bgcolor: "grey.900",
    color: "grey.300",
    py: 3,
    px: 2,
    borderTop: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  container: {
    maxWidth: 1200,
    mx: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 2,
  },

  text: {
    fontSize: "0.9rem",
  },

  link: {
    color: "primary.light",
    textDecoration: "none",
    fontWeight: 600,
    transition: "0.2s",

    "&:hover": {
      color: "primary.main",
      textDecoration: "underline",
    },
  },
};
