
import { useEffect, useState } from "react";

function Task8() {
  const [employees, setEmployees] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("employees")) || [];
    } catch {
      return [];
    }
  });

  const [form, setForm] = useState({
    name: "",
    department: "",
    salary: "",
  });

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.department.trim() || !form.salary) {
      alert("Fill all fields");
      return;
    }

    if (editId !== null) {
      setEmployees((previous) =>
        previous.map((emp) =>
          emp.id === editId
            ? { ...emp, ...form, salary: Number(form.salary) }
            : emp
        )
      );
      setEditId(null);
    } else {
      setEmployees((previous) => [
        ...previous,
        {
          id: Date.now(),
          ...form,
          salary: Number(form.salary),
        },
      ]);
    }

    setForm({ name: "", department: "", salary: "" });
  };

  const editEmployee = (emp) => {
    setForm({
      name: emp.name,
      department: emp.department,
      salary: String(emp.salary),
    });
    setEditId(emp.id);
  };

  const deleteEmployee = (id) => {
    setEmployees((previous) =>
      previous.filter((emp) => emp.id !== id)
    );

    if (editId === id) {
      setEditId(null);
      setForm({ name: "", department: "", salary: "" });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <h2 className="text-xl font-bold mb-3">Employee CRUD</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border p-2 rounded"
          name="name"
          placeholder="Employee name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
        />

        <input
          className="border p-2 rounded"
          type="number"
          min="0"
          name="salary"
          placeholder="Salary"
          value={form.salary}
          onChange={handleChange}
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          {editId !== null ? "Update Employee" : "Add Employee"}
        </button>

        {editId !== null && (
          <button
            type="button"
            className="bg-gray-500 text-white p-2 rounded"
            onClick={() => {
              setEditId(null);
              setForm({ name: "", department: "", salary: "" });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      {employees.map((emp) => (
        <div key={emp.id} className="border p-3 rounded mt-3">
          <p>Name: {emp.name}</p>
          <p>Department: {emp.department}</p>
          <p>Salary: ₹{emp.salary}</p>

          <button
            className="bg-yellow-500 text-white p-2 rounded mr-2 mt-2"
            onClick={() => editEmployee(emp)}
          >
            Edit
          </button>

          <button
            className="bg-red-600 text-white p-2 rounded mt-2"
            onClick={() => deleteEmployee(emp.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Task8;
