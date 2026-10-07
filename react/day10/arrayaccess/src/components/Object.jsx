import { useState } from "react";

function Object() {
  const [student, setStudent] = useState({
    name: "Arun",
    age: 22,
    course: "React"
  });

  const updateCourse = () => {
    setStudent({
      ...student,
      course: "MERN"
    });
  };

  const addCity = () => {
    setStudent({
      ...student,
      city: "Chennai"
    });
  };

  return (
    <div>
      <h2>Task 2 - Object</h2>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>

      <button onClick={updateCourse}>
        Update Course
      </button>

      <button onClick={addCity}>
        Add City
      </button>
    </div>
  );
}

export default Object;