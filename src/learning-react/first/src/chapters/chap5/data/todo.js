class Todo {
  constructor(item, isDone = false) {
    this.item = item;
    this.isDone = isDone;
  }

  markDone() {
    this.isDone = true;
  }

  static generateDemoTodos() {
    return [
      new Todo("Feed the plants"),
      new Todo("Water the dishes"),
      new Todo("Clean the cat"),
      new Todo("Reading", true),
    ];
  }
}

export default Todo;
