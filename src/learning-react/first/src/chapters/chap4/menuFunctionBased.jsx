import React from "react";
import "./styles/menu.css";

function MenuItem(props) {
  const { href, label } = props;
  return (
    <li>
      <a className="menu-link" href={href}>
        {label}
      </a>
    </li>
  );
}

function MenuItemSecond({ href, label, target = "_self" }) {
  return (
    <li>
      <a className="menu-link" href={href} target={target}>
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
        <MenuItemSecond label="About" href="/about/" />
        <MenuItemSecond label="Blog" href="/blog" target="_blank"/>
      </ul>
    </nav>
  );
}

function use() {
  return (
    <main>
      <Menu></Menu>
    </main>
  );
}

export default use;
