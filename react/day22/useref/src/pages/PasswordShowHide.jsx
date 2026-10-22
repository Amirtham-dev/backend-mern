
import { useRef } from "react";

const PasswordShowHide = () => {
  const passwordRef = useRef(null);

  const showPassword = () => {
    passwordRef.current.type = "text";
  };

  const hidePassword = () => {
    passwordRef.current.type = "password";
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      
      <div className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <label className="mb-2 block font-medium text-gray-700">
          Password
        </label>

        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter your password"
          className="mb-5 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />

        <div className="flex gap-3">
          <button
            onClick={showPassword}
            className="flex-1 rounded-lg bg-green-600 px-4 py-3 text-white hover:bg-green-700"
          >
            Show
          </button>

          <button
            onClick={hidePassword}
            className="flex-1 rounded-lg bg-red-600 px-4 py-3 text-white hover:bg-red-700"
          >
            Hide
          </button>
        </div>
      </div>
    </main>
  );
};

export default PasswordShowHide;
