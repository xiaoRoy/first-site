import { Fragment, useState } from "react";
import Todo from "./data/todo";
import "./styles/todo.css";

const filters = {
  showAll: "Show All",
  hideDone: "Hide Done",
};

function FilterButton({ selected, setSelected, filterName }) {
  const isSelected = selected === filterName;

  const style = isSelected
    ? { backgroundColor: "dimgray", color: "white" }
    : { backgroundColor: "transparent", color: "dimgray" };
  const onFilterClicked = () =>
    setSelected((selected) => {
      return isSelected ? selected : filterName;
    });
  return (
    <button style={style} className="filter-button" onClick={onFilterClicked}>
      {filterName}
    </button>
  );
}

function Task({ todo }) {
  const { item, isDone } = todo;

  const todoItemStyle = { color: isDone ? "gray" : "black" };

  return (
    <p className="todo-item" style={todoItemStyle}>
      {/* <input type="checkbox" name="is-done" id={item} />
      <label htmlFor={item}>{item}</label> */}

      <button className="todo-check">
        {isDone ? "\u2705" : "\u25FB\uFE0F"}
      </button>
      {item}
    </p>
  );
}

function TodoList({ todoList }) {
  const [todos, setTodos] = useState(todoList);
  const [selected, setSelected] = useState(filters.showAll);
  const isAllVisible = selected === filters.showAll;

  return (
    <Fragment>
      <>
        <FilterButton
          selected={selected}
          setSelected={setSelected}
          filterName={filters.showAll}
        ></FilterButton>
        <FilterButton
          selected={selected}
          setSelected={setSelected}
          filterName={filters.hideDone}
        ></FilterButton>
      </>
      {todos.map((todo) => (
        <Task todo={todo}></Task>
      ))}
    </Fragment>
  );
}

function displayTodoList() {
  return (
    <main>
      <div className="container">
        <TodoList
          todoList={Todo.generateDemoTodos()}
        ></TodoList>
      </div>
    </main>
  );
}

export default displayTodoList;
