import { useEffect, useRef } from "react";

function AutoFocusInput({ type }) {
  const inputRef = useRef();
  useEffect(() => inputRef.current.focus(), []);
  return <input ref={inputRef} type={type}></input>;
}

function AutoFocusInputDemo() {
  return (
    <div className="container">
      <AutoFocusInput type="text"></AutoFocusInput>
    </div>
  );
}

export default AutoFocusInputDemo;