import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/users");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <p>Username: {user.username}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
