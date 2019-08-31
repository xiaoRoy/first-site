let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guess');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if(guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + '';
    if(userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    } else if (guessCount == 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHigh.textContent = "Last guest was too low!";
        } else if(userGuess > randomNumber){
            lowOrHigh.textContent = "Last guest was too high!";
        }
    }

    guessCount ++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver() {

}