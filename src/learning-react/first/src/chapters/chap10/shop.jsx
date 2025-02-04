import { createContext, useContext } from "react";
import "./styles/shop.css";

const BorderContext = createContext(1);

function ShopButton({ children }) {
  const border = useContext(BorderContext);
  const style = {
    border: `${border}px solid black`,
  };
  return (
    <button type="button" style={style}>
      {children}
    </button>
  );
}

function CartButton() {
  return (
    <BorderContext.Provider value={5}>
      <ShopButton>Cart</ShopButton>
    </BorderContext.Provider>
  );
}

function ShopHeader() {
  return (
    <header className="shop-header">
      <ShopButton>Clothes</ShopButton>
      <ShopButton>Toys</ShopButton>
      <CartButton></CartButton>
    </header>
  );
}

function ShopFooter() {
  return (
    <footer className="shop-footer">
      <ShopButton>About</ShopButton>
      <ShopButton>Jobs</ShopButton>
      <CartButton></CartButton>
    </footer>
  );
}

function Shop() {
  return (
    <div>
      <ShopHeader></ShopHeader>
      <main>
        <h1>Welcome to the shop!</h1>
      </main>
      <BorderContext.Provider value={2}>
        <ShopFooter></ShopFooter>
      </BorderContext.Provider>
    </div>
  );
}

export default function ShopDemo() {
  return <Shop></Shop>;
}
