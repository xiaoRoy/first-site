import { useReducer } from "react";
import "./styles/counter-using-reducer.css";

const COUNTER_TYPE = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(current, { type }) {
  let updatedValue;
  switch (type) {
    case COUNTER_TYPE.INCREMENT:
      updatedValue = current + 1;
      break;
    case COUNTER_TYPE.DECREMENT:
      updatedValue = current - 1;
      break;
    default:
      updatedValue = current;
  }
  return updatedValue;
}

function CounterReducer() {
  const [counter, dispatch] = useReducer(reducer, 0);
  const dispatcher = (type) => () => {
    dispatch(type);
  };
  return (
    <div className="counter-reducer">
      <button
        type="button"
        onClick={dispatcher({ type: COUNTER_TYPE.INCREMENT })}
      >
        Increment
      </button>
      <span>Counter:{counter}</span>
      <button
        type="button"
        onClick={dispatcher({ type: COUNTER_TYPE.DECREMENT })}
      >
        Decrement
      </button>
    </div>
  );
}

export default function CounterReducerDemo() {
  return <CounterReducer></CounterReducer>;
}
