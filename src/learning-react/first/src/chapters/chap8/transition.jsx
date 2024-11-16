import { useEffect, useRef, useState } from "react";
import "./styles/transition.css";

function Transition() {
  const colorBlue = "blue";
  const colorRed = "red";

  const [isRunning, setRunning] = useState();
  const isRunningTextRef = useRef();
  const [color, setColor] = useState(colorBlue);
  const runningTextStyle = {
    color,
  };
  const goBlue = () => setColor(colorBlue);
  const goRed = () => setColor(colorRed);
  console.log("Transition");

  useEffect(() => {
    console.log("Transition Effect");
    const onStart = () => setRunning(true);
    const onEnd = () => setRunning(false);
    const transitionStart = "transitionstart";
    const transitionEnd = "transitionend";
    const isRunningText = isRunningTextRef.current;
    isRunningText.addEventListener(transitionStart, onStart);
    isRunningText.addEventListener(transitionEnd, onEnd);
    return () => {
      isRunningText.removeEventListener(transitionStart, onStart);
      isRunningText.removeEventListener(transitionEnd, onEnd);
    };
  });

  return (
    <>
      <h1>Transition is {!isRunning && "not"} running</h1>
      <p style={runningTextStyle} ref={isRunningTextRef}>
        COLORFUL TEXT
      </p>
      <button onClick={goBlue}>Go blue</button>
      <button onClick={goRed}>Go red</button>
    </>
  );
}

export default function TransitionDemo() {
  return <Transition></Transition>;
}
