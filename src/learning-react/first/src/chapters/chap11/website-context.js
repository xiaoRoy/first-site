import { createContext, useContext, useState } from "react";
import MenuInfo from "./website-data";
const MenuContext = createContext({
  links: [],
  isLoggedIn: false,
  loginOrLogout: () => {},
  logout: () => {},
});

function MenuProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const loginOrLogout = () => setLoggedIn((value) => !value);
  const links = MenuInfo.generateMenuList();
  if (isLoggedIn) {
    links.push(MenuInfo.generateProfileIcon());
  }
  const value = {
    links,
    isLoggedIn,
    loginOrLogout,
  };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

function useMenuContext() {
  return useContext(MenuContext);
}

export { MenuProvider, useMenuContext };
