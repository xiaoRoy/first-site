import { useState } from "react";
import "./styles/edit-profile.css";

const status = {};

function EditProfile() {
  const [isEditing, setEditing] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmitted = (event) => {
    event.preventDefault();
    setEditing((value) => !value);
  };
  const labelClasses = new Set();
  const inputStatusClasses = new Set();
  if (isEditing) {
    labelClasses.add("label-name--invisible");
    inputStatusClasses.add("input-name--visible");
  } else {
    labelClasses.add("label-name--visible");
    inputStatusClasses.add("input-name--invisible");
  }

  const labelStatus = [...labelClasses];
  const inputStatus = [...inputStatusClasses];

  return (
    <>
      <form onSubmit={onSubmitted}>
        <label htmlFor="first-name">
          First Name: <b className={labelStatus}>{firstName}</b>
          <input
            type="text"
            name="first-name"
            id="first-name"
            className={inputStatus}
            onChange={generateOnNameEditing(setFirstName)}
          />
        </label>

        <label htmlFor="last-name">
          Last Name: <b className={labelStatus}>{lastName}</b>
          <input
            type="text"
            name="last-name"
            id="last-name"
            className={inputStatus}
            onChange={generateOnNameEditing(setLastName)}
          />
        </label>

        <button type="submit">Edit Profile</button>
      </form>
      <p>
        Hello <i>{`${firstName} ${lastName}`}</i>
      </p>
    </>
  );
}

function generateOnNameEditing(setName) {
  return (event) => setName(event.target.value);
}

export default function EditProfileDemo() {
  return <EditProfile></EditProfile>;
}
