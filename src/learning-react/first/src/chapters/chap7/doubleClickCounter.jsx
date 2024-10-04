import { Fragment, useRef, useState } from "react";
import "./styles/counter.css";

const THRESHOLD_IN_MILLISECOND = 300;

function DoubleClickCounterNotUsingRef() {
  const [doubleClickCount, setDoubleClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(null);
  const onClick = () => {
    const clickTime = Date.now();

    if (lastClickTime && clickTime - lastClickTime < THRESHOLD_IN_MILLISECOND) {
      setDoubleClickCount((value) => value + 1);
      setLastClickTime(null);
    } else {
      setLastClickTime(clickTime);
    }
  };

  return (
    <Fragment>
      <h2>Double Clicks:{doubleClickCount}</h2>
      <button onClick={onClick}>Click Me Twice</button>
    </Fragment>
  );
}

function DoubleClickCounterNotUsingRefDemo() {
  return (
    <Fragment>
      <div className="container">
        <DoubleClickCounterNotUsingRef></DoubleClickCounterNotUsingRef>
      </div>
    </Fragment>
  );
}

function DoubleClickCounter() {
  const [doubleClickCount, setDoubleClickCount] = useState(0);
  const lastClickTime = useRef(null);
  const onClick = () => {
    const clickTime = Date.now();

    if (
      lastClickTime &&
      clickTime - lastClickTime.current < THRESHOLD_IN_MILLISECOND
    ) {
      setDoubleClickCount((value) => value + 1);
      lastClickTime.current = null;
    } else {
      lastClickTime.current = clickTime;
    }
  };

  return (
    <Fragment>
      <h2>Double Clicks:{doubleClickCount}</h2>
      <button onClick={onClick}>Click Me Twice</button>
    </Fragment>
  );
}

function DoubleClickCounterDemo() {
  return (
    <Fragment>
      <div className="container">
        <DoubleClickCounter></DoubleClickCounter>
      </div>
    </Fragment>
  );
}

export { DoubleClickCounterDemo, DoubleClickCounterNotUsingRefDemo };
