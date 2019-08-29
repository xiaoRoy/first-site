function createParagraph() {
    let paragraph = document.createElement('p');
    paragraph.textContent = 'You clicked the button';
    document.body.appendChild(paragraph);
}
const buttons = document.querySelectorAll('button');
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', createParagraph);
}