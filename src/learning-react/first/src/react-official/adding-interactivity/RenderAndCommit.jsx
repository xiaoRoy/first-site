import { useEffect, useState } from "react";

function ReactTimer() {
  const time = useTime();
  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      <input></input>
    </div>
  );
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function ReactTimerDemo() {
  return <ReactTimer></ReactTimer>;
}
