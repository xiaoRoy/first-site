"use strict";

const addItemButton = document.querySelector("button");
const itemTextInput = document.querySelector("input");
const addedItemList = document.querySelector("ul");
addItemButton.addEventListener("click", addItem);

function addItem() {
  const itemToAdd = itemTextInput.value;
  if (itemToAdd) {
    itemTextInput.value = "";
    const addedListItem = document.createElement("li");
    const listItemSpan = document.createElement("span");
    listItemSpan.textContent = itemToAdd;
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener('click', deleteItem);
    deleteButton.textContent = "DELETE";
    addedListItem.appendChild(listItemSpan);
    addedListItem.appendChild(deleteButton);
    addedItemList.appendChild(addedListItem);
    console.log(itemToAdd);
  }
  itemTextInput.focus();
}

function deleteItem(event) {
    const listItem = event.target.parentElement;
    if (listItem) {
        addedItemList.removeChild(listItem);
    }
    
}
