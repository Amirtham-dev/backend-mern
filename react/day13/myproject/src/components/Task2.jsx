
import { useState } from "react";

const Task2 = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-3">
        Task 2: Like Button
      </h2>

      <div className="bg-purple-50 p-4 rounded-xl mb-4">
        <h3 className="text-lg font-semibold text-purple-800">
          My Post
        </h3>
        <p className="text-gray-600 mt-1">
          Click the Like button!
        </p>
      </div>

      <button
        onClick={() => setIsLiked(!isLiked)}
        className={`px-5 py-2 rounded-lg font-semibold transition ${
          isLiked
            ? "bg-pink-100 text-pink-700"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {isLiked ? "Liked ❤️" : "Like"}
      </button>

      {isLiked && (
        <p className="mt-4 text-green-600 font-medium">
          You liked this post!
        </p>
      )}
    </div>
  );
};

export default Task2;
