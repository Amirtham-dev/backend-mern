
import { useEffect, useState } from "react";

const RaceConditionSearch = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!search.trim()) {
      setUsers([]);
      setLoading(false);
      setError("");
      return;
    }

    const controller = new AbortController();

    const fetchUsers = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        // Ignore results if this request was cancelled
        if (controller.signal.aborted) return;

        const filtered = data.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        );

        setUsers(filtered);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Unable to load users.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    // Cancel the previous request when search changes
    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <div className="mx-auto mt-10 max-w-lg rounded-lg bg-gray-100 p-5">
      <h1 className="mb-4 text-2xl font-bold">
        Search Users
      </h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded border p-2"
      />

      {loading && <p className="mt-3">Searching...</p>}

      {error && <p className="mt-3 text-red-600">{error}</p>}

      {!loading && !error && search.trim() !== "" && (
        <ul className="mt-4 space-y-2">
          {users.map((user) => (
            <li key={user.id} className="rounded bg-white p-3">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}

          {users.length === 0 && <li>No users found.</li>}
        </ul>
      )}
    </div>
  );
};

export default RaceConditionSearch;
