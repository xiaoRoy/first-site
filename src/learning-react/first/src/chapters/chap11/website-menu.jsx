import "./styles/website-menu.css";
import { ReactComponent as HomeIcon } from "./icons/home.svg";
import { ReactComponent as ServicesIcon } from "./icons/services.svg";
import { ReactComponent as PricingIcon } from "./icons/pricing.svg";
import { ReactComponent as BlogIcon } from "./icons/blog.svg";

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

function WebsiteMenu({ menuList }) {
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

function WebsiteDemo() {
  const menuList = MenuInfo.generateMenuList();
  return (
    <div className="root-website">
      <WebsiteMenu menuList={menuList}></WebsiteMenu>
    </div>
  );
}

export default function WebsiteMenuDemo() {
  return <WebsiteDemo></WebsiteDemo>;
}
