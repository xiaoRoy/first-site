import { Fragment, useState } from "react";

class Todo {
  constructor(item, isDone = false) {
    this.item = item;
    this.isDone = isDone;
  }

  markDone() {
    this.isDone = true;
  }


}

function TodoList({ todoList }) {
  const [todos, setTodos] = useState(todoList);
  const [isAllVisible, setAllVisible] = useState(true);
  const todosToDisplay = isAllVisible
    ? todos
    : todos.filter((todoItem) => !todoItem.isDone);

  return (
    <Fragment>
      <button onClick={() => setAllVisible(true)}>Show All</button>
      <button onClick={() => setAllVisible(false)}>Hide Done</button>
      {todosToDisplay.map(({ item, isDone }) => (
        <p key={item}>
          {isDone ? (
            <strike>{item}</strike>
          ) : (
            <Fragment>
              {item}
              <button>x</button>
            </Fragment>
          )}
        </p>
      ))}
    </Fragment>
  );
}

function showToDoList() {
  const todoList = [
    new Todo("Feed the plants"),
    new Todo("Water the dishes"),
    new Todo("Clean the cat"),
    new Todo("Reading", true),
  ];
  return (
    <main>
      <TodoList todoList={todoList}></TodoList>
    </main>
  );
}

export default showToDoList;
