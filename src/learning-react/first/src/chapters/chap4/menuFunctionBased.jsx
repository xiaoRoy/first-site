import React from "react";
import "./styles/menu.css";

function MenuItem(props) {
  const { href, label, ...rest } = props;
  return (
    <li>
      <a className="menu-link" href={href} {...rest}>
        {label}
      </a>
    </li>
  );
}

//de-structure rest property
function MenuItemSecond({ href, label, ...rest }) {
  return (
    <li>
      {/* spread operator */}
      <a className="menu-link" href={href} {...rest}>
        {label}
      </a>
    </li>
  );
}

function Menu() {
  return (
    <nav className="navbar">
      <h1 className="title">TheMenuCompany</h1>
      <ul className="menu">
        <MenuItem label="Home" href="/" />
        <MenuItemSecond label="About" href="/about/" id="about-link"/>
        <MenuItemSecond label="Blog" href="/blog" target="_blank" id="blog-link"/>
      </ul>
    </nav>
  );
}

function showMenu() {
  return (
    <main>
      <Menu></Menu>
    </main>
  );
}

export default showMenu;
