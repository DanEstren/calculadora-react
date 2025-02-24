import React from "react";
import { createRoot } from "react-dom/client"; // Nova importação
import App from "./App";

const root = createRoot(document.getElementById("root")); // Cria a raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
