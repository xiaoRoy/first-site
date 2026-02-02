import { createContext, useReducer } from "react";

const TODO_ACTION = {
  ADD: "add",
  DEL: "del",
  FILTER: "filter",
  UPDATE: "update",
};

const TODO_FILTER_IDS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

const TodosContext = createContext(null);
const TodosDispatchContext = createContext(null);

function todoReducer(todoState, action) {
  const { actionType, filterId, todo } = action;
  let updatedTodoState = todoState;
  switch (actionType) {
    case TODO_ACTION.ADD:
      break;
    case TODO_ACTION.DEL:
      break;
    case TODO_ACTION.FILTER:
      updatedTodoState = { ...todoState, filterId };
      break;
    case TODO_ACTION.UPDATE:
      break;
    default:
      throw new Error(`Unknown Action:${actionType}`);
  }
  return updatedTodoState;
}

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

export { TODO_FILTER_IDS, TODO_ACTION, TodosContext, TodosDispatchContext };
