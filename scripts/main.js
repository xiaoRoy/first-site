// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
let heading = document.querySelector('h1');
if(!localStorage.getItem('name')) {
    setUserName()
} else {
    let storedName = localStorage.getItem('name');
    heading.textContent = 'Mozilla is cool, ' + storedName;
}

let image = document.querySelector('img');
image.onclick = function() {
    let src = image.getAttribute('src');
    let firstSrc = 'images/fire-fox-logo.png';
    let secondSrc = 'images/iron-man.jpeg';
    let result = (src === firstSrc ? secondSrc : firstSrc);
    image.setAttribute('src', result);
}

let buttonChangeUser = document.querySelector('button');
buttonChangeUser.onclick = function() {
    setUserName();
}

function setUserName() {
    let name = prompt('Please enter your name');
    localStorage.setItem('name', name);
    heading.textContent = 'Mozilla is cool, ' + name;
}