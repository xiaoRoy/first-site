module.exports = class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width * this.width;
  }
};

console.log(module);
