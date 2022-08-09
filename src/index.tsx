import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme";
import App from "./App";

const rootId = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

rootId.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
