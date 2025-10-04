import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import RankingProvider from "./context/RankingContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RankingProvider>
      <App />
    </RankingProvider>
  </BrowserRouter>
);
