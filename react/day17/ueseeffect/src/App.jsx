
import { useState, useEffect } from "react";

const App = () => {
  // Task 1: Digital Timer
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setCount((p) => p + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };

  // Task 2: Automatic Welcome Message
  const [message, setMessage] = useState("Please Wait...");
  const [restart, setRestart] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Welcome to React!");
    }, 3000);

    return () => clearTimeout(timer);
  }, [restart]);

  const handleRestart = () => {
    setMessage("Please Wait...");
    setRestart((p) => p + 1);
  };

  // Task 3: Local Storage
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("userData");

    return savedData
      ? JSON.parse(savedData)
      : { name: "", age: "", email: "" };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userData", JSON.stringify(data));
    alert("Data saved successfully!");
  };

  const handleClear = () => {
    localStorage.removeItem("userData");

    setData({
      name: "",
      age: "",
      email: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        React Practice Tasks
      </h1>

      <div className="flex flex-wrap justify-center items-start gap-6">

        {/* Task 1: Digital Timer */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
          <h2 className="text-2xl font-bold mb-5">
            Digital Timer
          </h2>

          <p className="text-5xl font-bold text-blue-600 mb-6">
            {count}s
          </p>

          <div className="flex justify-center gap-2">
            <button
              onClick={handleStart}
              className="bg-green-500 text-white px-3 py-2 rounded"
            >
              Start
            </button>

            <button
              onClick={handleStop}
              className="bg-red-500 text-white px-3 py-2 rounded"
            >
              Stop
            </button>

            <button
              onClick={handleReset}
              className="bg-gray-600 text-white px-3 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Task 2: Welcome Message */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center">
          <h2 className="text-2xl font-bold mb-5">
            Welcome Application
          </h2>

          <p className="text-lg text-blue-600 font-semibold mb-6">
            {message}
          </p>

          <button
            onClick={handleRestart}
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Restart
          </button>
        </div>

        {/* Task 3: Local Storage Form */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-80">
          <h2 className="text-2xl font-bold text-center mb-5">
            User Details
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={data.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded w-full"
            />

            <input
              type="number"
              name="age"
              placeholder="Enter age"
              value={data.age}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={data.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded w-full"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded"
            >
              Save Data
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="bg-red-500 text-white p-2 rounded"
            >
              Clear Data
            </button>
          </form>

          <div className="mt-5 bg-gray-100 p-3 rounded ">
            <h3 className="font-bold mb-2">Saved Details</h3>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>Email: {data.email}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
