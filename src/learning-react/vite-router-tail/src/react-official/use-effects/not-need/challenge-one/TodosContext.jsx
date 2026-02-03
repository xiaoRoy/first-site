import { createContext, useReducer } from "react";

const TODO_ACTION = {
  ADD: "add",
  DEL: "del",
  FILTER: "filter",
  TOGGLE: "toggle",
};

const TODO_FILTER_IDS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

const TodosContext = createContext(null);
const TodosDispatchContext = createContext(null);

function todoReducer(todoState, action) {
  const { todoList } = todoState;
  const { actionType, filterId, todo, todoName } = action;

  let updatedTodoState = todoState;
  switch (actionType) {
    case TODO_ACTION.ADD:
      const newTodo = {
        itemName: todoName,
        completed: false,
        id: todoIdOffset++,
      };
      updatedTodoState = {
        ...todoState,
        todoList: [...todoList, newTodo],
      };
      break;
    case TODO_ACTION.DEL:
      updatedTodoState = {
        ...todoState,
        todoList: todoList.filter((todoItem) => todoItem.id !== todo.id),
      };
      break;
    case TODO_ACTION.FILTER:
      updatedTodoState = { ...todoState, filterId };
      break;
    case TODO_ACTION.TOGGLE:
      const updatedTodo = { ...todo, completed: !todo.completed };
      updatedTodoState = {
        ...todoState,
        todoList: todoList.map((todo) => {
          return todo.id === updatedTodo.id ? updatedTodo : todo;
        }),
      };
      break;
    default:
      throw new Error(`Unknown Action:${actionType}`);
  }
  return updatedTodoState;
}

const FAKE_TODOS = [
  {
    id: 1,
    completed: true,
    itemName: "buy groceries",
  },
  {
    id: 2,
    completed: false,
    itemName: "finish report",
  },
  {
    id: 3,
    completed: false,
    itemName: "call mom",
  },
  {
    id: 4,
    completed: true,
    itemName: "wash the car",
  },
  {
    id: 5,
    completed: false,
    itemName: "meditate",
  },
];

let todoIdOffset = FAKE_TODOS.length;

export default function TodoProvider({ initTodos, children }) {
  const [todos, dispatch] = useReducer(todoReducer, {
    todoList: initTodos,
    filterId: TODO_FILTER_IDS.ALL,
  });
  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export {
  TODO_ACTION,
  TODO_FILTER_IDS,
  TodosContext,
  TodosDispatchContext,
  FAKE_TODOS,
};
