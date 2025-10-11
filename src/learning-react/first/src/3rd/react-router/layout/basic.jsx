/**
 * refer from https://www.robinwieruch.de/react-router/
 */

import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";
import "./styles/basic.css";
function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/info">Info</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}

function App() {
  return (
    <div className="app">
      <h1>React Router</h1>
      <Navigation></Navigation>

      <Routes>
        <Route element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="info" element={<Info></Info>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
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
      <h2>Home</h2>
    </section>
  );
}

function Info() {
  return (
    <section>
      <h2>Info</h2>
    </section>
  );
}

function Users() {
  return (
    <section>
      <h2>Users</h2>
    </section>
  );
}

export default function ReactRouterDemo() {
  return (
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  );
}
