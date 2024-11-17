import { useEffect, useRef, useState } from "react";
import "./styles/popup-menu.css";

function PopupMenu({ menuList }) {
  const [isExpanded, setExpanded] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    if (!isExpanded) {
      return;
    }
    const eventPointerDown = "pointerdown";
    const onWindowClick = () => setExpanded(false);
    const onMenuExpandedClick = (event) => event.stopPropagation();
    const menuContainer = menuRef.current;
    menuContainer.addEventListener(eventPointerDown, onMenuExpandedClick);
    window.addEventListener(eventPointerDown, onWindowClick);
    return () => window.removeEventListener(eventPointerDown, onWindowClick);
  });
  const toggleMenu = () => setExpanded((value) => !value);
  return (
    <div className="popup-container" ref={menuRef}>
      <button onClick={toggleMenu}>Menu</button>
      {isExpanded && (
        <div className="popup-menu">
          <ul>
            {menuList.map((menu) => (
              <li id={menu}>{menu}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function PopupMenuDemo() {
  const menuList = ["apple", "bear", "cat", "football"];
  return (
    <main>
      <PopupMenu menuList={menuList}></PopupMenu>
    </main>
  );
}
