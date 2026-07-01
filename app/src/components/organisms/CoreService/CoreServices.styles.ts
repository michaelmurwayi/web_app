import { alpha } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const styles = {
  section: (theme: Theme) => ({
    py: {
      xs: 8,
      md: 12,
      lg: 14,
    },

    backgroundColor: theme.palette.background.default,
  }),

  subtitle: (theme: Theme) => ({
    textAlign: "center",

    maxWidth: 760,

    mx: "auto",

    mb: {
      xs: 5,
      md: 8,
    },

    color: alpha(theme.palette.text.primary, 0.72),

    lineHeight: 1.8,

    fontSize: {
      xs: ".95rem",
      md: "1.05rem",
    },
  }),
};
