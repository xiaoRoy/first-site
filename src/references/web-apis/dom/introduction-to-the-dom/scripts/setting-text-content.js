'use strict';

const storyTextArea = document.body.querySelector('.story');

const setTextButton = document.body.querySelector('#set-text');
setTextButton.addEventListener('click', () => {
    storyTextArea.textContent = "It was a dark and stormy night...";
});

const clearTextButton = document.body.querySelector('#clear-text');
clearTextButton.addEventListener('click', (event) => {
    storyTextArea.textContent = '';
});