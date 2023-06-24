import { createTheme } from "@mui/material/styles";

interface themeProps {
  mode: "light" | "dark";
}

export const getTheme = ({ mode }: themeProps) =>
  createTheme({
    palette: {
      primary: {
        ...(mode === "light"
          ? {
              main: "#ff9800",
              secondary: "#face8d",
              light: "#ffffff",
              dark: "#f6f7f9",
            }
          : {
              main: "#ff9800",
              secondary: "#face8d",
              light: "#25303c",
              dark: "#3b4651",
            }),
      },
      background: {
        ...(mode === "light"
          ? { default: "#fefefe", paper: "#fefefe" }
          : { default: "#171e29", paper: "#25303c" }),
      },
      text: {
        ...(mode === "light" ? { secondary:"#525252" ,primary: "#5c5e60" } : { secondary: "#afafaf",primary: "#fafafa" }),
      },
    },
    direction: "rtl",
    typography: {
      fontFamily: "IRANYekanX",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'IRANYekanX';
            font-style: normal;
            font-weight: 400;
            src: local('IRANYekanX'), url('${
              import.meta.env.VITE_PUBLIC_URL
            }/fonts/IRANYekanX-Regular.ttf') format('truetype');
          }
        `,
      },
    },
  });
