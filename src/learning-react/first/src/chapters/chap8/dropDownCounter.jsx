import { Fragment, useState } from "react";
import "./styles/dropdown-counter.css"

function DropdownCounter() {
  const [counter, setCounter] = useState(0);
  const values = [1, 2, 3, 4, 5];
  const onChange = (event) => {
    const value = parseInt(event.target.value);
    setCounter((counter) => value + counter);
  };
  return (
    <Fragment>
      <h1>Counter:{counter}</h1>
      <select className="values-select" onChange={onChange}>
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </Fragment>
  );
}

export default function DropdownCounterDemo() {
  return (
    <section className="container">
      <DropdownCounter></DropdownCounter>
    </section>
  );
}
