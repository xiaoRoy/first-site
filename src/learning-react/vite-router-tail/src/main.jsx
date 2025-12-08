import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import TailDemoApp from "./tail/tailDemoApp.jsx";
// import PracticeDemoApp from "./practice/practice";
import AddressBookAppDemo from "./router/address-book/address-book";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AddressBookAppDemo />
  </StrictMode>
);
