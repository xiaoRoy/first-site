import "./styles/dart-index.css";
import { LinkInfo } from "./dark-data";
import { useState } from "react";

function Header() {
  const mode = "Night Mode";
  return (
    <header className="bg-secondary-bg px-0 py-4 text-center border-b-[3px] border-gold-accent border-solid header-box-shadow">
      <div className="flex justify-around mx-0 my-auto items-center px-8 py-0">
        <h1 className="text-3xl">The Rococo Console</h1>
        <input type="button" value={mode} className="toggle-button"></input>
      </div>
    </header>
  );
}

function NavLink({ linkInfo, activeId, onActiveChanged }) {
  const { id, title, link } = linkInfo;
  const styles = ["side-nav-link "];
  const isActive = id === activeId;
  if (isActive) {
    styles.push("side-nav-link-active");
  }
  const styleClasses = styles.join(" ");
  const internalOnActiveChanged = () => onActiveChanged(id);
  return (
    <li>
      <a
        id={id}
        href={link}
        className={styleClasses}
        onClick={internalOnActiveChanged}
      >
        {title}
      </a>
    </li>
  );
}

function SideNavigation({ className }) {
  // const classes = className.concat(" rococo-side-nav");
  const links = LinkInfo.generateLinks();
  const firstLinkId = links && links.length > 0 ? links[0].id : null;
  const [activeLinkId, setActiveLinkId] = useState(firstLinkId);
  const onActiveChange = (activeId) => setActiveLinkId(activeId);
  return (
    <nav className={className}>
      <h2 className="mt-0 text-center pb-4 mb-8 border-b-[1px] border-solid border-border-color">
        The Salon Navigation
      </h2>

      <ul className="">
        {links.map((link) => (
          <NavLink
            key={link.id}
            linkInfo={link}
            activeId={activeLinkId}
            onActiveChanged={onActiveChange}
          ></NavLink>
        ))}
      </ul>
    </nav>
  );
}

function DarkApp() {
  return (
    <div className="bg-primary-bg min-h-screen bg-image-dots font-main flex flex-col">
      <Header></Header>
      <div className="main-container grow items-start">
        <SideNavigation
          className={
            "h-[480px] basis-7xl max-lg:basis-auto nav-box-shadow bg-secondary-bg px-10 py-6 rounded-[20px] my-8"
          }
        ></SideNavigation>
        <main className="my-8 mx-auto bg-color-accent-bg">
          <div className="p-8 rounded-3xl border-3 border-solid border-gold-accent rococo-box-shadow">
            <h2>The Art of Light and Shadow</h2>
            <p className=" .description">
              Welcome to this modest dwelling, designed in the delicate style of
              the 18th-century court. Observe how the architecture shifts—from
              the playful pastels of the daytime drawing room to the deep,
              intimate tones of the nocturnal study—with the simple click of the
              medallion above.
            </p>

            <h3 className="sub-title">An Excerpt from a Grand Report</h3>
            <div className="article-summary">
              <p className="description">
                The Rococo period (c. 1730–1780) in France rejected the severity
                of the Baroque, embracing instead asymmetry, curved lines, and
                themes of love, nature, and lightheartedness. This style is
                characterized by its use of light colors, gold ornamentation,
                and scroll-like motifs known as *rocaille*. The design
                philosophy aimed to create an atmosphere of intimate, almost
                theatrical, luxury. The dark mode transformation here aims to
                maintain this elegance while shifting the mood to one of a
                private, dimly lit opera box.
              </p>
            </div>

            <h3 className="sub-title">A Second Panel of Wisdom</h3>

            <p className="description">
              Note the subtle color shifts in the background and borders, a
              testament to the seamless transition possible even without
              external frameworks. All decorative flourishes—the scalloped
              borders, the lifted shadows, and the creamy color palette—are
              achieved purely through native CSS variables and styling rules.
              The preference for your chosen mode is also retained for your next
              visit, courtesy of the modest JavaScript employed.
            </p>
          </div>
        </main>
      </div>
      <footer className="bg-secondary-bg text-secondary-text text-center p-4 mt-12 border-t-[3px] border-solid border-gold-accent footer-shadow">
        <p>
          &copy; 1750 — A Rococo Design Sketch. All rights reserved by the
          Architect.
        </p>
      </footer>
    </div>
  );
}

export default function DarkAppDemo() {
  return <DarkApp></DarkApp>;
}
