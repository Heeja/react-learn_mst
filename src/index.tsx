import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./Router";

const rootId = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

rootId.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
