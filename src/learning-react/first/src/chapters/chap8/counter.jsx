import { useRef, useState } from "react";
import "./styles/counter.css";

function Counter({ offset }) {
  const [count, setCount] = useState(0);
  const increaseBtnRef = useRef();

  const onButtonsClick = (event) => {
    let delta = Math.abs(offset);
    if (event.target !== increaseBtnRef.current) {
      delta = -delta;
    }
    setCount((value) => value + delta);
  };
  return (
    <section>
      <h1>Value: {count}</h1>
      <div className="counter-buttons-container">
        <button ref={increaseBtnRef} onClick={onButtonsClick}>
          Increase
        </button>
        <button onClick={onButtonsClick}>Decrease</button>
      </div>
    </section>
  );
}

export default function CounterDemo() {
  return <Counter offset={2}></Counter>;
}
