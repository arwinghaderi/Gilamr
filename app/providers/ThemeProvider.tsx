"use client";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-abar), tahoma, sans-serif",
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
