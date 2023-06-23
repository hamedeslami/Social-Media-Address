import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { getTheme } from "./config/theme";
import App from './App';

type themeType = "light" | "dark";

const getSystemThemeMode = (): themeType => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ){
      return "dark";
    }

    return "light";
  };

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider 
            theme={getTheme({
                mode:
                  (localStorage.getItem("theme") as themeType) || getSystemThemeMode(),
              })}
          >
              <CssBaseline />
              <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
  </React.StrictMode>,
);
