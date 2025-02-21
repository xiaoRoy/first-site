const positionToReplace = 13;
const separator = "";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function rotateBy13Places(message) {
  const lettersArray = Array.from(letters);
  const totalLettersCount = lettersArray.length;

  const messageArray = Array.from(message);

  const result = [];
  for (const letter of messageArray) {
    const indexOfLetter = lettersArray.indexOf(letter);
    const offset = (indexOfLetter + positionToReplace) % totalLettersCount;
    result.push(lettersArray[offset]);
  }
  return result.join(separator);
}

module.exports = rotateBy13Places;
