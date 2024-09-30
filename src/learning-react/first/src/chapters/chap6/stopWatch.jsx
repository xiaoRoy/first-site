import { useEffect, useState } from "react";
import "./styles/stop-watch.css";

// eslint-disable-next-line 
function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [isWatchVisible, setWatchVisible] = useState(false);
  useEffect(() => {
    const interval = setInterval(
      () => setSeconds((seconds) => seconds + 1),
      1000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="stop-watch">
      <button
        className="toggle-watch"
        onClick={() => setWatchVisible((isWatchVisible) => !isWatchVisible)}
      >
        Toggle Watch
      </button>
      {isWatchVisible && <p>Seconds: {seconds}</p>}
    </div>
  );
}

function StopWatchV2() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setSeconds((seconds) => seconds + 1),
      1000
    );
    return () => clearInterval(interval);
  }, []);
  return <p>Seconds: {seconds}</p>;
}

function StopWatchDemo() {
  return (
    <div className="container">
      <StopWatchV2Running></StopWatchV2Running>
    </div>
  );
}

function StopWatchV2Running() {
  const [isWatchVisible, setWatchVisible] = useState(false);
  return (
    <div className="stop-watch">
      <button
        className="toggle-watch"
        onClick={() => setWatchVisible((isWatchVisible) => !isWatchVisible)}
      >
        Toggle Watch
      </button>
      {isWatchVisible && <StopWatchV2></StopWatchV2>}
    </div>
  );
}

export default StopWatchDemo;
