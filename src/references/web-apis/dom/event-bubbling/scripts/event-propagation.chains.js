let clear = false;

const divContainer = document.querySelector(".container");
const divInfo = document.querySelector("#div-info");
const divArray = divContainer.getElementsByTagName("div");
const cbCapture = document.querySelector("#on-capture");

document.addEventListener("DOMContentLoaded", () => {
  cbCapture.addEventListener("click", () => {
    removeListeners();
    addListeners();
    clearDivs();
  });
  clearDivs();
  addListeners();
});

function removeListeners() {
  for (const div of divArray) {
    div.removeEventListener("click", onDivClicked, { capture: true });
    div.removeEventListener("click", onDivClicked, { capture: false });
  }
}

function addListeners() {
  const capture = cbCapture.checked;
  for (const div of divArray) {
    div.addEventListener("click", onDivClicked, { capture });
    if (!capture) {
      div.addEventListener("mousemove", () => (clear = true));
    }
  }
}

const phaseMap = new Map();
phaseMap.set(Event.NONE, "NONE");
phaseMap.set(Event.CAPTURING_PHASE, "CAPTURING_PHASE");
phaseMap.set(Event.AT_TARGET, "AT_TARGET");
phaseMap.set(Event.BUBBLING_PHASE, "BUBBLING_PHASE");

function onDivClicked(event) {
  if (clear) {
    clearDivs();
    clear = false;
  }

  const currentTarget = event.currentTarget;
  const eventPhase = event.eventPhase;
  const currentTargetId = currentTarget.id;

  if (eventPhase === Event.AT_TARGET) {
    currentTarget.style.backgroundColor = "red";
  }

  const level = phaseMap.get(eventPhase) ?? "error";
  const info = document.createElement("p");
  info.textContent = `${currentTargetId} - eventPhase: ${level}`;
  divInfo.appendChild(info);
}

function clearDivs() {
  const length = divArray.length;
  for (let index = 0; index < length; index++) {
    const div = divArray[index];
    const bgColor = index % 2 === 0 ? "#cceeff" : "#f6eedb";
    divArray[index].style.backgroundColor = bgColor;
  }
  divInfo.textContent = "";
}
