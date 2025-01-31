import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/app.jsx"; // Importa el componente App
import "../public/index.html"; // Opcional: estilos globales

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
