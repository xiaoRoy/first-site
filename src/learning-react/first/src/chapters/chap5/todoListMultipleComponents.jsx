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

function Task({ todo, markDone }) {
  const { item, isDone } = todo;

  const todoItemStyle = { color: isDone ? "gray" : "black" };

  return (
    <p
      className="todo-item"
      style={todoItemStyle}
    //   onClick={() => markDone(item)}
    >
      {/* <input type="checkbox" name="is-done" id={item} />
      <label htmlFor={item}>{item}</label> */}

      <button className="todo-check" onClick={() => markDone(todo)}>
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
  const todosFilterApplied = isAllVisible
    ? todos
    : todos.filter((todo) => !todo.isDone);

  const markDone = (targetTodo) => {
    console.log("mark done");
    if (!targetTodo.isDone) {
      const updatedTodos = todosFilterApplied.map((todo) => {
        if (todo.item === targetTodo.item) {
          todo.markDone();
        }
        return todo;
      });
      setTodos(updatedTodos);
    }
  };
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
      {todosFilterApplied.map((todo) => (
        <Task key={todo.item} todo={todo} markDone={markDone}></Task>
      ))}
    </Fragment>
  );
}

function displayTodoList() {
  return (
    <main>
      <div className="container">
        <TodoList todoList={Todo.generateDemoTodos()}></TodoList>
      </div>
    </main>
  );
}

export default displayTodoList;
