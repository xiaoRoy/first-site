const colors = fetch("./colors.json").then((response) => response.json());

export default await colors;
