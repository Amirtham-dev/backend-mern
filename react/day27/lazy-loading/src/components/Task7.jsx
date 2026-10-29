
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];

    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};

export default function Task7() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    dispatch({
      type: "ADD",
      payload: { id: Date.now(), text: task.trim() },
    });

    setTask("");
  };

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold">Task 7: Todo Application</h2>

      <form onSubmit={addTask} className="mb-6 flex gap-3">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          className="min-w-0 flex-1 rounded-lg border p-3 outline-none focus:border-blue-500"
        />

        <button className="rounded-lg bg-blue-600 px-5 font-semibold text-white hover:bg-blue-700">
          Add
        </button>
      </form>

      <div className="mb-5 flex justify-between rounded-lg bg-blue-50 p-4">
        <span className="font-semibold">Total Tasks</span>
        <span className="font-bold text-blue-700">{todos.length}</span>
      </div>

      <div className="space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex flex-wrap items-center justify-between gap-3 rounded-xl border p-4"
          >
            <div>
              <p
                className={
                  todo.completed
                    ? "font-medium text-gray-400 line-through"
                    : "font-medium text-slate-800"
                }
              >
                {todo.text}
              </p>

              <span
                className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                  todo.completed
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {todo.completed ? "Completed" : "Pending"}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  dispatch({ type: "TOGGLE", payload: todo.id })
                }
                className="rounded-lg bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700"
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>

              <button
                onClick={() =>
                  dispatch({ type: "DELETE", payload: todo.id })
                }
                className="rounded-lg bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {todos.length === 0 && (
          <p className="rounded-lg bg-gray-50 p-5 text-center text-gray-500">
            No tasks yet. Add your first task!
          </p>
        )}
      </div>
    </div>
  );
}
