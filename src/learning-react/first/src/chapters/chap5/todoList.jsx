import { Fragment, useState } from "react";

function TodoList({ todoList }) {
  const [todos, setTodos] = useState(todoList);
  return (
    <Fragment>
      {todos.map((todo, index) => (
        <p key={todo}>
          {todo}
          <button
            onClick={() =>
              setTodos((todoList) => markTodoDone(todoList, index))
            }
          >
            x
          </button>
        </p>
      ))}
    </Fragment>
  );
}

function markTodoDone(todoList, index) {
  todoList.splice(index, 1);
  return [...todoList];
}

function showToDoList() {
  const items = ["Feed the plants", "Water the dishes", "Clean the cat"];

  return (
    <main>
      <TodoList todoList={items}></TodoList>
    </main>
  );
}

export default showToDoList;
