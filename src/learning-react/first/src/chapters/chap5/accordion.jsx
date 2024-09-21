import React, { Fragment, useState } from "react";
import "./styles/accordion.css";

function Accordion() {
  const [isExpanded, setExpanded] = useState(false);
  const onClick = () => setExpanded((value) => !value);
  return (
    <Fragment>
      <h2 className="accordion">
        Secret password
        <button onClick={onClick}>-</button>
        <button onClick={() => setExpanded(true)}>+</button>
      </h2>
      {isExpanded && (
        <p>
          Password:<code>hunter2</code>
        </p>
      )}
    </Fragment>
  );
}

function showAccordion() {
  return (
    <main>
      <Accordion></Accordion>
    </main>
  );
}

export default showAccordion;
