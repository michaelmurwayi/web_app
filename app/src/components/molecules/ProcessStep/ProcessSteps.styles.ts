import { alpha } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start",
    gap: 3,

    position: "relative",
  },

  timeline: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    flexShrink: 0,
  },

  circle: (theme: Theme) => ({
    width: 42,
    height: 42,

    borderRadius: "50%",

    bgcolor: theme.palette.secondary.main,

    color: "#fff",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontWeight: 700,

    fontSize: ".95rem",

    boxShadow: `0 10px 24px ${alpha(theme.palette.secondary.main, 0.35)}`,
  }),

  line: (theme: Theme) => ({
    width: 2,

    flex: 1,

    minHeight: 70,

    bgcolor: alpha(theme.palette.secondary.main, 0.35),

    mt: 1,
  }),

  content: {
    pb: 5,
  },

  title: {
    color: "#fff",

    fontWeight: 700,

    fontSize: "1.05rem",

    mb: 1,
  },

  description: {
    color: "rgba(255,255,255,.72)",

    lineHeight: 1.8,

    fontSize: ".95rem",
  },
};
