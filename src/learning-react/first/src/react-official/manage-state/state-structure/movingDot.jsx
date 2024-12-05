import { useState } from "react";
import "./styles/moving-dot.css";

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMoved = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  const dotTranslation = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  };

  return (
    <div className="pointer-container" onPointerMove={onMouseMoved}>
      <div className="pointer" style={dotTranslation}></div>
    </div>
  );
}

export default function MovingDotDemo() {
  return <MovingDot></MovingDot>;
}
