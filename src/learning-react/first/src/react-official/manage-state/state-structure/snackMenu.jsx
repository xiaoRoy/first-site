import { useState } from "react";
import "./styles/snack-menu.css";

const snackOptions = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

function SnackMenu() {
  const [chosenSnack, setChosenSnack] = useState("");
  const snackName = "snack";
  const onSnackChosen = (event) => {
    console.log("onSnackChosen");
    const target = event.target;
    if (snackName === target.name) {
      setChosenSnack(target.value);
    }
  };
  return (
    <section onChange={onSnackChosen}>
      <h2>What is your travel snack?</h2>
      <ul>
        {snackOptions.map((snack) => {
          const snackId = `{li-${snack.id} }`;
          return (
            <li id={snackId} key={snackId}>
              <input
                type="radio"
                id={snack.id}
                name={snackName}
                value={snack.title}
              />
              <label htmlFor={snack.id}>{snack.title} </label>
            </li>
          );
        })}
      </ul>
      You picked {chosenSnack}.
    </section>
  );
}

function EditableSnackMenu({ initialSnackList }) {
  const [snackList, setSnackList] = useState(initialSnackList);
  const [chosenSnackId, setSnackId] = useState(0);

  const chosenSnack = snackList.find((snack) => snack.id == chosenSnackId);

  const handleSnackChanged = (event, currentSnack) => {
    const updatedSnackList = snackList.map((snack) => {
      let updatedSnack;
      if (currentSnack.id === snack.id) {
        updatedSnack = {
          ...snack,
          title: event.target.value,
        };
      } else {
        updatedSnack = snack;
      }
      return updatedSnack;
    });
    setSnackList(updatedSnackList);
  };

  const handleSnackChosen = (event, chosenSnack) => {
    setSnackId(chosenSnack.id);
  };

  return (
    <section>
      <h2>What is your travel snack?</h2>
      <ul>
        {snackList.map((snack) => {
          const snackId = `{li-${snack.id} }`;
          return (
            <li id={snackId} key={snackId}>
              <input
                type="text"
                value={snack.title}
                onChange={(event) => handleSnackChanged(event, snack)}
              />
              <button onClick={(event) => handleSnackChosen(event, snack)}>
                Choose
              </button>
            </li>
          );
        })}
      </ul>
      You picked {chosenSnack ? chosenSnack.title : "nothing"}.
    </section>
  );
}

export default function SnackMenuDemo() {
  return (
    <EditableSnackMenu initialSnackList={snackOptions}></EditableSnackMenu>
  );
}
