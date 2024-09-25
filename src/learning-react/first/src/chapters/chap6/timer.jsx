import { useState } from "react";

function TimerUsingInterval() {
  const [counting, setCounting] = useState(0);
  setInterval(() => {
    setCounting(counting + 1);
  }, 1000);

  return <p>Timer: {counting}</p>;
}

function showTimerUserInterval() {
  return <TimerUsingInterval></TimerUsingInterval>;
}

function TimerUsingTimeout() {
  const [counting, setCounting] = useState(0);
  setTimeout(() => setCounting(counting + 1), 1000);
  return <p>Timer: {counting}</p>;
}

function showTimerUsingTimeout() {
  return <TimerUsingTimeout></TimerUsingTimeout>;
}

export { showTimerUserInterval, showTimerUsingTimeout };
