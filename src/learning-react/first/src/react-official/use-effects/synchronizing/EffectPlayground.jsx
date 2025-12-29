import { useEffect } from "react";
import { useState } from "react";

function EffectPlayGround() {
  const [log, setLog] = useState("a");
  useEffect(() => {
    const onTimeout = () => console.log("⏰" + log);

    console.log(`🔵 Schedule "${log}" log`);
    const timeoutId = setTimeout(onTimeout, 3000);

    return () => {
      console.log(`🟡 Cancel "${log}" log`);
      clearTimeout(timeoutId);
    };
  }, [log]);
  const onLogChanged = (event) => setLog(event.target.value);
  return (
    <div>
      <label>
        What to log:
        <input type="text" value={log} onChange={onLogChanged} />
      </label>
    </div>
  );
}

export default function EffectPlayGroundDemo() {
  const [isVisible, setVisible] = useState(false);
  const buttonText = isVisible ? "Unmount" : "Mount";
  const onVisibleChanged = () => setVisible((value) => !value);
  return (
    <div>
      <button
        onClick={onVisibleChanged}
      >{`${buttonText} the component`}</button>
      {isVisible && (
        <div>
          <EffectPlayGround></EffectPlayGround>
        </div>
      )}
    </div>
  );
}
