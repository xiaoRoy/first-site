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

export default ButtonDemo;
