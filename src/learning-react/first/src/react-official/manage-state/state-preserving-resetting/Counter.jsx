import { useState } from "react";
import "./styles/counter.css";

function Counter({ isFancy, person }) {
  const [count, setCounter] = useState(0);
  const [hover, setHover] = useState(false);

  const onCounterClick = () => setCounter(count + 1);
  const onHoverEnter = () => setHover(true);
  const onHoverLeave = () => setHover(false);

  let styleList = ["counter"];
  if (hover) {
    styleList.push("hover");
  }

  if (isFancy) {
    styleList.push("fancy");
  }

  const styles = styleList.join(" ");
  return (
    <div
      className={styles}
      onPointerEnter={onHoverEnter}
      onPointerLeave={onHoverLeave}
    >
      {person && <h1>{`${person}'s\nscore:`}</h1>}
      <h1>{count}</h1>
      <button onClick={onCounterClick}>One More!</button>
    </div>
  );
}

function Counters() {
  const [isFirstVisible, setFirstVisible] = useState(true);
  const [isSecondVisible, setSecondVisible] = useState(false);

  const [isFancyFirstOne, setFancyFirstOne] = useState(true);
  const [isTakingBreak, setTakingBreak] = useState(false);

  const [person, setPerson] = useState(null);

  const onOptionChangeGenerator = (operation) => () =>
    operation((value) => !value);

  const players = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Edward",
    "Fiona",
    "George",
  ];

  const onPlayerChange = () => {
    const countOfPlayer = players.length;

    const nextPlayer =
      countOfPlayer > 0
        ? players[Math.floor(Math.random() * countOfPlayer)]
        : undefined;
    setPerson(nextPlayer);
  };

  return (
    <div>
      <div class="counter-options">
        <label>
          <input
            type="checkbox"
            checked={isFirstVisible}
            onChange={onOptionChangeGenerator(setFirstVisible)}
          />
          Show the First One
        </label>
        <label>
          <input
            type="checkbox"
            checked={isSecondVisible}
            onChange={onOptionChangeGenerator(setSecondVisible)}
          />
          Show the Second One
        </label>

        <label>
          <input
            type="checkbox"
            checked={isFancyFirstOne}
            onChange={onOptionChangeGenerator(setFancyFirstOne)}
          />
          Fancy the First One
        </label>

        <label>
          <input
            type="checkbox"
            checked={isTakingBreak}
            onChange={onOptionChangeGenerator(setTakingBreak)}
          />
          Take a Break!
        </label>

        <label>
          <input type="button" value={"Next Player"} onClick={onPlayerChange} />
        </label>
      </div>
      {isFirstVisible && isTakingBreak ? (
        <p>See you later! </p>
      ) : (
        <Counter isFancy={isFancyFirstOne} person={person} key={person}></Counter>
      )}
      {isSecondVisible && <Counter isFancy={false}></Counter>}
    </div>
  );
}

export default function CounterDemo() {
  return <Counters></Counters>;
}
