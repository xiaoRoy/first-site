export class LinkInfo {
  constructor(id, title, link = "#") {
    this.id = `link-info-${id}`;
    this.link = link;
    this.title = title;
  }

  static generateLinks() {
    const mainMenu = new LinkInfo("main", "The Main Foyer");
    const galleryMenu = new LinkInfo("gallery", "Gallery of Portraits");
    const decreeMenu = new LinkInfo("decree", "The King's Decree");
    const gardensMenu = new LinkInfo("garden", "The Gardens of Versailles");
    const contactMenu = new LinkInfo("contact", "Contact the Chamber");
    return [mainMenu, galleryMenu, decreeMenu, gardensMenu, contactMenu];
  }
}
