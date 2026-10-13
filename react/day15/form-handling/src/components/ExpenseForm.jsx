import { useState } from "react";

function ExpenseForm() {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: ""
  });

  const [expenses, setExpenses] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || form.amount === "" || !form.category) return;

    if (editId !== null) {
      setExpenses((prev) =>
        prev.map((expense) =>
          expense.id === editId ? { ...expense, ...form } : expense
        )
      );
      setEditId(null);
    } else {
      setExpenses((prev) => [
        ...prev,
        { ...form, id: Date.now() }
      ]);
    }

    setForm({ title: "", amount: "", category: "" });
  };

  const handleEdit = (expense) => {
    setForm({
      title: expense.title,
      amount: expense.amount,
      category: expense.category
    });
    setEditId(expense.id);
  };

  const handleDelete = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));

    if (editId === id) {
      setEditId(null);
      setForm({ title: "", amount: "", category: "" });
    }
  };

  const inputStyle =
    "w-full rounded-lg border border-slate-300 p-3 focus:border-orange-500 focus:outline-none";

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-2xl font-bold text-orange-700 text-center">
        Expense Form
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-3">
        <input className={inputStyle} name="title" placeholder="Expense Title"
          value={form.title} onChange={handleChange} required />

        <input className={inputStyle} type="number" min="0" name="amount"
          placeholder="Amount" value={form.amount}
          onChange={handleChange} required />

        <select className={inputStyle} name="category"
          value={form.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>

        <button className="rounded-lg bg-orange-600 p-3 font-semibold text-white hover:bg-orange-700 sm:col-span-3">
          {editId !== null ? "Update Expense" : "Add Expense"}
        </button>
      </form>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[500px] text-left">
          <thead className="bg-orange-100">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Category</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b">
                <td className="p-3">{expense.title}</td>
                <td className="p-3">₹{expense.amount}</td>
                <td className="p-3">{expense.category}</td>
                <td className="space-x-2 p-3">
                  <button type="button" onClick={() => handleEdit(expense)}
                    className="rounded bg-amber-500 px-3 py-1 text-white">
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(expense.id)}
                    className="rounded bg-red-600 px-3 py-1 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {expenses.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-slate-500">
                  No expenses added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseForm;