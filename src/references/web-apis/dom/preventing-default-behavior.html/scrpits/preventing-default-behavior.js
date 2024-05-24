"use strict";

const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const paragraph= document.querySelector("p");

form.addEventListener('submit', handleSubmission);



function handleSubmission(event) {
    if(firstName.value === '' || lastName.value === '') {
        console.log('empty');
        event.preventDefault();
        paragraph.textContent = "You need to fill in both names!";
    } else {
        console.log('what');
    }
}