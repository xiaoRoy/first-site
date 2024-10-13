
const output = document.querySelector("#output");

function handleClick(event) {
    const infoTarget = `Target: ${event.target.tagName}`;
    const infoCurrentTarget = `Current Target: ${event.currentTarget.tagName}`
    output.textContent += `${infoTarget}, ${infoCurrentTarget}\n`
}

const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);
