import { createContext, useReducer } from "react";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export default function TasksProvider({ children, initialTasks }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

const TASK_ACTIONS = {
  ADD: "add",
  EDIT: "edit",
  DEL: "delete",
};

function tasksReducer(tasks, action) {
  const newTask = action.task;
  let updatedTasks;
  switch (action.type) {
    case TASK_ACTIONS.ADD: {
      updatedTasks = Array.from(tasks);
      updatedTasks.push(newTask);
      break;
    }

    case TASK_ACTIONS.EDIT: {
      updatedTasks = tasks.map((task) => {
        let result;
        if (task.id === newTask.id) {
          result = newTask;
        } else {
          result = task;
        }
        return result;
      });
      break;
    }

    case TASK_ACTIONS.DEL: {
      updatedTasks = tasks.filter((task) => task.id !== newTask.id);
      break;
    }
    default: {
      throw Error(`Unknown action:${action.type}`);
    }
  }
  return updatedTasks;
}

export { TASK_ACTIONS, TasksContext, TasksDispatchContext };
