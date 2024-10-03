import { useState } from "react";
import "./styles/blinking.css";

function BlinkingBackgroundV1() {
  const [isLeft, setLeft] = useState(0);
  const onMouseMove = (event) => {
    console.log(event);
    const offsetX = event.nativeEvent.offsetX;
    console.log(offsetX);
    setLeft(offsetX < 100);
  };
  const backgroundColor = isLeft ? "blue" : "red";
  const style = {
    backgroundColor,
  };
  return (
    <div style={style} onMouseMove={onMouseMove} className="container"></div>
  );
}

function BlinkingBackgroundV1Demo() {
  return <BlinkingBackgroundV1></BlinkingBackgroundV1>;
}

function BlinkingBackgroundV2() {
  const [left, setLeft] = useState(0);
  const onMouseMove = (event) => {
    setLeft(event.nativeEvent.offsetX);
  };
  const backgroundColor = left < 100 ? "blue" : "red";
  const style = { backgroundColor };
  return (
    <div style={style} onMouseMove={onMouseMove} className="container"></div>
  );
}
function BlinkingBackgroundV2Demo() {
  return <BlinkingBackgroundV2></BlinkingBackgroundV2>;
}

export { BlinkingBackgroundV1Demo, BlinkingBackgroundV2Demo };
