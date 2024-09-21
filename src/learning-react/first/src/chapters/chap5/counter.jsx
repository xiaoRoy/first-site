import React, { Fragment, useState } from "react";

function Counter({ start, isVisible = true }) {
  // const [counter, setCounter] = useState(offsetStart(start));
  const [counter, setCounter] = useState(() => offsetStart(start));
  if (!isVisible) {
    return null;
  }
  return (
    <main>
      <p>Clicks: {counter}</p>
      <button onClick={() => setCounter((value) => value + 1)}>
        Increment
      </button>

      <button onClick={() => setCounter(0)}>Reset</button>
    </main>
  );
}

let offsetCounter = 0;

function offsetStart(start) {
  offsetCounter++;
  console.log("offsetStart:" + offsetCounter);
  const offset = 1000;
  return start + offset;
}

function showCounter() {
  return (
    <Fragment>
      <Counter start={1}></Counter>
      {/* <Counter start={14}></Counter> */}
      {/* <Counter start={8}></Counter> */}
    </Fragment>
  );
}

export default showCounter;
