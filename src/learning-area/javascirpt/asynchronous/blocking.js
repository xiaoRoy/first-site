const button = document.querySelector('button');
button.addEventListener('click', function() {
    console.log("what");
    let date;
    for(let index = 0; index < 1; index ++) {
        let anotherDate = new Date();
        date = anotherDate;
    }
    console.log(date);
   
    let paragraph = document.createElement('p');
    paragraph.textContent = "This is newly added paragraph.";
    document.body.appendChild(paragraph);
});

const canvas = document.createElement('canvas');
canvas.width = 640;
canvas.height = 480;
document.body.appendChild(canvas);
let canvasContext = canvas.getContext('2d');

let alertBtn = document.querySelector('.alert');
let fillBtn = document.querySelector('.fill');


function degToRad(degree) {
    return degree * Math.PI / 180;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function expensiveOperation() {
    for (let index = 0; index < 1000; index ++) {
        canvasContext.fillStyle = 'rgba(0, 0, 255, 0.2)';
        canvasContext.beginPath();
        let startX = random(0, canvas.width);
        let startY = random(0, canvas.height);
        canvasContext.arc(startX, startY, 10, degToRad(0), degToRad(360), false);
        canvasContext.fill();
    }
}

fillBtn.addEventListener('click', expensiveOperation);
alertBtn.addEventListener('click', function() {
    alert('You clicked me');
});
