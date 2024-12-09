import { useState } from "react";
import "./styles/check-in.css";

function CheckInForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const onFirstNameChanged = onChangeGenerator(setFirstName);
  const onLastNameChanged = onChangeGenerator(setLastName);
  const fullName = `${firstName} ${lastName}`;
  return (
    <>
      <form action="">
        <h2>Let's check you in.</h2>
        <ul>
          <li>
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              value={firstName}
              onChange={onFirstNameChanged}
            />
          </li>

          <li>
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              value={lastName}
              onChange={onLastNameChanged}
            />
          </li>
        </ul>
        <p>Your ticket will be issued to: {fullName}</p>
      </form>
    </>
  );
}

function onChangeGenerator(setName) {
  return (event) => setName(event.target.value);
}

export default function CheckInFormDemo() {
  return <CheckInForm></CheckInForm>;
}
