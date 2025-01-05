import { useState } from "react";
import "./styles/synced-inputs.css";

function Input({ label, id, text, onTextChange }) {
  const onInputChange = (event) => onTextChange(event);
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} onChange={onInputChange} value={text}/>
    </div>
  );
}

function SyncedInputs() {
  const [text, setText] = useState("");
  const onTextChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="synced-inputs-container">
      <Input
        label="First Input"
        id="first-input"
        text={text}
        onTextChange={onTextChange}
      ></Input>
      <Input
        label="Second Input"
        id="second-input"
        onTextChange={onTextChange}
        text={text}
      ></Input>
    </div>
  );
}

export default function SyncedInputsDemo() {
  return <SyncedInputs></SyncedInputs>;
}
