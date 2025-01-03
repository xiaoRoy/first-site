import { useState } from "react";
import "./styles/accordion.css";

function Panel({ title, children, handleShowClicked, isActive }) {
  const onShowClicked = () => handleShowClicked();
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShowClicked}>show</button>
      )}
    </section>
  );
}

function Accordion() {
  const firstSection = 0;
  const secondSection = 1;
  const [activeIndex, setActiveIndex] = useState(firstSection);
  const onShow = (index) => {
    return () => setActiveIndex(index);
  };
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === firstSection}
        handleShowClicked={onShow(firstSection)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === secondSection}
        handleShowClicked={onShow(secondSection)}
      >
        The name comes from алма, the Kazakh word for "apple" and is often
        translated as "full of apples". In fact, the region surrounding Almaty
        is thought to be the ancestral home of the apple, and the wild Malus
        sieversii is considered a likely candidate for the ancestor of the
        modern domestic apple.
      </Panel>
    </>
  );
}

export default function AccordionDemo() {
  return <Accordion></Accordion>;
}
