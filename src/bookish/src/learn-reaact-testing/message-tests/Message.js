import { useState } from "react";

export default function Message({ text }) {
  const [isTextVisible, setTextVisible] = useState(true);
  const onToggleTextClicked = () => setTextVisible(!isTextVisible);

  return (
    <div>
      {isTextVisible && <p>{text}</p>}
      <button onClick={onToggleTextClicked}>Toggle Text</button>
    </div>
  );
}
