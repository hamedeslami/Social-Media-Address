import { createTheme } from "@mui/material/styles";

interface themeProps {
  mode: "light" | "dark";
}

export const getTheme = ({ mode }: themeProps) => createTheme({
    palette: {
        primary: {
          ...(mode === "light"
            ? {
                main: "#19A7CE",
                secondary: "#cbd5e0",
              }
            : {
                main: "#208dab",
                secondary: "#868e96",
              }),
        },
        background: {
          ...(mode === "light" ? { default: "#fefefe" } : { default: "#171e29" }),
        },
        text: {
          ...(mode === "light" ? { primary: "#000" } : { primary: "#fafafa" }),
        },
      },
    direction: 'rtl',
    typography: {
      fontFamily: 'IRANYekanX',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'IRANYekanX';
            font-style: normal;
            font-weight: 400;
            src: local('IRANYekanX'), url('${import.meta.env.VITE_PUBLIC_URL}/fonts/IRANYekanX-Regular.ttf') format('truetype');
          }
        `,
      },
    },
  });