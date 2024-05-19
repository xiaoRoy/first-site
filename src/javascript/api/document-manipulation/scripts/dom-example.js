"use strict";

const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";

const section = document.querySelector("section");
const paragraph = document.createElement("p");
paragraph.textContent = "we hope you enjoy the ride.";
section.appendChild(paragraph);

const text = document.createTextNode('— the premier source for web development knowledge.');
const linkParagraph = document.querySelector('p');
linkParagraph.appendChild(text);

section.appendChild(linkParagraph);

const paragraph1 = document.createElement('p');
paragraph1.textContent = 'paragraph#1'
const paragraph2 = document.createElement('p');
paragraph2.textContent = 'paragraph#2'
section.appendChild(paragraph1);
section.appendChild(paragraph2);
section.appendChild(paragraph1);

paragraph.setAttribute('class', 'highlight');