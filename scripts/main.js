let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let image = document.querySelector('img');
image.onclick = function() {
    let src = image.getAttribute('src');
    let firstSrc = 'images/fire-fox-logo.png';
    let secondSrc = 'images/iron-man.jpeg';
    let result = (src === firstSrc ? secondSrc : firstSrc);
    image.setAttribute('src', result);
}
