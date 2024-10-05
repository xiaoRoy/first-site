import { useEffect, useState } from "react";

function MouseStatus() {
  const [isMoving, setMoving] = useState(false);
  const onMouseMove = () => setMoving(true);
  useEffect(() => {
    if (!isMoving) return;
    const updateMovingToFalse = setTimeout(() => setMoving(false), 500);
    return () => clearTimeout(updateMovingToFalse);
  }, [isMoving]);
  return (
    <div onMouseMove={onMouseMove}>
      <h2>
        The mouse is {!isMoving && "not"} moving:{" "}
        {isMoving ? "\u2705" : "\u274C"}!
      </h2>
    </div>
  );
}

export default function MouseStatusDemo() {
  return <MouseStatus></MouseStatus>;
}
