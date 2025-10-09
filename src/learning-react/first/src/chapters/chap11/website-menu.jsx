import "./styles/website-menu.css";
import MenuInfo from "./website-data";
import { ReactComponent as HomeIcon } from "./icons/home.svg";
import { ReactComponent as ServicesIcon } from "./icons/services.svg";
import { ReactComponent as PricingIcon } from "./icons/pricing.svg";
import { ReactComponent as BlogIcon } from "./icons/blog.svg";
import { ReactComponent as ProfileIcon } from "./icons/profile.svg";
import { createContext, useContext, useState } from "react";
import { useMenuContext, MenuProvider } from "./website-context";

//data

const ICON_MAPPING = {
  home: HomeIcon,
  services: ServicesIcon,
  pricing: PricingIcon,
  blog: BlogIcon,
  profile: ProfileIcon,
};

function MenuItem({ href, icon, children }) {
  const IconComponent = ICON_MAPPING[icon];
  if (!IconComponent) throw new Error(`Icon '${icon}' not found`);
  const link = href ?? "#";
  return (
    <li>
      <a href={href}>
        <IconComponent className="icon"></IconComponent>
        {children}
      </a>
    </li>
  );
}

function WebsiteMenu() {
  const menuList = useMenuContext().links;
  return (
    <nav className="container">
      <ul className="nav-links">
        {menuList.map((menu) => {
          return (
            <MenuItem
              key={menu.title}
              href={menu.href}
              icon={menu.icon}
              children={menu.title}
            ></MenuItem>
          );
        })}
      </ul>
    </nav>
  );
}

const MenuContext = createContext([]);

function LoginButton() {
  const { isLoggedIn, loginOrLogout } = useMenuContext();
  const text = isLoggedIn ? "Log out" : "Log in";
  const onClick = () => loginOrLogout();
  return (
    <a href="#" className="login-button" onClick={onClick}>
      {text}
    </a>
  );
}

function WebsiteDemo() {
  return (
    <div className="root-website">
      <MenuProvider>
        <header>
          <div className="header-container">
            <a href="#" className="logo">
              Fly Cats
            </a>
            <WebsiteMenu></WebsiteMenu>
            <LoginButton></LoginButton>
          </div>
        </header>
      </MenuProvider>
      <main></main>
      <footer>
        <div className="footer-info">
          <h3 className="footer-logo">Fly Fly Inc.</h3>
          <p className="footer-text">© 2024. All rights reserved.</p>
        </div>
        <div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function WebsiteMenuDemo() {
  return <WebsiteDemo></WebsiteDemo>;
}
