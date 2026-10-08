import { useState } from "react";

const ShowPassword = () => {
  const [password] = useState("react123");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center gap-5">

      <h1 className="text-3xl font-bold text-black mb-5">
        SHOW PASSWORD
      </h1>

      <div className="bg-white w-80 p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4">

        <h2 className="text-xl font-semibold">
          Password:
        </h2>

        <p className="text-lg font-bold text-gray-700">
          {showPassword ? password : "••••••••"}
        </p>

        <button
          onClick={togglePassword}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600"
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>

      </div>
    </div>
  );
};

export default ShowPassword;