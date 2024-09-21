import { Fragment, useState } from "react";

function Calculator({ one, another }) {
  const plus = (one, another) => one + another;
  const minus = (one, another) => one - another;
  const multiply = (one, another) => one * another;

  const [operator, setOperator] = useState(() => plus);

  return (
    <Fragment>
      <h1>Calculator</h1>
      <button onClick={() => setOperator(() => plus)}>plus</button>
      <button onClick={() => setOperator(() => minus)}>minus</button>
      <button onClick={() => setOperator(() => multiply)}>multiply</button>
      <p>
        Result of applying operator to {one} and {another}:
        <code>{operator(one, another)}</code>
      </p>
    </Fragment>
  );
}

function showCalculator() {
  const operands = {
    one: 8,
    another: 14,
  };
  return (
    <main>
      <Calculator {...operands}></Calculator>
    </main>
  );
}

export default showCalculator;