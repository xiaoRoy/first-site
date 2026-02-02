import { useContext, useState } from "react";
import Icons from "./Icons";
import TodoProvider, {
  TodosContext,
  TodosDispatchContext,
  TODO_ACTION,
  TODO_FILTER_IDS,
} from "./TodosContext";
const classes = (...arr) => arr.filter(Boolean).join(" ");

function TodoFilterButton({ filter, currentFilter }) {
  const dispatch = useContext(TodosDispatchContext);
  const { id, label, icon: FilterIcon } = filter;
  const onFilterChanged = () =>
    dispatch({
      actionType: TODO_ACTION.FILTER,
      filterId: id,
    });
  const isCurrentFilter = currentFilter === id;
  const containerStyles = classes(
    "flex flex-1 items-center gap-2 px-4 py-2 transition-all rounded-lg justify-center min-w-0 cursor-pointer",
    isCurrentFilter
      ? "bg-todo-1 text-amber-500"
      : "text-slate-500 hover:text-slate-800"
  );
  const buttonStyles = classes(
    "text-[10px] tracking-wider transition-all font-bold uppercase whitespace-nowrap min-w-0 cursor-pointer",
    isCurrentFilter && "bg-todo-1 shadow-md scale-[1.02]"
  );
  return (
    <div className={containerStyles} onClick={onFilterChanged}>
      <FilterIcon></FilterIcon>
      <button className={buttonStyles}>{label}</button>
    </div>
  );
}

function Unread({ unreadCount }) {
  return (
    <div className="flex flex-col items-end pr-6 border-r border-slate-300">
      <span className="text-[9px] font-sans font-black uppercase tracking-widest text-slate-400 leading-none">
        Unread
      </span>
      <span className="text-2xl font-sans font-black text-amber-700 leading-none">
        {unreadCount}
      </span>
    </div>
  );
}

function TodoFilter({ unreadCount }) {
  const { filterId } = useContext(TodosContext);

  const filters = [
    { id: TODO_FILTER_IDS.ALL, label: "All Chapters", icon: Icons.Layers },
    { id: TODO_FILTER_IDS.ACTIVE, label: "In Progress", icon: Icons.Zap },
    {
      id: TODO_FILTER_IDS.COMPLETED,
      label: "Finished",
      icon: Icons.CheckCircle,
    },
  ];

  return (
    <nav className="mb-10 flex justify-center flex-wrap items-center gap-6">
      <Unread unreadCount={unreadCount}></Unread>
      <div className="flex bg-todo-2 rounded-xl shadow-inner border-slate-300/50 font-sans border p-1 gap-1">
        {filters.map((filter) => (
          <TodoFilterButton
            key={filter.id}
            filter={filter}
            currentFilter={filterId}
          ></TodoFilterButton>
        ))}
      </div>
    </nav>
  );
}

function TodoItem({ todoItem, index, onTodoDelete }) {
  const { completed, itemName } = todoItem;
  const containerStyles = classes(
    "group flex items-start gap-6 transition-all",
    completed && "opacity-40 grayscale-[0.5]"
  );

  const buttonCompletedStyles =
    "bg-amber-100 border-amber-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]";
  const buttonNotCompletedStyles =
    "bg-white border-slate-200 group-hover:border-amber-400 group-hover:scale-105";
  const buttonStyles = classes(
    "shadow-inner todo-button rounded-full flex items-center justify-center transition-all border",
    completed ? buttonCompletedStyles : buttonNotCompletedStyles
  );

  const itemStyles = classes(
    "text-2xl font-medium leading-tight",
    completed && "line-through decoration-amber-600/30"
  );
  const internalOnTodoDelete = () => onTodoDelete(todoItem);
  return (
    <div className={containerStyles}>
      <div className="shrink-0 relative">
        <button className={buttonStyles}>
          {completed ? (
            <div className="text-amber-600">
              <Icons.Trophy></Icons.Trophy>
            </div>
          ) : (
            <span className="text-sm font-sans font-black text-slate-400 group-hover:text-amber-600">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </button>

        {!completed && (
          <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 text-slate-300 scale-90">
            <Icons.BookOpen>
              No entries found in this section of the anthology.
            </Icons.BookOpen>
          </div>
        )}
      </div>

      <div className="flex-1 pt-3">
        <div className="flex justify-between items-start border-b border-slate-200/50 pb-5">
          <p className={itemStyles}>{itemName}</p>
          <button
            className="opacity-0 group-hover:opacity-100 p-1 text-slate-300 hover:text-rose-500 transition-all"
            onClick={internalOnTodoDelete}
          >
            <Icons.Trash></Icons.Trash>
          </button>
        </div>
      </div>
    </div>
  );
}

function TodoList({ todoList, onTodoDelete }) {
  const hasTodos = todoList?.length > 0;
  return (
    <div className="space-y-8">
      {hasTodos ? (
        todoList.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todoItem={todo}
            index={index}
            onTodoDelete={onTodoDelete}
          ></TodoItem>
        ))
      ) : (
        <div className="text-center py-20 border-2 border-dashed rounded-3xl border-slate-300/30">
          <p className="text-slate-400 italic">
            No entries found in this section of the anthology.
          </p>
        </div>
      )}
    </div>
  );
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

function TodoInput() {
  return (
    <form className="flex gap-4 items-center group">
      <div className="todo-button rounded-full bg-todo-1 flex items-center justify-center text-white shrink-0 shadow-xl group-focus-within:scale-110 transition-transform border-amber-600/30">
        <Icons.Plus></Icons.Plus>
      </div>
      <input
        type="text"
        placeholder="Next Mile, next page.."
        className="flex-1 bg-transparent border-b border-slate-300 py-3 text-2xl focus:outline-none focus:border-amber-700 transition-colors todo-placeholder"
      />
    </form>
  );
}

function TodoListMain({ todoList, onTodoDelete }) {
  return (
    <div className="relative">
      <div className="absolute left-0  w-14 top-0 bottom-0">
        <div className="absolute left-1/2 w-[1px] -translate-x-1/2 h-full bg-slate-300"></div>
      </div>
      <main className="space-y-10 relative z-10">
        <TodoInput></TodoInput>
        <TodoList todoList={todoList} onTodoDelete={onTodoDelete}></TodoList>
      </main>
    </div>
  );
}

function TodoMainSection() {
  const { filterId, todoList } = useContext(TodosContext);
  // const [filterId, setFilterId] = useState(TODO_FILTER_IDS.ALL);
  // const [todoList, setTodoList] = useState(FAKE_TODOS);
  const filerAction = {
    [TODO_FILTER_IDS.ALL]: (todo) => true,
    [TODO_FILTER_IDS.ACTIVE]: (todo) => !todo.completed,
    [TODO_FILTER_IDS.COMPLETED]: (todo) => todo.completed,
  };
  const todoResult = todoList.filter(filerAction[filterId]);

  const activeCount = todoList.filter((todo) => !todo.completed).length;

  const onTodoDelete = (deletedTodo) => {
    const result = todoList.filter((todo) => deletedTodo.id !== todo.id);
  };
  return (
    <div className="bg-amber-300 min-h-screen bg-todo-main text-todo-1 font-serif selection:bg-orange-100 overflow-hidden">
      <div className="max-w-xl mx-auto px-6 py-12 min-h-full flex flex-col ">
        <TodoFilter unreadCount={activeCount}></TodoFilter>
        <TodoListMain
          todoList={todoResult}
          onTodoDelete={onTodoDelete}
        ></TodoListMain>
      </div>
    </div>
  );
}

export default function TodoAppDemo() {
  return (
    <TodoProvider initTodos={FAKE_TODOS}>
      <TodoMainSection></TodoMainSection>
    </TodoProvider>
  );
}
