
import { useEffect, useState } from "react";

function Task7() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const cities = [...new Set(users.map((user) => user.address.city))];

  let result = [...users];

  result = result.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (city !== "All") {
    result = result.filter((user) => user.address.city === city);
  }

  result.sort((a, b) =>
    sortOrder === "asc" ? a.id - b.id : b.id - a.id
  );

  return (
    <div className="max-w-xl mx-auto p-5">
      <h2 className="text-xl font-bold mb-3">User Search</h2>

      <input
        className="border p-2 w-full mb-3 rounded"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-2 rounded mr-3"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="All">All Cities</option>
        {cities.map((cityName) => (
          <option key={cityName} value={cityName}>
            {cityName}
          </option>
        ))}
      </select>

      <select
        className="border p-2 rounded"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">ID Ascending</option>
        <option value="desc">ID Descending</option>
      </select>

      {result.map((user) => (
        <div key={user.id} className="border p-3 rounded mt-3">
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>City: {user.address.city}</p>
        </div>
      ))}

      {result.length === 0 && <p className="mt-3">No users found.</p>}
    </div>
  );
}

export default Task7;
