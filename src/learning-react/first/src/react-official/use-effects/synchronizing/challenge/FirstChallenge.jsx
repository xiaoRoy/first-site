import { useState, useRef, useEffect } from "react";
import "./first-challenge.css";

function FirstChallenge() {
  const [isVisible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("Smith");
  const [lastName, setLastName] = useState("Alan");
  const [isUpper, setUpper] = useState(false);

  const onVisibleChange = () => setVisible((value) => !value);
  const buttonText = isVisible ? "hide" : "visible";

  let fullName = `${firstName} ${lastName}`;
  if (isUpper) {
    fullName = fullName.toUpperCase();
  }

  return (
    <div>
      <button onClick={onVisibleChange}>{buttonText}</button>
      <hr />
      {isVisible && (
        <div className="name-container">
          <label className="name-label">
            <span className="input-name-hint">Enter your first name:</span>

            <FocusableInput
              shouldFocus={true}
              value={firstName}
              onChange={(name) => setFirstName(name)}
            ></FocusableInput>
          </label>

          <label className="name-label">
            <span className="input-name-hint">Enter your last name:</span>
            <FocusableInput
              value={lastName}
              onChange={(name) => setLastName(name)}
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
            Hello! <b>{fullName}</b>
          </p>
        </div>
      )}
    </div>
  );
}

function FocusableInput({ shouldFocus, value, onChange }) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (shouldFocus) {
      inputRef.current.focus();
    }
  }, [shouldFocus]);
  const internalOnChange = (event) => onChange(event.target.value);
  return (
    <input
      className="name-input"
      ref={inputRef}
      value={value}
      onChange={internalOnChange}
    ></input>
  );
}

export default FirstChallenge;
