import React, { Fragment, useEffect, useState } from "react";

function Counter({ init, isVisible = true }) {
  // const [counter, setCounter] = useState(offsetStart(start));
  // const [counter, setCounter] = useState(() => offsetStart(start));
  console.log(`Counter${init}`);
  const [counter, setCounter] = useState(init);
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

function CounterWithInitial() {
  const [init, setInit] = useState(10);
  const onClick = () => {
    console.log("CounterWithStart.click");
    setInit(value => value - 10);
  }
  return (<Fragment>
    <Counter init={init}></Counter>
    <p>Start:{init}</p>
    <button onClick={onClick}>Lower Start</button>
  </Fragment>)
}

function CounterDemo() {
  return (
    // <Fragment>
    //   <Counter start={1}></Counter>
    //   {/* <Counter start={14}></Counter> */}
    //   {/* <Counter start={8}></Counter> */}
    // </Fragment>
    <CounterWithInitial></CounterWithInitial>
  );
}

export default CounterDemo;
