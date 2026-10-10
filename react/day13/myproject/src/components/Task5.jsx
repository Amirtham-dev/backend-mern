
import { useState } from "react";

const Task5 = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Ravi", marks: 75, isPassed: true },
    { id: 2, name: "Priya", marks: 35, isPassed: false },
    { id: 3, name: "Kumar", marks: 90, isPassed: true },
  ]);

  const increaseMarks = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, marks: student.marks + 5 }
          : student
      )
    );
  };

  const toggleResult = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, isPassed: !student.isPassed }
          : student
      )
    );
  };

  const deleteStudent = (id) => {
    setStudents((prev) =>
      prev.filter((student) => student.id !== id)
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-5">
        Task 5: Student Management
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-lg font-bold">
                {student.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  {student.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Student ID: {student.id}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <p className="text-gray-600 text-sm">Marks</p>
              <p className="text-2xl font-bold text-gray-800">
                {student.marks}
              </p>

              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
                  student.isPassed
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {student.isPassed ? "Pass" : "Fail"}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => increaseMarks(student.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
              >
                + Increase Marks
              </button>

              <button
                onClick={() => toggleResult(student.id)}
                className="bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium transition"
              >
                Toggle Result
              </button>

              <button
                onClick={() => deleteStudent(student.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition"
              >
                Delete Student
              </button>
            </div>
          </div>
        ))}
      </div>

      {students.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          No students available.
        </p>
      )}
    </div>
  );
};

export default Task5;
