import { useState } from "react";
import "./styles.css";
function ChallengeOne() {
  const [isHintVisible, setHintVisible] = useState(true);
  const onHintToggle = () => {
    setHintVisible(!isHintVisible);
  };
  return (
    <div className="hint-container">
      {isHintVisible && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <SimpleForm></SimpleForm>
      <button onClick={onHintToggle}>Toggle Hint</button>
    </div>
  );
}

function SimpleForm() {
  const [text, setText] = useState("");
  return (
    <textarea
      values={text}
      onChange={(event) => setText(event.target.value)}
    ></textarea>
  );
}

export default function ChallengeOneDemo() {
  return <ChallengeOne></ChallengeOne>;
}
