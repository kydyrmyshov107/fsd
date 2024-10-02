import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@shared/utils/i18n/18n";

import "@app/styles/index.scss";
import { Router } from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />,
);
