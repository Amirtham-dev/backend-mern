
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};

export default function Task3() {
  const [show, dispatch] = useReducer(reducer, false);

  return (
    <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-center text-2xl font-bold">
        Task 3: Password Visibility
      </h2>

      <label className="mb-2 block font-medium">Password</label>

      <input
        type={show ? "text" : "password"}
        placeholder="Enter your password"
        className="mb-5 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />

      <button
        onClick={() => dispatch({ type: "TOGGLE" })}
        className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
      >
        {show ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}
