
import React, { useState, useEffect } from "react";

const Easy = () => {
  // Task 1: Fetch API states
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Task 2: Timer states
  const [showMessage, setShowMessage] = useState(false);

  // Task 3: Form handling states
  const [data, setData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  // Task 4: Count state
  const [count, setCount] = useState(0);

  // Fetch users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        alert("Failed to fetch users");
      });
  }, []);

  // Timer with cleanup
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Case-insensitive search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Form input handling
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.age) {
      setError("Please fill all fields");
      setSubmittedData(null);
      return;
    }

    setError("");
    setSubmittedData({ ...data });
  };

  // Count button
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  // Task 1: Second largest number
  const arr = [10, 45, 20, 45, 30];

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (
      arr[i] > secondLargest &&
      arr[i] < largest
    ) {
      secondLargest = arr[i];
    }
  }

  // Task 2: Remove duplicates
  const arr2 = [1, 2, 2, 3, 4, 4, 5];
  let removeDuplicate = [];

  for (let i = 0; i < arr2.length; i++) {
    if (!removeDuplicate.includes(arr2[i])) {
      removeDuplicate.push(arr2[i]);
    }
  }

  // Task 3: Character frequency
  const charString = "banana";
  let charCount = {};

  for (let i = 0; i < charString.length; i++) {
    let char = charString[i];

    if (charCount[char]) {
      charCount[char] = charCount[char] + 1;
    } else {
      charCount[char] = 1;
    }
  }

  // Task 4: Employee salary filter
  const employees = [
    { id: 1, name: "Arun", salary: 25000 },
    { id: 2, name: "Priya", salary: 35000 },
    { id: 3, name: "Kumar", salary: 40000 },
    { id: 4, name: "Bala", salary: 30000 },
    { id: 5, name: "Divya", salary: 45000 }
  ];

  const filteredEmployees = employees.filter(
    (emp) => emp.salary > 30000
  );

  let totalSalary = 0;

  for (let i = 0; i < filteredEmployees.length; i++) {
    totalSalary += filteredEmployees[i].salary;
  }

  // Task 5: Reverse words without reverse()
  const sentence = "I love JavaScript";
  const words = sentence.split(" ");
  let reversed = "";

  for (let i = words.length - 1; i >= 0; i--) {
    reversed = reversed + words[i] + " ";
  }

  reversed = reversed.trim();

  return (
    <div className="space-y-8 p-6">

      {/* JavaScript Tasks */}
      <section className="space-y-3 rounded bg-gray-100 p-5">
        <h1 className="text-xl font-bold">
          Second Largest Number
        </h1>
        <p>{secondLargest}</p>

        <hr />

        <h1 className="text-xl font-bold">
          Remove Duplicates
        </h1>
        <p>{removeDuplicate.join(", ")}</p>

        <hr />

        <h1 className="text-xl font-bold">
          Character Frequency
        </h1>
        <p>{JSON.stringify(charCount)}</p>

        <hr />

        <h1 className="text-xl font-bold">
          Employee Salary Filter
        </h1>

        {filteredEmployees.map((emp) => (
          <p key={emp.id}>
            {emp.name} - ₹{emp.salary}
          </p>
        ))}

        <h3 className="font-bold">
          Total Salary: ₹{totalSalary}
        </h3>

        <hr />

        <h1 className="text-xl font-bold">Reverse Words</h1>
        <p>Original: {sentence}</p>
        <p>Reversed: {reversed}</p>
      </section>

      {/* Count Task */}
      <section className="rounded bg-blue-50 p-5">
        <h1 className="text-xl font-bold">Count: {count}</h1>

        <button
          className="mt-3 rounded bg-blue-500 px-4 py-2 text-white"
          onClick={handleClick}
        >
          Increment
        </button>
      </section>

      {/* Form Handling */}
      <section className="mx-auto max-w-sm rounded bg-gray-100 p-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded bg-white p-5 shadow"
        >
          <h1 className="text-center text-2xl font-bold">
            Student Form
          </h1>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={data.name}
            onChange={handleChange}
            className="rounded border p-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={data.email}
            onChange={handleChange}
            className="rounded border p-2"
          />

          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={data.age}
            onChange={handleChange}
            className="rounded border p-2"
          />

          <button
            type="submit"
            className="rounded bg-blue-600 p-2 text-white"
          >
            Submit
          </button>

          {error && (
            <p className="text-red-500">{error}</p>
          )}
        </form>

        {submittedData && (
          <div className="mt-4 rounded bg-white p-4 shadow">
            <h2 className="mb-2 text-xl font-bold">
              Entered Details
            </h2>

            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Age: {submittedData.age}</p>

            <pre className="mt-3 overflow-auto rounded bg-gray-200 p-3">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
          </div>
        )}
      </section>

      {/* Fetch API Search */}
      <section className="mx-auto max-w-lg rounded bg-gray-100 p-5">
        <h1 className="mb-4 text-2xl font-bold">
          User Search
        </h1>

        <input
          type="text"
          placeholder="Search user name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded border p-2"
        />

        {loading ? (
          <p className="mt-4">Loading users...</p>
        ) : (
          <ul className="mt-4 space-y-2">
            {filteredUsers.map((user) => (
              <li
                key={user.id}
                className="rounded bg-white p-3 shadow-sm"
              >
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-600">
                  {user.email}
                </p>
              </li>
            ))}
          </ul>
        )}

        {!loading && filteredUsers.length === 0 && (
          <p className="mt-3 text-red-500">
            No users found
          </p>
        )}
      </section>

      {/* Timer Task */}
      <section className="rounded bg-green-50 p-5 text-center">
        <h1 className="mb-3 text-xl font-bold">
          Welcome Application
        </h1>

        {showMessage ? (
          <p className="rounded bg-green-500 p-4 text-white">
            Welcome to React!
          </p>
        ) : (
          <p>Please wait 3 seconds...</p>
        )}
      </section>

    </div>
  );
};

export default Easy;
