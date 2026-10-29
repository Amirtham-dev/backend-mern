  
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.payload;
    case "SUBTRACT":
      return state - action.payload;
    case "RESET":
      return 10;
    default:
      return state;
  }
};

export default function Task2() {
  const [count, dispatch] = useReducer(reducer, 10);

  return (
    <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">
      <h2 className="text-2xl font-bold">Task 2: Custom Counter</h2>

      <p className="my-8 text-6xl font-bold text-purple-600">{count}</p>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => dispatch({ type: "ADD", payload: 5 })}
          className="rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
        >
          Add 5
        </button>

        <button
          onClick={() => dispatch({ type: "ADD", payload: 10 })}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          Add 10
        </button>

        <button
          onClick={() => dispatch({ type: "SUBTRACT", payload: 5 })}
          className="rounded-lg bg-red-600 px-5 py-3 text-white hover:bg-red-700"
        >
          Subtract 5
        </button>

        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="rounded-lg bg-slate-700 px-5 py-3 text-white hover:bg-slate-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
