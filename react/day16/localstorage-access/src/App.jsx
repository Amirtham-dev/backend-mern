import { useState } from 'react';

const App = () => {

  const [data, setData] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handlechange = (e) => {
    const { name, value } = e.target;

    setData((p) => ({
      ...p,
      [name]: value
    }));
  };

  return (
    <>
      <form
        className="flex flex-col bg-blue-200 w-80 p-5 justify-center items-center gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="border-2 p-2"
          type="text"
          name="name"
          onChange={handlechange}
          value={data.name}
          placeholder="Enter your name"
        />

        <input
          className="border-2 p-2"
          type="number"
          name="age"
          onChange={handlechange}
          value={data.age}
          placeholder="Enter your age"
        />

        <input
          className="border-2 p-2"
          type="email"
          name="email"
          onChange={handlechange}
          value={data.email}
          placeholder="Enter your email"
        />

        <input
          className="bg-blue-600 text-white px-4 py-2 rounded"
          type="submit"
          value="Submit"
        />

      </form>

      <div className="mt-5 p-4">
        <h2>Name: {data.name}</h2>
        <h2>Age: {data.age}</h2>
        <h2>Email: {data.email}</h2>
      </div>
    </>
  );
};

export default App