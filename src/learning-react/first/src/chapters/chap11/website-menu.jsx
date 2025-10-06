import "./styles/website-menu.css";
import { ReactComponent as HomeIcon } from "./icons/home.svg";
import { ReactComponent as ServicesIcon } from "./icons/services.svg";
import { ReactComponent as PricingIcon } from "./icons/pricing.svg";
import { ReactComponent as BlogIcon } from "./icons/blog.svg";
import { createContext, useContext } from "react";

//data

class MenuInfo {
  constructor(title, icon, href = null) {
    this.title = title;
    this.icon = icon;
    this.href = href;
  }

  static generateMenuList() {
    const homeMenu = new MenuInfo("Home", "home");
    const servicesMenu = new MenuInfo("Services", "services");
    const pricingMenu = new MenuInfo("Pricing", "pricing");
    const blogMenu = new MenuInfo("Blog", "blog");
    return [homeMenu, servicesMenu, pricingMenu, blogMenu];
  }
}

const ICON_MAPPING = {
  home: HomeIcon,
  services: ServicesIcon,
  pricing: PricingIcon,
  blog: BlogIcon,
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
  const menuList = useContext(MenuContext);
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

function WebsiteDemo() {
  const menuList = MenuInfo.generateMenuList();
  return (
    <div className="root-website">
      <header>
        <div className="header-container">
          <a href="#" className="logo">
            Fly Cats
          </a>
          <MenuContext.Provider value={menuList}>
            <WebsiteMenu></WebsiteMenu>
          </MenuContext.Provider>
        </div>
      </header>
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
