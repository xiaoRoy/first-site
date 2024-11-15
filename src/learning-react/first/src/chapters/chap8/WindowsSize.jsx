import { useEffect, useState } from "react";

function getWindowSize() {
  console.log("getWindowSize");

  return `${window.innerWidth} x ${window.innerHeight}`;
}

function WindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const resizeEvent = "resize";
  useEffect(() => {
    const onResize = () => setWindowSize(getWindowSize());
    window.addEventListener(resizeEvent, onResize);
    return () => {
      window.removeEventListener(resizeEvent, onResize);
    };
  }, []);

  return <h1>Window Size: {windowSize}</h1>;
}

export default function WindowSizeDemo() {
  return <WindowSize></WindowSize>;
}
