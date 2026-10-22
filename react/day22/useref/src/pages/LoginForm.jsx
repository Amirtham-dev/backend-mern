
import { useRef } from "react";

const LoginForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const clearInputs = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-indigo-700">
          LOGIN FORM
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              onClick={() => nameRef.current.focus()}
              className="mb-2 block cursor-pointer font-semibold text-gray-700"
            >
              Name
            </label>

            <input
              type="text"
              ref={nameRef}
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <label
              onClick={() => emailRef.current.focus()}
              className="mb-2 block cursor-pointer font-semibold text-gray-700"
            >
              Email
            </label>

            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div className="flex gap-3 pt-3">
            <button
              type="button"
              onClick={clearInputs}
              className="w-1/2 rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-200"
            >
              Clear
            </button>

            <button
              type="submit"
              className="w-1/2 rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700 active:scale-95"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
