const Login = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">LOGIN FORM</h1>
      <form className="flex flex-col gap-3">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" placeholder="Enter your name" className="rounded border px-3 py-2" />
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" placeholder="Enter your email" className="rounded border px-3 py-2" />
        <button type="submit" className="rounded bg-green-600 p-2 text-white">Submit</button>
      </form>
    </div>
  );
};

export default Login;
