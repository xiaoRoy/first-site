import "./styles/simple-sum.css";
import { useState } from "react";

function SimpleNumberInput({ id, label, number, onNumberChanged }) {
  const internalOnNumberChanged = (event) => {
    onNumberChanged(event);
  };
  return (
    <div>
      <label htmlFor={id} className="simple-sum-label">
        {label}:
      </label>
      <input type="number" value={number} onChange={internalOnNumberChanged} />
    </div>
  );
}

function SimpleSum() {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  let result;

  const onNumberChanged = (setNumber) => {
    return (event) => setNumber(event.target.value);
  };
  const onFirstNumberChanged = onNumberChanged(setFirst);
  const onSecondNumberChanged = onNumberChanged(setSecond);

  if (first && second) {
    result = new Number(first) + new Number(second);
  }
  return (
    <div className="simple-sum-container">
      <SimpleNumberInput
        id="first"
        label="first"
        number={first}
        onNumberChanged={onFirstNumberChanged}
      ></SimpleNumberInput>
      <SimpleNumberInput
        id="second"
        label="second"
        number={second}
        onNumberChanged={onSecondNumberChanged}
      ></SimpleNumberInput>
      <p>first + second:{result}</p>
    </div>
  );
}

export default function SimpleSumDemo() {
  return <SimpleSum></SimpleSum>;
}
