const PrimitiveData = () => {

  const studentDetails = {
    studentName: "Arun",
    age: 22,
    course: "React",
    fees: 15000
  };

  const students = [
    { id: 1, name: "Arun", course: "React" },
    { id: 2, name: "Priya", course: "Node" },
    { id: 3, name: "Kumar", course: "MongoDB" }
  ];

  const skills = ["HTML", "CSS", "JavaScript", "React", "Node"];

  return (
    <div>

      {/* Student Details */}
      <div>
        <h1 className="text-2xl font-bold">Student Details</h1>

        <h2 className="font-semibold">
          Student Name: {studentDetails.studentName}
        </h2>

        <p>Age: {studentDetails.age}</p>
        <p>Course: {studentDetails.course}</p>
        <p>Fees: {studentDetails.fees}</p>
      </div>

      {/* Skills */}
      <div className="bg-pink-200 gap-1.5">
        <h2 className="font-medium">Skills:</h2>

        <ul>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>

      {/* Students Array of Objects */}
      <div>
        <h1>Student Details</h1>

        {students.map((student) => (
          <div key={student.id}>
            <h2>Name: {student.name}</h2>
            <p>Course: {student.course}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PrimitiveData;