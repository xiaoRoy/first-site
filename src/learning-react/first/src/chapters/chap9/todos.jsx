import { useState } from "react";
import "./styles/todo.css";

const sections = {
  addNewItem: 0,
  todoList: 1,
};

const IMPORTANCE = {
  LOW: {
    value: "low",
    label: "Low",
  },
  MEDIUM: {
    value: "medium",
    label: "Medium",
  },
  HIGH: {
    value: "high",
    label: "High",
  },
  URGENT: {
    value: "urgent",
    label: "Urgent",
  },
};

function Importance({ importance, checked = false, onImportanceChanged }) {
  const internalOnImportanceChanged = (event) => onImportanceChanged(event);
  return (
    <label>
      <input
        type="radio"
        name={todoNames.importance}
        value={importance.value}
        checked={checked}
        onChange={internalOnImportanceChanged}
      />
      {importance.label}
    </label>
  );
}

function ImportanceUrgent({ todoImportance, onUrgentChanged }) {
  const internalOnUrgentChanged = (event) => onUrgentChanged(event);
  const urgent = IMPORTANCE.URGENT;
  return (
    <label>
      <input
        type="checkbox"
        name={todoNames.importance}
        value={urgent.value}
        checked={todoImportance === urgent.value}
        onChange={internalOnUrgentChanged}
      ></input>
      {`${urgent.label}?`}
    </label>
  );
}

function TodoHeader({ onVisibleSectionChanged }) {
  const internalOnVisibleSectionChanged = (visibleSectionId) => {
    return (event) => {
      onVisibleSectionChanged(visibleSectionId);
    };
  };
  return (
    <section>
      <button
        type="button"
        onClick={internalOnVisibleSectionChanged(sections.todoList)}
      >
        View Todo List
      </button>
      <button
        type="button"
        onClick={internalOnVisibleSectionChanged(sections.addNewItem)}
      >
        Add New Item
      </button>
    </section>
  );
}

function generateTodoList() {
  return [
    new Todo(
      "Walking the dog",
      "a little puppy",
      "chore",
      "2024-12-22",
      IMPORTANCE.LOW.value,
      false
    ),
  ];
}

function TodoApp() {
  const [visibleSectionId, setVisibleSectionId] = useState(sections.todoList);
  const onVisibleSectionChanged = (visibleSectionId) => {
    setVisibleSectionId(visibleSectionId);
  };
  const initial = generateTodoList();
  const [todoList, setTodoList] = useState(initial);
  const onTodoAdded = (todo) => {
    const updatedTodoList = [...todoList, todo];
    setVisibleSectionId(sections.todoList);
    setTodoList(updatedTodoList);
  };

  const onCancel = () => setVisibleSectionId(sections.todoList);

  const onMarkAsDone = (updatedTodoList) => setTodoList(updatedTodoList);
  const [selectedFilter, setSelectedFilter] = useState(filterStates.showAll);
  const onFilterChange = (selectedFilter) => setSelectedFilter(selectedFilter);

  let todoFilter = (todo) => true;

  if (selectedFilter === filterStates.hideDone) {
    todoFilter = (todo) => !todo.isCompleted;
  }
  const todoListToDisplay = todoList.filter(todoFilter);

  return (
    <div>
      <TodoHeader
        onVisibleSectionChanged={onVisibleSectionChanged}
      ></TodoHeader>

      {visibleSectionId === sections.addNewItem && (
        <AddNewItemSection
          onTodoAdded={onTodoAdded}
          onCancel={onCancel}
        ></AddNewItemSection>
      )}
      {visibleSectionId === sections.todoList && (
        <TodoListSection
          todoList={todoListToDisplay}
          onMarkAsDone={onMarkAsDone}
          selectedFilter={selectedFilter}
          onFilterChange={onFilterChange}
        ></TodoListSection>
      )}
    </div>
  );
}

class Todo {
  constructor(title, description, category, dueDate, importance, isCompleted) {
    this.title = title;
    this.description = description;
    this.category = category;
    this.dueDate = dueDate;
    this.importance = importance;
    this.isCompleted = isCompleted;
  }

  markAsDone() {
    if (!this.isCompleted) {
      this.isCompleted = true;
    }
  }

  clone() {
    return new Todo(
      this.title,
      this.description,
      this.category,
      this.dueDate,
      this.importance,
      this.isCompleted
    );
  }

  static EMPTY = new Todo("", "", "", "", "", false);
  static NAME_TITLE = "title";
  static NAME_DESCRIPTION = "description";
  static NAME_CATEGORY = "category";
  static NAME_DUE_DATE = "dueDate";
  static NAME_IMPORTANCE = "importance";
}

function TodoInput({ label, onTodoInputting, type = "text", ...rest }) {
  const internalOnTodoInputting = (event) => onTodoInputting(event);
  const { id } = rest;
  return (
    <label htmlFor={id} className="todo-input-group">
      <span className="todo-input-part">{label}</span>
      <input
        className="todo-input "
        type={type}
        onChange={internalOnTodoInputting}
        {...rest}
      />
    </label>
  );
}

const filterStates = {
  showAll: 0,
  hideDone: 1,
};

function TodoFilters({ selectedFilter, onFilterChange }) {
  const internalOnFilterChanged = (filterState) => {
    return (event) => onFilterChange(filterState);
  };

  const selectedStyle = {
    background: "dimgray",
    color: "white",
  };

  const baseStyle = {
    background: "transparent",
    color: "dimgray",
  };

  function getStyle(filterOption) {
    return filterOption == selectedFilter ? selectedStyle : baseStyle;
  }
  return (
    <div className="todo-filters">
      <button
        className="filter-button"
        type="button"
        style={getStyle(filterStates.showAll)}
        onClick={internalOnFilterChanged(filterStates.showAll)}
      >
        Show All
      </button>
      <button
        className="filter-button "
        type="button"
        style={getStyle(filterStates.hideDone)}
        onClick={internalOnFilterChanged(filterStates.hideDone)}
      >
        Hide Done
      </button>
    </div>
  );
}

const todoNames = {
  title: "todo-title",
  description: "todo-description",
  category: "todo-category",
  importance: "todo-importance",
  dueDate: "todo-due-date",
};

const IMPORTANCE_SECTIONS = {
  LIST_ALL: 0,
  URGENT_ONLY: 1,
  DROP_DOWN: 2,
};

function ImportanceSection({
  sectionId,
  todoImportance,
  onTodoImportanceChanged,
}) {
  let importanceSection;
  switch (sectionId) {
    case IMPORTANCE_SECTIONS.LIST_ALL:
      importanceSection = Object.keys(IMPORTANCE).map((key) => {
        const importance = IMPORTANCE[key];
        const checked = importance.value === todoImportance;
        return (
          <Importance
            importance={importance}
            checked={checked}
            key={key}
            onImportanceChanged={onTodoImportanceChanged}
          ></Importance>
        );
      });
      break;
    case IMPORTANCE_SECTIONS.URGENT_ONLY:
      importanceSection = (
        <ImportanceUrgent
          todoImportance={todoImportance}
          onUrgentChanged={onTodoImportanceChanged}
        ></ImportanceUrgent>
      );
      break;

    case IMPORTANCE_SECTIONS.DROP_DOWN:
      importanceSection = (
        <select
          name={todoNames.importance}
          id={IMPORTANCE_SECTIONS_ID}
          onChange={onTodoImportanceChanged}
        >
          {Object.keys(IMPORTANCE).map((key) => {
            const importance = IMPORTANCE[key];
            return (
              <option value={importance.value} key={importance.value}>
                {importance.label}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      throw new Error("Not a valid section id.");
  }
  return importanceSection;
}

const IMPORTANCE_SECTIONS_ID = "importance-section";

function AddNewItemSection({ onTodoAdded, onCancel }) {
  const todoNamesToFields = {
    [todoNames.title]: Todo.NAME_TITLE,
    [todoNames.description]: Todo.NAME_DESCRIPTION,
    [todoNames.category]: Todo.NAME_CATEGORY,
    [todoNames.importance]: Todo.NAME_IMPORTANCE,
    [todoNames.dueDate]: Todo.NAME_DUE_DATE,
  };
  const internalOnTodoAdded = (event) => {
    event.preventDefault();
    onTodoAdded(todo);
  };

  const internalOnCancel = (event) => {
    onCancel();
  };

  const [todo, setTodo] = useState(Todo.EMPTY);

  const onTodoPartChanged = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    const filedName = todoNamesToFields[name];
    const newlyTodo = todo.clone();
    newlyTodo[filedName] = value;
    setTodo(newlyTodo);
  };

  const onTodoImportanceChanged = (event) => {
    const target = event.target;
    let value = target.value;
    if (target.type === "checkbox" && !target.checked) {
      value = "";
    }
    const newlyTodo = todo.clone();
    newlyTodo.importance = value;
    setTodo(newlyTodo);
  };

  return (
    <form className="add-new-item-section" onSubmit={internalOnTodoAdded}>
      <TodoInput
        label="Title:"
        id="todo-title"
        name={todoNames.title}
        onTodoInputting={onTodoPartChanged}
      ></TodoInput>
      <label htmlFor="todo-description">Description:</label>
      <textarea
        id="todo-description"
        name={todoNames.description}
        onChange={onTodoPartChanged}
      ></textarea>
      <TodoInput
        label="Category:"
        id="todo-category"
        name={todoNames.category}
        onTodoInputting={onTodoPartChanged}
      ></TodoInput>
      <TodoInput
        label="Due Date:"
        type="date"
        id="todo-due-date"
        onTodoInputting={onTodoPartChanged}
        name={todoNames.dueDate}
      ></TodoInput>
      <div className="todo-input-group">
        <label
          className="importance-section-title"
          htmlFor={IMPORTANCE_SECTIONS_ID}
        >
          Importance:
        </label>
        <ImportanceSection
          sectionId={IMPORTANCE_SECTIONS.DROP_DOWN}
          todoImportance={todo.importance}
          onTodoImportanceChanged={onTodoImportanceChanged}
        ></ImportanceSection>
      </div>
      <div className="todo-submit-cancel">
        <button>Submit</button>
        <button type="button" onClick={internalOnCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

function TodoListSection({
  todoList,
  onMarkAsDone,
  selectedFilter,
  onFilterChange,
}) {
  const todoCount = todoList.length;

  const internalOnMarkAsDone = (currentTodo) => {
    const updatedTodoList = todoList.map((todo) => {
      let updatedTodo = todo;
      if (todo.title === currentTodo.title) {
        currentTodo.markAsDone();
        updatedTodo = currentTodo.clone();
      }
      return updatedTodo;
    });
    onMarkAsDone(updatedTodoList);
  };

  const generateTodoItem = (todo) => {
    return (
      <tr key={todo.title}>
        <th scope="row">{todo.title}</th>
        <td>{todo.description}</td>
        <td>{todo.category}</td>
        <td>{todo.dueDate}</td>
        <td>{todo.importance}</td>
        <td>
          {todo.isCompleted ? (
            <span>Done!</span>
          ) : (
            <input
              type="button"
              value="Mark as done"
              onClick={() => internalOnMarkAsDone(todo)}
            ></input>
          )}
        </td>
      </tr>
    );
  };

  return (
    <section className="todo-list-section">
      <h2>{todoCount} item(s) todo</h2>
      <TodoFilters
        selectedFilter={selectedFilter}
        onFilterChange={onFilterChange}
      ></TodoFilters>
      <table className="todo-list">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Due Date</th>
            <th scope="col">Importance</th>
            <th scope="col">Mark as Done</th>
          </tr>
        </thead>
        <tbody>{todoList.map(generateTodoItem)}</tbody>
      </table>
    </section>
  );
}

export default function TodoAppDemo() {
  return <TodoApp></TodoApp>;
}
