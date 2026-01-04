import { useCallback, useState } from "react";
import useData from "../../not-need/useData";
// data

async function fetchBio(person) {
  const delay = person === "Bob" ? 2000 : 200;
  // const delay = 2000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`This is the bio of ${person}`);
    }, delay);
  });
}

const fakePersonArray = ["Alice", "Smith", "Alan", "Bob", "Jones"];

//end of data

function BiographyPage() {
  const [person, setPerson] = useState("Alice");
  const operation = useCallback(() => fetchBio(person), [person]);
  const bio = useData(operation);
  return (
    <div>
      <select
        value={person}
        onChange={(event) => setPerson(event.target.value)}
      >
        {fakePersonArray.map((person) => (
          <option key={person} value={person}>
            {person}
          </option>
        ))}
      </select>
      <hr />
      <p>
        <i>{bio ?? "Loading..."}</i>
      </p>
    </div>
  );
}

export default function BiographyPageDemo() {
  return <BiographyPage></BiographyPage>;
}
