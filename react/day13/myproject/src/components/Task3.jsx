
import { useState } from "react";

const Task3 = () => {
  const [user, setUser] = useState({
    name: "Rahul",
    age: 22,
    city: "Chennai",
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-5">
        Task 3: User Details
      </h2>

      <div className="bg-blue-50 rounded-xl p-4 mb-5 space-y-3">
        <p className="text-gray-700">
          Name: <span className="font-semibold text-blue-700">{user.name}</span>
        </p>
        <p className="text-gray-700">
          Age: <span className="font-semibold text-blue-700">{user.age}</span>
        </p>
        <p className="text-gray-700">
          City: <span className="font-semibold text-blue-700">{user.city}</span>
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => setUser({ ...user, name: "Arjun" })}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium"
        >
          Change Name
        </button>

        <button
          onClick={() => setUser({ ...user, age: user.age + 1 })}
          className="bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-lg font-medium"
        >
          Increase Age
        </button>

        <button
          onClick={() => setUser({ ...user, city: "Bangalore" })}
          className="bg-violet-600 hover:bg-violet-700 text-white py-2.5 rounded-lg font-medium"
        >
          Change City
        </button>
      </div>
    </div>
  );
};

export default Task3;
