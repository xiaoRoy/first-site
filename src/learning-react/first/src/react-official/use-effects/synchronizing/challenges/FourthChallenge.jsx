// data

import { useEffect } from "react";
import { useState } from "react";

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
  const [bio, setBio] = useState(null);
  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then((result) => {
      if (!ignore) {
        setBio(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, [person]);
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
