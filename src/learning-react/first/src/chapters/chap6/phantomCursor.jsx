import { useRef } from "react";
import "./styles/phantom-cursor.css";

function PhantomCursor() {
  const target = useRef();
  const onMouseMove = (event) => {
    const style = target.current.style;
    style.left = `${event.nativeEvent.offsetX}px`;
    style.top = `${event.nativeEvent.offsetY}px`;
  };

  return (
    <div className="container">
      <div className="target" ref={target} onMouseMove={onMouseMove}></div>
    </div>
  );
}

function PhantomCursorDemo() {
  return <PhantomCursor></PhantomCursor>;
}

export default PhantomCursorDemo;
