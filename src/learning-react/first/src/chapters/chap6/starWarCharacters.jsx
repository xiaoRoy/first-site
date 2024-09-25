import { useEffect, useState } from "react";
import "./styles/star-war-characters.css"

function StarWarCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("//www.swapi.tech/api/people")
      .then((response) => response.json())
      .then((charactersJson) =>
        charactersJson.results.map((character) => character.name)
      )
      .then((characterNames) => setCharacters(characterNames))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul className="star-war-characters">
      {characters.map((character) => (
        <li className="star-war-character" key={character}>{character}</li>
      ))}
    </ul>
  );
}

function displayStarWarCharacters() {
  return <StarWarCharacters></StarWarCharacters>;
}

export default displayStarWarCharacters;
