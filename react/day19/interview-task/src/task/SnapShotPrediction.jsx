
import { useState } from "react";

function task6() {
  const [students, setStudents] = useState(["Arun"]);

  const addStudent = () => {
    const newStudent = "Priya";

    const newStudents = [...students, newStudent];

    setStudents(newStudents);

    console.log("Old Array:", students);
    console.log("New Array:", newStudents);
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">State Snapshot</h2>

      {students.map((student, index) => (
        <p key={index}>{student}</p>
      ))}

      <button
        onClick={addStudent}
        className="bg-blue-600 text-white p-2 rounded mt-3"
      >
        Add Student
      </button>
    </div>
  );
}

export default Task6;
