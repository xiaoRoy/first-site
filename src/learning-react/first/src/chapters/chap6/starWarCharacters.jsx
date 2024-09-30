import { Fragment, useEffect, useState } from "react";
import "./styles/star-war-characters.css";

function StarWarCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    fetch("//www.swapi.tech/api/people")
      .then((response) => {
        console.log("Characters Loaded");
        return response.json();
      })
      .then((charactersJson) =>
        charactersJson.results.map((character) => character.name)
      )
      .then((characterNames) => setCharacters(characterNames))
      .catch((error) => console.log(error));
    return () => abortController.abort();
  }, []);

  return (
    <ul className="star-war-characters">
      {characters.map((character) => (
        <li className="star-war-character" key={character}>
          {character}
        </li>
      ))}
    </ul>
  );
}

function StarWarCharactersDemo() {
  const [isCharactersVisible, setCharactersVisible] = useState(false);
  return (
    <Fragment>
      <button onClick={() => setCharactersVisible((value) => !value)}>
        Toggle
      </button>
      {isCharactersVisible && <StarWarCharacters></StarWarCharacters>}
    </Fragment>
  );
}

export default StarWarCharactersDemo;
