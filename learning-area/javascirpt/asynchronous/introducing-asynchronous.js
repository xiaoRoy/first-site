const button = document.querySelector('#first-button');
button.addEventListener('click', function() {
    alert("You clicked me");
    let paragraph = document.createElement('p');
    paragraph.textContent = 'This is a newly-added paragraph';
    document.body.appendChild(paragraph);
});


function loadAsset(url, type, callback) {
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('GET', url);
    xmlHttpRequest.responseType = type;
    xmlHttpRequest.onload = function() {
        callback(xmlHttpRequest.response);
    };
    xmlHttpRequest.send();
}

function displayImage(blob) {
    console.log("trail");
    let objectURL = URL.createObjectURL(blob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}


const secondBtn = document.querySelector('#second-button');
secondBtn.addEventListener('click', function(){
    const imageURL = "iron.webp";
    loadAsset(imageURL, 'blob', displayImage)
});