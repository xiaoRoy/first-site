import { useState } from "react";

function Strong({ children }) {
  return <strong>{children}</strong>;
}

function Button({ children }) {
  const [enabled, setEnabled] = useState(false);
  const style = {
    border: `1px solid ${enabled ? "red" : "black"}`,
  };
  return (
    <button style={style} onClick={() => setEnabled((value) => !value)}>
      <Strong>{children}</Strong>
    </button>
  );
}

function ButtonDemo() {
  return <Button>Toggle</Button>;
}

function Icon({ icon }) {
  return (
    <img
      src={`images/${icon}.png`}
      className="button-icon"
      alt=""
      width="15"
    ></img>
  );
}

function PushButton({ label, generateIcon }) {
  const [pressed, setPressed] = useState(false);
  return (
    <button onClick={() => setPressed((value) => !value)}>
      {generateIcon(pressed)}
      {label}
    </button>
  );
}

function LockButton() {
  const generateIcon = (pressed) => {
    const icon = pressed ? "lock" : "unlock";
    return <Icon icon={icon}></Icon>;
  };
  return <PushButton label="lock" generateIcon={generateIcon}></PushButton>;
}

function LockButtonV2({ label, ButtonIcon }) {
  const [pressed, setPressed] = useState(false);
  return (
    <button onClick={() => setPressed((value) => !value)}>
      <ButtonIcon pressed={pressed}></ButtonIcon>
      {label}
    </button>
  );
}

function LockIcon({ pressed }) {
  const icon = pressed ? "lock" : "unlock";
  return <Icon icon={icon}></Icon>;
}

function LockButtonDemo() {
  return <LockButton></LockButton>;
}

function LockButtonV2Demo () {
  return <LockButtonV2 label="lock" ButtonIcon={LockIcon}></LockButtonV2>
}
export { ButtonDemo, LockButtonDemo, LockButtonV2Demo };
