
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

export default function Task1() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">
      <h2 className="text-2xl font-bold text-slate-800">
        Task 1: Counter
      </h2>

      <p className="my-8 text-6xl font-bold text-blue-600">{count}</p>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
        >
          + Increment
        </button>

        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="rounded-lg bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
        >
          − Decrement
        </button>

        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="rounded-lg bg-slate-700 px-5 py-3 font-semibold text-white hover:bg-slate-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
