import { useState } from "react";
import "./styles/tasks.css";

function AddTask({ onTaskAdded }) {
  const [task, setTask] = useState(null);
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

  const internalOnTaskAdded = (event) => {
    onTaskAdded(task);
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
          onClick={internalOnTaskAdded}
        />
      </label>
    </div>
  );
}



function TaskItem({ task, onTaskChanged }) {
  const TASK_NAMES = {
    name: "task-name",
    completed: "task-completed",
  };
  const taskNameToField = {
    [TASK_NAMES.name]: "name",
    [TASK_NAMES.completed]: "isCompleted",
  };
  let taskName = task.name;
  const [isEditing, setEditing] = useState(false);

  const internalOnTaskChanged = (event) => {
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
      onTaskChanged(updatedTask);
    } else {
      throw new Error(`No such field named ${fieldOfTask}in class Task.`);
    }
  };
  const onEditOrSaveClicked = (event) => {
    setEditing((value) => !value);

    if (isEditing) {
    }
  };

  const onTaskNameChanged = (event) => {
    taskName = event.target.value;
  };

  const EditingTask = (
    <label htmlFor="task-editing" className="task-editing">
      <input
        type="text"
        value={taskName}
        id="task-editing"
        name={TASK_NAMES.name}
        onChange={onTaskNameChanged}
      />
    </label>
  );

  const DisplayingTask = <span className="task-name"> {task.name}</span>;

  const editingTaskState = {
    component: EditingTask,
    copy: "Save",
  };

  const displayingTaskState = {
    component: DisplayingTask,
    copy: "Edit",
  };
  const taskState = isEditing ? editingTaskState : displayingTaskState;

  const onAbortClicked = () => setEditing(false);
  return (
    <div>
      <label htmlFor="task-completed" className="task-completed-check-box">
        <input
          type="checkbox"
          id="task-completed"
          name={TASK_NAMES.completed}
          checked={task.isCompleted}
          onChange={internalOnTaskChanged}
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
      ></input>
    </div>
  );
}

function TaskList({ tasks, onTaskChanged }) {
  const internalOnTaskChanged = (task) => {
    onTaskChanged(task);
  };
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          onTaskChanged={internalOnTaskChanged}
        ></TaskItem>
      ))}
    </div>
  );
}

function TasksManager() {
  const [taskList, setTaskList] = useState(TASK_LIST);
  const onTaskAdded = (addedTask) => {
    const updatedTasks = Array.from(taskList);
    updatedTasks.push(addedTask);
    setTaskList(updatedTasks);
  };

  const onTaskChanged = (updatedTask) => {
    const updatedTasks = taskList.map((task) => {
      let result;
      if (task.id === updatedTask.id) {
        result = updatedTask;
      } else {
        result = task;
      }
      return result;
    });
    setTaskList(updatedTasks);
  };
  return (
    <div>
      <h1>Task manager</h1>
      <AddTask onTaskAdded={onTaskAdded}></AddTask>
      <TaskList tasks={taskList} onTaskChanged={onTaskChanged}></TaskList>
    </div>
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
