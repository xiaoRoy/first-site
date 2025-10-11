/**
 * refer from https://www.robinwieruch.de/react-router/
 */

import { BrowserRouter, NavLink, Outlet, Route, Routes } from "react-router";
import "./styles/basic.css";
function Navigation() {
  const onActiveChanged = ({ isActive }) => {
    const styles = ["link"];
    if (isActive) {
      styles.push("active-link");
    }
    return styles.join(" ");
  };
  return (
    <nav>
      <NavLink to="/" className={onActiveChanged}>
        <span>Home</span>
      </NavLink>
      <NavLink to="/info" className={onActiveChanged}>
        <span>Info</span>
      </NavLink>
      <NavLink to="/users" className={onActiveChanged}>
        <span>Users</span>
      </NavLink>
    </nav>
  );
}

function App() {
  return (
    <div className="app">
      <h1 className="title">React Router</h1>
      <Navigation></Navigation>

      <Routes>
        <Route element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="info" element={<Info></Info>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="*" element={<Page404></Page404>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
}

function Home() {
  return (
    <section>
      <h2 className="section-title">Home</h2>
    </section>
  );
}

function Info() {
  return (
    <section className="section-title">
      <h2>Info</h2>
    </section>
  );
}

function Users() {
  return (
    <section className="section-title">
      <h2>Users</h2>
    </section>
  );
}

function Page404() {
  return (
    <div className="background-404">
      <div class="container-404">
        <h1 class="error-code-static">404</h1>

        <h2 class="main-message">CONGRATULATIONS.</h2>
        <p class="sub-message">
          You have successfully reached the digital frontier. This path leads
          nowhere.
        </p>

        <a href="/" class="btn-return">
          Return to Civilization
        </a>

        <div class="footer-text">
          <p>Access Level: Denied</p>
        </div>
      </div>
    </div>
  );
}

export default function ReactRouterDemo() {
  return (
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  );
}
