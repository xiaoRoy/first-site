import { Outlet } from "react-router";
// import "./rr-index.css";
import "./root.css";
export default function RrMain() {
  return (
    <div id="root">
      <Outlet></Outlet>
    </div>
  );
}
