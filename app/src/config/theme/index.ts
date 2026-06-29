import { createTheme } from "@mui/material/styles";

import colors from "./colors";
import typography from "./typography";

export const theme = createTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,

    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },

    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },

  typography,

  shape: {
    borderRadius: 12,
  },
});
