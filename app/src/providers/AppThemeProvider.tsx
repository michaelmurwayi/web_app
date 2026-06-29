import { ThemeProvider, CssBaseline } from "@mui/material";

import { theme } from "@/config/theme";

interface Props {
  children: React.ReactNode;
}

const AppThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
