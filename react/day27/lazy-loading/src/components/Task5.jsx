


import { useEffect, useReducer } from "react";

const initialState = {
  users: [],
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: "" };

    case "FETCH_SUCCESS":
      return { users: action.payload, loading: false, error: "" };

    case "FETCH_ERROR":
      return { users: [], loading: false, error: action.payload };

    default:
      return state;
  }
};

export default function Task5() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch({ type: "FETCH_START" });

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) throw new Error("Failed to fetch users");

        const data = await response.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch {
        dispatch({
          type: "FETCH_ERROR",
          payload: "Unable to fetch users. Please try again.",
        });
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold">Task 5: API Users</h2>

      {state.loading && (
        <p className="text-center font-semibold text-blue-600">
          Loading users...
        </p>
      )}

      {state.error && (
        <p className="rounded-lg bg-red-100 p-4 text-red-700">
          {state.error}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {state.users.map((user) => (
          <div
            key={user.id}
            className="rounded-xl border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
          >
            <h3 className="font-bold text-slate-800">{user.name}</h3>
            <p className="mt-2 break-words text-sm text-gray-600">
              {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
