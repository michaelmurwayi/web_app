import type { ReactElement, PropsWithChildren } from "react";

import { render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { theme } from "@/config/theme";

import { createTestStore } from "./testStore";

interface RenderOptions {
  store?: ReturnType<typeof createTestStore>;
}

export const renderWithProviders = (
  ui: ReactElement,
  options: RenderOptions = {},
) => {
  const store = options.store ?? createTestStore();

  const Wrapper = ({ children }: PropsWithChildren) => {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  };

  return {
    store,
    ...render(ui, {
      wrapper: Wrapper,
    }),
  };
};
