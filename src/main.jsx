import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStorageProvider } from "./services/context/GlobalStorageContext.jsx";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStorageProvider>
        <App />
      </GlobalStorageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
