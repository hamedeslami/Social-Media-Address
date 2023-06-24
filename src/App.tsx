import { useSelector } from "react-redux";
import Home from "./pages/home";
import { useMemo } from "react";
import { getTheme } from "./config/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export default function App() {
  const theme = useSelector((state: any) => state.theme);
  const modeTheme = useMemo(() => getTheme({ mode: theme.mode }), [theme.mode]);

  return (
    <ThemeProvider theme={modeTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}
