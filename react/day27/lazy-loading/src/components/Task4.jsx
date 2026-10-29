
import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  course: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, [action.field]: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default function Task4() {
  const [student, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-center text-2xl font-bold">
        Task 4: Student Registration
      </h2>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <input
          value={student.name}
          onChange={(e) =>
            dispatch({
              type: "UPDATE",
              field: "name",
              payload: e.target.value,
            })
          }
          placeholder="Student Name"
          className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
        />

        <input
          type="email"
          value={student.email}
          onChange={(e) =>
            dispatch({
              type: "UPDATE",
              field: "email",
              payload: e.target.value,
            })
          }
          placeholder="Email Address"
          className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
        />

        <input
          value={student.course}
          onChange={(e) =>
            dispatch({
              type: "UPDATE",
              field: "course",
              payload: e.target.value,
            })
          }
          placeholder="Course"
          className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
        />

        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
          className="w-full rounded-lg bg-red-600 p-3 font-semibold text-white hover:bg-red-700"
        >
          Reset Form
        </button>
      </form>

      <div className="mt-6 rounded-xl bg-blue-50 p-5">
        <h3 className="mb-3 text-lg font-bold text-blue-800">
          Student Details
        </h3>
        <p className="mb-2">Name: {student.name || "Not entered"}</p>
        <p className="mb-2">Email: {student.email || "Not entered"}</p>
        <p>Course: {student.course || "Not entered"}</p>
      </div>
    </div>
  );
}
