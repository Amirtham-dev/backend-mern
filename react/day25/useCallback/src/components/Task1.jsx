import { useState, useMemo } from "react";

const calculateDouble = (number) => {
  console.log("Calculation running...");

  let result = number * 2;

  // Simulate an expensive calculation
  for (let i = 0; i < 1000000; i++) {
    result = number * 2;
  }

  return result;
};

const Task1 = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const result = useMemo(() => {
    return calculateDouble(number);
  }, [number]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="w-full max-w-md rounded-xl bg-white p-8 text-gray-900 shadow-lg">
        <h1 className="mb-5 text-2xl font-bold">
          Number Multiplication
        </h1>

        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="mb-4 w-full rounded-lg border p-3"
          placeholder="Enter a number"
        />

        <p className="mb-5 text-lg">
          Double: <strong>{result}</strong>
        </p>

        <button
          onClick={() => setDark(!dark)}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white"
        >
          {dark ? "Light Theme" : "Dark Theme"}
        </button>
      </div>
    </div>
  );
};

export default Task1;