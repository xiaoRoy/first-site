import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
import TailDemoApp from "./tail/tailDemoApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TailDemoApp />
  </StrictMode>
);
