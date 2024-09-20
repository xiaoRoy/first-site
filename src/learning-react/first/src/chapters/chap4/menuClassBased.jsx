import React, { Component } from "react";
import "./styles/menu.css"

class MenuItem extends React.Component {
  render() {
    const { href, label } = this.props;
    return (
      <li>
        <a className="menu-link" href={href}>{label}</a>
      </li>
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="title">TheMenuCompany</h1>
        <ul className="menu">
          <MenuItem label="Home" href="/" />
          <MenuItem label="About" href="/about/" />
          <MenuItem label="Blog" href="/blog" />
        </ul>
      </nav>
    );
  }

  static showMenu() {
    return (
      <main>
        <Menu></Menu>
      </main>
    );
  }
}

export default Menu;