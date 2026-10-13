import { useState } from "react";

function EmployeeForm() {
  const [form, setForm] = useState({
    name: "",
    department: "",
    salary: ""
  });

  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.department || form.salary === "") return;

    if (editId !== null) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editId ? { ...emp, ...form } : emp
        )
      );
      setEditId(null);
    } else {
      setEmployees((prev) => [
        ...prev,
        { ...form, id: Date.now() }
      ]);
    }

    setForm({ name: "", department: "", salary: "" });
  };

  const handleEdit = (emp) => {
    setForm({
      name: emp.name,
      department: emp.department,
      salary: emp.salary
    });
    setEditId(emp.id);
  };

  const handleDelete = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    if (editId === id) {
      setEditId(null);
      setForm({ name: "", department: "", salary: "" });
    }
  };

  const inputStyle =
    "w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-500";

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-2xl font-bold text-blue-900 text-center">
        Employee Form
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-3">
        <input className={inputStyle} name="name" placeholder="Employee Name"
          value={form.name} onChange={handleChange} required />

        <input className={inputStyle} name="department" placeholder="Department"
          value={form.department} onChange={handleChange} required />

        <input className={inputStyle} type="number" min="0" name="salary"
          placeholder="Salary" value={form.salary}
          onChange={handleChange} required />

        <button className="rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700 sm:col-span-3">
          {editId !== null ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[500px] border-collapse text-left">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Department</th>
              <th className="p-3">Salary</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-b">
                <td className="p-3">{emp.name}</td>
                <td className="p-3">{emp.department}</td>
                <td className="p-3">{emp.salary}</td>
                <td className="space-x-2 p-3">
                  <button type="button"
                    onClick={() => handleEdit(emp)}
                    className="rounded bg-amber-500 px-3 py-1 text-white">
                    Edit
                  </button>
                  <button type="button"
                    onClick={() => handleDelete(emp.id)}
                    className="rounded bg-red-600 px-3 py-1 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {employees.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-slate-500">
                  No employees added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeForm;