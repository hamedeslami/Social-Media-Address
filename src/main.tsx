import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { getTheme } from "./config/theme";
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import App from './App';
import { CacheProvider } from '@emotion/react';

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

  const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CacheProvider value={cacheRtl}>
            <ThemeProvider 
            theme={getTheme({
                mode:
                  (localStorage.getItem("theme") as themeType) || getSystemThemeMode(),
              })}
          >
              <CssBaseline />
              <App />
          </ThemeProvider>
          </CacheProvider>
        </PersistGate>
      </Provider>
  </React.StrictMode>,
);
