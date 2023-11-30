import {
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material";
import { StylesProvider } from "@mui/styles";
import { useMemo } from "react";
import GlobalStyles from "./GlobalStyle";
import palette from "./palette";
import typography from "./typography";

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 12 },
      typography,
    }),
    []
  );
  const theme = createTheme(themeOptions);

  return (
    <StylesProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProvider;
