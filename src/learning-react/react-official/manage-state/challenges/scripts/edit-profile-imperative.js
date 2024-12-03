const textFirstName = document.getElementById("text-first-name");
const inputFirstName = document.getElementById("input-first-name");

const textLastName = document.getElementById("text-last-name");
const inputLastName = document.getElementById("input-last-name");

const textFullName = document.getElementById("text-full-name");

const btnSubmit = document.getElementById("btn-submit");

let firstName = "aa";
let lastName = "";

const onSummitClicked = (event) => {
  event.preventDefault();
  profileState.toggleProfileState();
  displaySaveEditButton();
  const currentUiState = profileState.currentUiState;
  switchBetweenTextAndInput(currentUiState);
  currentUiState.updateFromInputToText(inputFirstName, textFirstName);
  currentUiState.updateFromInputToText(inputLastName, textLastName);
  currentUiState.updateFromNameToInput();
};

function displaySaveEditButton() {
  btnSubmit.textContent = profileState.currentUiState.btnText;
}

function switchBetweenTextAndInput(currentUiState) {
  currentUiState.displayNameInput(inputFirstName);
  currentUiState.displayNameInput(inputLastName);
  currentUiState.displayNameText(textFirstName);
  currentUiState.displayNameText(textLastName);
}

const onFirstNameChanged = (event) => {
  firstName = event.target.value;
  displayFullName();
};

const onLastNameChanged = (event) => {
  lastName = event.target.value;
  displayFullName();
};

const profileEditingUiState = {
  btnText: "Save",

  displayNameInput: function (inputName) {
    inputName.classList.replace(
      inputAndTextClasses.nameInputInvisible,
      inputAndTextClasses.nameInputVisible
    );
  },

  displayNameText: function (textName) {
    textName.classList.replace(
      inputAndTextClasses.nameTextVisible,
      inputAndTextClasses.nameTextInvisible
    );
  },

  updateFromInputToText: function (inputName, textName) {
    //do nothing
  },

  updateFromNameToInput: function () {
    inputFirstName.value = firstName;
    inputLastName.value = lastName;
  },
};

const inputAndTextClasses = {
  nameInputVisible: "input-name--visible",
  nameTextVisible: "text-name--visible",
  nameInputInvisible: "input-name--invisible",
  nameTextInvisible: "text-name--invisible",
};

const profileViewingUiState = {
  btnText: "Edit",

  displayNameInput: function (inputName) {
    inputName.classList.replace(
      inputAndTextClasses.nameInputVisible,
      inputAndTextClasses.nameInputInvisible
    );
  },

  displayNameText: function (textName) {
    textName.classList.replace(
      inputAndTextClasses.nameTextInvisible,
      inputAndTextClasses.nameTextVisible
    );
  },

  updateFromInputToText: function (inputName, textName) {
    textName.textContent = inputName.value;
  },

  updateFromNameToInput: function () {
    //do nothing
  },
};

const profileState = {
  editing: "editing",
  viewing: "viewing",

  currentState: "viewing",

  currentUiState: profileViewingUiState,

  isEditing: function () {
    return this.editing === this.currentState;
  },

  isViewing: function () {
    return this.viewing == this.currentState;
  },

  toggleProfileState: function () {
    if (this.isEditing()) {
      this.currentState = profileState.viewing;
      this.currentUiState = profileViewingUiState;
    } else if (this.isViewing()) {
      this.currentState = profileState.editing;
      this.currentUiState = profileEditingUiState;
    } else {
      throw new Error("toggle Error");
    }
  },
};

function displayFullName() {
  const fullName = `${firstName} ${lastName}`;
  textFullName.textContent = fullName;
}

document.addEventListener("DOMContentLoaded", () => {
  const inputEvent = "input";
  inputFirstName.addEventListener(inputEvent, onFirstNameChanged);
  inputLastName.addEventListener(inputEvent, onLastNameChanged);

  btnSubmit.addEventListener("click", onSummitClicked);

  inputLastName.classList.add(inputAndTextClasses.nameInputInvisible);
  inputFirstName.classList.add(inputAndTextClasses.nameInputInvisible);
  textFirstName.classList.add(inputAndTextClasses.nameTextVisible);
  textLastName.classList.add(inputAndTextClasses.nameTextVisible);

  if (firstName) {
    textFirstName.textContent = firstName;
  }

  if (lastName) {
    textLastName.textContent = lastName;
  }
  displaySaveEditButton();
  displayFullName();
});
