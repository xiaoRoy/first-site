import { useReducer, useState } from "react";
import "./styles/tasks.css";

import { useContext } from "react";
import TasksProvider, {
  TasksContext,
  TasksDispatchContext,
  TASK_ACTIONS,
} from "./TasksContext";

function AddTask() {
  const [task, setTask] = useState(null);
  const dispatch = useContext(TasksDispatchContext);
  const onTaskChanged = (event) => {
    const taskName = event.target.value;
    let updatedTask;
    if (task) {
      updatedTask = task.copy();
      updatedTask.name = taskName;
    } else {
      updatedTask = Task.generate(taskName);
    }
    setTask(updatedTask);
  };

  const onTaskAdded = (event) => {
    dispatch({
      task: task,
      type: TASK_ACTIONS.ADD,
    });
    setTask(null);
  };
  return (
    <div className="add-task">
      <label htmlFor="add-task-input">
        <input
          type="text"
          id="add-task-input"
          placeholder="Add task"
          value={task ? task.name : ""}
          onChange={onTaskChanged}
        ></input>
      </label>

      <label htmlFor="add-task-button">
        <input
          type="button"
          value="Add"
          id="add-task-button"
          onClick={onTaskAdded}
        />
      </label>
    </div>
  );
}

function TaskItem({ task }) {
  const TASK_NAMES = {
    name: "task-name",
    completed: "task-completed",
  };
  const taskNameToField = {
    [TASK_NAMES.name]: "name",
    [TASK_NAMES.completed]: "isCompleted",
  };

  const [isEditing, setEditing] = useState(false);
  const [draftTask, setDraftTask] = useState(task.copy());

  const dispatch = useContext(TasksDispatchContext);

  const onTaskChanged = (event) => {
    const updatedTask = task.copy();
    const target = event.target;

    const name = target.name;
    const fieldOfTask = taskNameToField[name];
    if (fieldOfTask) {
      let updatedValue;
      if (target.type === "checkbox") {
        updatedValue = target.checked;
      } else {
        updatedValue = target.value;
      }
      updatedTask[fieldOfTask] = updatedValue;
      dispatch({
        task: updatedTask,
        type: TASK_ACTIONS.EDIT,
      });
    } else {
      throw new Error(`No such field named ${fieldOfTask}in class Task.`);
    }
  };
  const onEditOrSaveClicked = (event) => {
    setEditing((value) => !value);

    if (isEditing) {
      dispatch({
        task: draftTask,
        type: TASK_ACTIONS.EDIT,
      });
    }
  };

  const onTaskNameChanged = (event) => {
    const updatedTaskName = event.target.value;
    const updatedDraftTask = draftTask.copy();
    updatedDraftTask.name = updatedTaskName;
    setDraftTask(updatedDraftTask);
  };

  const EditingTask = (
    <label htmlFor="task-editing" className="task-editing">
      <input
        type="text"
        value={draftTask.name}
        id="task-editing"
        name={TASK_NAMES.name}
        onChange={onTaskNameChanged}
      />
    </label>
  );

  const DisplayingTask = <span className="task-name"> {draftTask.name}</span>;

  const editingTaskState = {
    component: EditingTask,
    copy: "Save",
  };

  const displayingTaskState = {
    component: DisplayingTask,
    copy: "Edit",
  };
  const taskState = isEditing ? editingTaskState : displayingTaskState;

  const onAbortClicked = () => {
    setEditing(false);
    setDraftTask(task.copy());
  };

  const onTaskDeleted = () => {
    dispatch({ task: draftTask, type: TASK_ACTIONS.DEL });
  };

  return (
    <div>
      <label htmlFor="task-completed" className="task-completed-check-box">
        <input
          type="checkbox"
          id="task-completed"
          name={TASK_NAMES.completed}
          checked={task.isCompleted}
          onChange={onTaskChanged}
        />
      </label>
      {taskState.component}
      <input
        className="task-item-button"
        type="button"
        name="edit-save-task"
        id="edit-save-task"
        value={taskState.copy}
        onClick={onEditOrSaveClicked}
      />

      {isEditing && (
        <input
          className="task-item-button"
          type="button"
          name="abort"
          value="abort"
          onClick={onAbortClicked}
        ></input>
      )}

      <input
        className="task-item-button"
        type="button"
        name="delete-task"
        id="delete-task"
        value="Delete"
        onClick={onTaskDeleted}
      ></input>
    </div>
  );
}

function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id}></TaskItem>
      ))}
    </div>
  );
}

function TasksManager() {
  return (
    <TasksProvider initialTasks={TASK_LIST}>
      <div>
        <h1>Task manager</h1>
        <AddTask></AddTask>
        <TaskList></TaskList>
      </div>
    </TasksProvider>
  );
}

// DATA

class Task {
  constructor(id, name, isCompleted = false) {
    this.id = id;
    this.name = name;
    this.isCompleted = isCompleted;
  }

  copy() {
    return new Task(this.id, this.name, this.isCompleted);
  }

  static idCounter = 1;

  static EMPTY = new Task(0, "");

  static generate(name, isCompleted = false) {
    return new Task(Task.idCounter++, name, isCompleted);
  }
}

const TASK_LIST = [
  Task.generate("Running", true),
  Task.generate("Get a good job."),
  Task.generate("buy a house"),
];

export default function TasksManagerDemo() {
  return <TasksManager></TasksManager>;
}
