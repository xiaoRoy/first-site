import { useState } from "react";
import "./styles/styled-counter.css";

function Button({ label, handleClick }) {
  const onClick = () => handleClick();
  return <button onClick={onClick}>{label}</button>;
}

function StyledCounter() {
  const [counter, setCounter] = useState(0);

  function updateCounter(offset) {
    return function () {
      setCounter((value) => value + offset);
    };
  }

  const increaseOne = updateCounter()(1);
  const decreaseOne = updateCounter()(-1);

  return (
    <>
      <h1>Counter:{counter}</h1>
      <div>
        <Button label="Increment" handleClick={increaseOne}></Button>
        <Button label="Decrement" handleClick={decreaseOne}></Button>
      </div>
    </>
  );
}

export default function StyledCounterDemo() {
  return (
    <>
      <StyledCounter></StyledCounter>
    </>
  );
}
