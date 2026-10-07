import { useState } from "react";

function Toggle() {
  const [show, setShow] = useState(false);

  const toggleDetails = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <h2>Task 3 - Toggle</h2>

      <button onClick={toggleDetails}>
        {show ? "Hide Details" : "Show Details"}
      </button>

      {show ? (
        <div>
          <h3>Student Details</h3>
          <p>Name: Arun</p>
          <p>Age: 22</p>
          <p>Course: React</p>
        </div>
      ) : null}
    </div>
  );
}

export default Toggle;