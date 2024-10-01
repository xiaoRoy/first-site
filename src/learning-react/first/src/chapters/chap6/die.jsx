import "./styles/die.css";
import { Fragment, useState } from "react";

function Die() {
  const value = Math.floor(Math.random() * 6);
  return <span className="die">{value}</span>;
}

function DiceRoller() {
  const [rolls, setRolls] = useState(0);

  return (
    <Fragment>
      <h1>Rolls: {rolls}</h1>
      <button onClick={() => setRolls((value) => value + 1)}>Re-Roll</button>
      <div>
        <Die></Die>
        <Die></Die>
        <Die></Die>
      </div>
    </Fragment>
  );
}

function DiceRollerDemo() {
  return (
    <div className="container">
      <DiceRoller></DiceRoller>
    </div>
  );
}

export default DiceRollerDemo;