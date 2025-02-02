import { useState } from "react";
import "./styles/natural-sum.css";

function NaturalSum() {
  const [naturalSum, setNaturalSum] = useState(1);

  const onGetResult = (event) => {
    const operand = event.target.elements.operand.valueAsNumber;
    setNaturalSum((operand * (operand + 1)) / 2);
    event.preventDefault();
  };
  return (
    <form onSubmit={onGetResult}>
      <ul>
        <li>
          <label htmlFor="">Number:</label>
          <input
            type="number"
            name="operand"
            id="operand"
            defaultValue="1"
            min="1"
          />
        </li>

        <li>
          <input type="submit" value="Get the Result" />
        </li>
        <li>
          <label>Result:{naturalSum}</label>
        </li>
      </ul>
    </form>
  );
}

export default function NaturalSumDemo() {
  return <NaturalSum></NaturalSum>;
}
