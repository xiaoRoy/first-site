function create(id, parent, width, height) {
  const divWrapper = document.createElement("div");
  const canvasElement = document.createElement("canvas");

  parent.appendChild(divWrapper);
  divWrapper.appendChild(canvasElement);

  divWrapper.id = id;
  canvasElement.width = width;
  canvasElement.height = height;

  const context = canvasElement.getContext("2d");

  return {
    context,
    id,
  };
}

function createReportList(wrapperId) {
  const list = document.createElement("ul");
  list.id = `${wrapperId}-reporter`;
  const canvasWrapper = document.getElementById(wrapperId);
  canvasWrapper.appendChild(list);
  return list.id;
}

export { create, createReportList };
