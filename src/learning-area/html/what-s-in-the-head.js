var list = document.createElement('ul');
var info = document.createElement('p');
var html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere outside the list to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
    var listItem = document.createElement('li');
    var listConent = prompt('What content do you want the list item to have?');
    listItem.textContent = listConent;
    list.appendChild(listItem);

    listItem.onclick = function(event) {
        event.stopPropagation();
        var listConent = prompt('Enter new content for your list item');
        this.textContent = listConent;
    }
}