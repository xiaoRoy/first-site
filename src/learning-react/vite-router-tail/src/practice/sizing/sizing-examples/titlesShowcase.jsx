import { useState } from "react";

function WrappedTitle() {
  return (
    <div className="max-w-[800px] py-6 px-8 center-block-size">
      <h2 className="section-title">
        <span>Top Stories</span>
      </h2>
    </div>
  );
}

function UnderLineTitle({ title }) {
  const finalTitle = title ?? "A title for an awesome article.";
  return (
    <h2 className="underline-title">
      <span>{finalTitle}</span>
    </h2>
  );
}

const MENUS = [
  { name: "projects", label: "Projects" },
  { name: "articles", label: "Articles" },
  { name: "career", label: "Career" },
  { name: "contact-me", label: "Contact Me" },
];

function NavMenus() {
  return (
    <nav className="bg-slate-800  p-4  mt-5 rounded-xl shadow-2xl shadow-black/70 border-slate-700 w-max center-block-size">
      <ul className="flex space-x-8 text-xl font-light text-slate-300">
        {MENUS.map((menu) => {
          const link = `#${menu.name}`;
          return (
            <li key={menu.name}>
              <a href={link} className="nav-menu-item">
                {menu.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function TodoLayout() {
  return (
    <div className="grid h-full grid-rows-[min-content_auto_min-content]">
      <header className="bg-[#3949AB] text-white font-bold py-2 px-4">
        <h2>Todos</h2>
      </header>
      <section className="py-2 px-4 bg-[#e2deed]">
        <ul className="space-y-2">
          <li>Study exam</li>
          <li>Finish new article</li>
          <li>Go to gym</li>
          <li>Read a book</li>
        </ul>
      </section>

      <footer className="py-2 px-4 bg-[#eee]">
        <form action="">
          <input type="text" placeholder="Add todos" />
          <button>Add todos</button>
        </form>
      </footer>
    </div>
  );
}

function LeftNavMenu({ selectedMenu, onMenuSelected }) {
  return (
    <aside className="bg-slate-800 shadow-2xl shadow-black/70 p-6 sticky top-0">
      <div className="text-3xl font-extralight text-white border-b border-slate-700 pb-4 mb-8">
        <span className="font-bold text-rose-400">Logo</span> Panel
      </div>
      <nav>
        <ul className="space-y-2">
          {MENUS.map((menu) => {
            const menuStyles = ["left-nav-menu-item"];
            const isSelected = menu.name === selectedMenu;
            if (isSelected) menuStyles.push("left-nav-menu-item-selected");
            const link = `#${menu.name}`;
            return (
              <li key={menu.name}>
                <a
                  href={link}
                  className={menuStyles.join(" ")}
                  onClick={() => onMenuSelected(menu.name)}
                >
                  {menu.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

function TwoColumnsPanel() {
  const [selectedMenu, setSelectedMenu] = useState("projects");
  const onMenuSelected = (selectedMenu) => setSelectedMenu(selectedMenu);
  return (
    <div className="grid grid-cols-[fit-content(320px)_1fr] h-full bg-slate-950">
      <LeftNavMenu
        selectedMenu={selectedMenu}
        onMenuSelected={onMenuSelected}
      ></LeftNavMenu>
      <main></main>
    </div>
  );
}

function MaxAndMin() {
  return (
    <div className="max-w-5xl px-4 my-4 mx-auto">
      <section className="demo-section">
        <h2 className="header-title">CSS is cool and awesome. Isn't it?</h2>
        <p className="demo-content">
          This text won't go beyond the title width
        </p>
      </section>

      <section className="demo-section">
        <h2 className="header-title">CSS is cool</h2>
        <p className="demo-content">
          This text won't go beyond the title width.
        </p>
      </section>

      <section className="demo-section">
        <h2 className="header-title">CSS is cool and awesome</h2>
        <p className="demo-content">
          This text won't go beyond the title width.. Do you want a proof? Here
          you go.
        </p>
      </section>
    </div>
  );
}

export default function TitleDemo() {
  return <MaxAndMin></MaxAndMin>;
}
