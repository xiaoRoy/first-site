import { Outlet } from "react-router";
import "./rr-index.css";
export default function RrMain() {
  return (
    <div id="root">
      <Outlet></Outlet>
    </div>
  );
}
