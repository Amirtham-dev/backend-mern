import { useState } from "react";

function StudentMarksForm() {
  const [form, setForm] = useState({
    name: "",
    tamil: "",
    english: "",
    maths: ""
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      form.tamil === "" ||
      form.english === "" ||
      form.maths === ""
    ) return;

    const tamil = Number(form.tamil);
    const english = Number(form.english);
    const maths = Number(form.maths);

    if (
      [tamil, english, maths].some(
        (mark) => !Number.isInteger(mark) || mark < 0 || mark > 100
      )
    ) return;

    setStudents((prev) => [
      ...prev,
      {
        ...form,
        id: Date.now(),
        total: tamil + english + maths
      }
    ]);

    setForm({
      name: "",
      tamil: "",
      english: "",
      maths: ""
    });
  };

  const inputStyle =
    "w-full rounded-lg border border-slate-300 p-3 focus:border-cyan-500 focus:outline-none";

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-2xl font-bold text-cyan-800 text-center">
        Student Marks Form
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <input className={inputStyle} name="name" placeholder="Student Name"
          value={form.name} onChange={handleChange} required />

        <input className={inputStyle} type="number" name="tamil"
          placeholder="Tamil Marks (0-100)" min="0" max="100"
          value={form.tamil} onChange={handleChange} required />

        <input className={inputStyle} type="number" name="english"
          placeholder="English Marks (0-100)" min="0" max="100"
          value={form.english} onChange={handleChange} required />

        <input className={inputStyle} type="number" name="maths"
          placeholder="Maths Marks (0-100)" min="0" max="100"
          value={form.maths} onChange={handleChange} required />

        <button className="rounded-lg bg-cyan-700 p-3 font-semibold text-white hover:bg-cyan-800 sm:col-span-2">
          Add Student
        </button>
      </form>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[550px] text-left">
          <thead className="bg-cyan-100">
            <tr>
              <th className="p-3">Student</th>
              <th className="p-3">Tamil</th>
              <th className="p-3">English</th>
              <th className="p-3">Maths</th>
              <th className="p-3">Total / 300</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.tamil}</td>
                <td className="p-3">{student.english}</td>
                <td className="p-3">{student.maths}</td>
                <td className="p-3 font-bold text-cyan-800">
                  {student.total}
                </td>
              </tr>
            ))}
            {students.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-slate-500">
                  No students added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentMarksForm;