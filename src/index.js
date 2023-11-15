import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  //  HashRouter,
  BrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import store from "./store";
import App from "@/App";
import "@/assets/css/index.less";
import { defaultTheme } from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
);
