import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppProviders from "./practice/providers/AppProviders.jsx"
// import AppProviders from "./providers/AppProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AppProviders>
    <App />
  </AppProviders>
  </BrowserRouter>
);
