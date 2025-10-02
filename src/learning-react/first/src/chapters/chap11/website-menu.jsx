import "./styles/website-menu.css";
import { ReactComponent as HomeIcon } from "./icons/home.svg";
import { ReactComponent as ServicesIcon } from "./icons/services.svg";
import { ReactComponent as PricingIcon } from "./icons/pricing.svg";
import { ReactComponent as BlogIcon } from "./icons/blog.svg";

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
  return (
    <nav className="menu-container">
      <ul className="nav-links">
        <MenuItem icon={"home"}>Home</MenuItem>
        <MenuItem icon={"services"}>Services</MenuItem>
        <MenuItem icon={"pricing"}>Pricing</MenuItem>
        <MenuItem icon={"blog"}>Blog</MenuItem>
      </ul>
    </nav>
  );
}

function WebsiteDemo() {
  return (
    <div className="root-website">
      <WebsiteMenu></WebsiteMenu>
    </div>
  );
}

export default function WebsiteMenuDemo() {
  return <WebsiteDemo></WebsiteDemo>;
}
