
import { useState } from "react";

const Task1 = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-5">
        Task 1: Toggle Status
      </h2>

      <p className="text-gray-600 mb-4">
        Status:
        <span
          className={`ml-2 font-bold ${
            isOn ? "text-green-600" : "text-red-500"
          }`}
        >
          {isOn ? "ON" : "OFF"}
        </span>
      </p>

      <button
        onClick={() => setIsOn(!isOn)}
        className={`w-full py-3 rounded-lg text-white font-semibold transition ${
          isOn
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
};

export default Task1;
