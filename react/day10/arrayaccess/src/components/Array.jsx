import { useState } from "react";

function Array() {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  const addReact = () => {
    setSkills([...skills, "React"]);
  };

  const updateJavaScript = () => {
    setSkills(
      skills.map((skill) =>
        skill === "JavaScript"
          ? "Advanced JavaScript"
          : skill
      )
    );
  };

  return (
    <div>
      <h2>Task 1 - Array</h2>

      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}

      <button onClick={addReact}>
        Add React
      </button>

      <button onClick={updateJavaScript}>
        Update JavaScript
      </button>
    </div>
  );
}

export default Array;