import { Fragment, useEffect, useState } from "react";
import "./styles/countdown.css";

function Countdown({ from }) {
  const [seconds, setSeconds] = useState(from);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    if (!isRunning) {
      return;
    }
    const interval = setInterval(
      () =>
        setSeconds((seconds) => {
          if (seconds <= 1) {
            setRunning(false);
          }
          return seconds - 1;
        }),
      1000
    );

    return () => {
      console.log("useEffect: clean up");
      clearInterval(interval);
    };
  }, [isRunning]);
  return (
    <div className="countdown-container">
      <p>Time left:{seconds}</p>
      <div className="functions">
        <button
          className="functional-button"
          onClick={() => {
            setRunning(false);
            setSeconds(from);
          }}
        >
          Reset
        </button>
        <button
          className="functional-button"
          onClick={() => setRunning((isRunning) => !isRunning)}
          disabled={seconds === 0}
        >
          {isRunning ? "pause" : "resume"}
        </button>
      </div>
    </div>
  );
}

function CountdownDemo() {
  return <Countdown from={10}></Countdown>;
}

export default CountdownDemo;
