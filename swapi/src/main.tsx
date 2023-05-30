import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { SwapiProvider } from "./context/SwapiProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SwapiProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SwapiProvider>
  </React.StrictMode>
);
