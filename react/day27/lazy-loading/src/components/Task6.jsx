
import { useEffect, useReducer } from "react";

const initialState = {
  users: [],
  search: "",
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, users: action.payload, loading: false };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "SEARCH":
      return { ...state, search: action.payload };

    default:
      return state;
  }
};

export default function Task6() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchUsers = async () => {
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
          payload: "Unable to fetch users.",
        });
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = state.users.filter((user) =>
    user.name.toLowerCase().includes(state.search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="mb-5 text-2xl font-bold">Task 6: Search Users</h2>

      <input
        value={state.search}
        onChange={(e) =>
          dispatch({ type: "SEARCH", payload: e.target.value })
        }
        placeholder="Search users by name..."
        className="mb-6 w-full rounded-xl border p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

      {state.loading && <p className="text-blue-600">Loading users...</p>}

      {state.error && <p className="text-red-600">{state.error}</p>}

      {!state.loading && !state.error && filteredUsers.length === 0 && (
        <p className="rounded-lg bg-yellow-50 p-4 text-center text-gray-700">
          No Users Found
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="rounded-xl border p-5 hover:shadow-md"
          >
            <h3 className="font-bold">{user.name}</h3>
            <p className="mt-2 break-words text-sm text-gray-600">
              {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
