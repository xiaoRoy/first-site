import { Fragment, useState } from "react";
import Todo from "./data/todo";

function TodoList({ todoList }) {
  const [todos, setTodos] = useState(todoList);
  const [isAllVisible, setAllVisible] = useState(true);
  const todosToDisplay = isAllVisible
    ? todos
    : todos.filter((todoItem) => !todoItem.isDone);

  const handleMarkDone = (item) => {
    const updatedTodos = todosToDisplay.map((todo) => {
      if (todo.item === item) {
        todo.markDone();
        // todo.isDone = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

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
              <button onClick={() => handleMarkDone(item)}>Mark Done</button>
            </Fragment>
          )}
        </p>
      ))}
    </Fragment>
  );
}

function showToDoList() {
  return (
    <main>
      <TodoList todoList={Todo.generateDemoTodos()}></TodoList>
    </main>
  );
}

export default showToDoList;
