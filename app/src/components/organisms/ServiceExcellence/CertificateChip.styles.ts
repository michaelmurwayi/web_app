import { alpha } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const styles = {
  chip: (theme: Theme) => ({
    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    gap: {
      xs: 0.8,
      sm: 1,
      md: 1.5,
    },

    px: {
      xs: 1.5,
      sm: 2,
      md: 2.5,
    },

    py: {
      xs: 0.8,
      sm: 1,
      md: 1.2,
    },

    borderRadius: 999,

    backgroundColor: alpha("#FFFFFF", 0.12),

    border: `1px solid ${alpha("#FFFFFF", 0.18)}`,

    backdropFilter: "blur(12px)",

    transition: "all .35s ease",

    cursor: "default",

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,

      borderColor: theme.palette.secondary.main,

      transform: "translateY(-4px)",

      boxShadow: "0 10px 25px rgba(0,0,0,.2)",
    },
  }),

  icon: {
    color: "#fff",

    fontSize: {
      xs: 14,
      sm: 15,
      md: 20,
    },

    flexShrink: 0,
  },

  label: {
    color: "#fff",

    fontWeight: 500,

    whiteSpace: "nowrap",

    lineHeight: 1.4,

    fontSize: {
      xs: ".5rem",
      sm: ".8rem",
      md: ".92rem",
      lg: "1rem",
    },
  },
};
