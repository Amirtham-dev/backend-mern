import React from "react";

const App = () => {

  const studentName = "Arun";
  const age = 22;
  const course = "React";
  const fees = 15000;

  return (
    <div>
      <h1>Student Details</h1>

      <h2>Student Name: {studentName}</h2>

      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>Fees: {fees}</p>
    </div>
  );
};

export default App;