class MenuInfo {
  constructor(title, icon, href = null) {
    this.title = title;
    this.icon = icon;
    this.href = href;
  }

  static generateMenuList() {
    const homeMenu = new MenuInfo("Home", "home", "/");
    const servicesMenu = new MenuInfo("Services", "services");
    const pricingMenu = new MenuInfo("Pricing", "pricing");
    const blogMenu = new MenuInfo("Blog", "blog", "/blog");
    return [homeMenu, servicesMenu, pricingMenu, blogMenu];
  }

  static generateProfileIcon() {
    return new MenuInfo("Profile", "profile");
  }
}

export default MenuInfo;
