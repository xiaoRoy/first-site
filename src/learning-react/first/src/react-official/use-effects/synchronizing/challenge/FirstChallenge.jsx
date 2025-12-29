import { useEffect } from "react";
import { useState, useRef } from "react";

function FirstChallenge() {
  const [isVisible, setVisible] = useState(false);
  const [name, setName] = useState("Smith");
  const [isUpper, setUpper] = useState(false);

  const onVisibleChange = () => setVisible((value) => !value);
  const buttonText = isVisible ? "hide" : "visible";

  const message = isUpper ? name.toUpperCase() : name;

  const styles = {
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div>
      <button onClick={onVisibleChange}>{buttonText}</button>
      <hr />
      {isVisible && (
        <div style={styles}>
          <label>
            Enter your name:
            <FocusableInput
              value={name}
              onChange={(name) => setName(name)}
            ></FocusableInput>
          </label>

          <label>
            <input
              type="checkbox"
              checked={isUpper}
              onChange={(event) => setUpper(event.target.checked)}
            />
            Make it uppercase!
          </label>
          <p>
            Hello!<b>{message}</b>
          </p>
        </div>
      )}
    </div>
  );
}

function FocusableInput({ value, onChange }) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const internalOnChange = (event) => onChange(event.target.value);
  return (
    <input ref={inputRef} value={value} onChange={internalOnChange}></input>
  );
}

export default FirstChallenge;
