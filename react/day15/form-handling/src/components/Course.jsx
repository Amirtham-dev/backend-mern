import { useState } from "react";

function Course() {
  const [form, setForm] = useState({
    name: "",
    trainer: "",
    duration: ""
  });

  const [courses, setCourses] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.trainer || !form.duration) return;

    setCourses((prev) => [
      ...prev,
      { ...form, id: Date.now() }
    ]);

    setForm({ name: "", trainer: "", duration: "" });
  };

  const inputStyle =
    "w-full rounded-lg border border-slate-300 p-3 focus:border-violet-500 focus:outline-none";

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-5 text-2xl font-bold text-violet-800 text-center">
        Course Form
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-3">
        <input className={inputStyle} name="name" placeholder="Course Name"
          value={form.name} onChange={handleChange} required />

        <input className={inputStyle} name="trainer" placeholder="Trainer Name"
          value={form.trainer} onChange={handleChange} required />

        <input className={inputStyle} name="duration" placeholder="Duration (e.g. 3 months)"
          value={form.duration} onChange={handleChange} required />

        <button className="rounded-lg bg-violet-600 p-3 font-semibold text-white hover:bg-violet-700 sm:col-span-3">
          Add Course
        </button>
      </form>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[450px] text-left">
          <thead className="bg-violet-100">
            <tr>
              <th className="p-3">Course</th>
              <th className="p-3">Trainer</th>
              <th className="p-3">Duration</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="border-b">
                <td className="p-3">{course.name}</td>
                <td className="p-3">{course.trainer}</td>
                <td className="p-3">{course.duration}</td>
              </tr>
            ))}
            {courses.length === 0 && (
              <tr>
                <td colSpan="3" className="p-4 text-center text-slate-500">
                  No courses added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Course;