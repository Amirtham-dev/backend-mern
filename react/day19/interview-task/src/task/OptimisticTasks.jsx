
import { useEffect, useState } from "react";

const OptimisticTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [pendingIds, setPendingIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=8")
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then(setTasks)
      .catch(() => setError("Could not load tasks."))
      .finally(() => setLoading(false));
  }, []);

  const toggleTask = async (task) => {
    // Prevent overlapping updates to the same task
    if (pendingIds.includes(task.id)) return;

    const previousTasks = tasks.map((item) => ({ ...item }));
    const nextCompleted = !task.completed;

    setError("");
    setPendingIds((prev) => [...prev, task.id]);

    // Optimistic update: update UI immediately
    setTasks((prev) =>
      prev.map((item) =>
        item.id === task.id
          ? { ...item, completed: nextCompleted }
          : item
      )
    );

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${task.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ completed: nextCompleted })
        }
      );

      if (!response.ok) {
        throw new Error("Update failed");
      }

      // The server accepted the update.
      // JSONPlaceholder is a demo API and does not persist changes.
    } catch {
      // Roll back to the snapshot from before this update
      setTasks(previousTasks);
      setError(`Update failed for "${task.title}". Changes reverted.`);
    } finally {
      setPendingIds((prev) =>
        prev.filter((id) => id !== task.id)
      );
    }
  };

  if (loading) return <p className="p-5">Loading tasks...</p>;
  if (error && tasks.length === 0) {
    return <p className="p-5 text-red-600">{error}</p>;
  }

  return (
    <div className="mx-auto max-w-xl space-y-3 p-5">
      <h1 className="text-2xl font-bold">Optimistic Task Updates</h1>

      {error && <p className="text-red-600">{error}</p>}

      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between gap-3 rounded border p-3"
        >
          <span className={task.completed ? "line-through" : ""}>
            {task.title}
          </span>

          <button
            disabled={pendingIds.includes(task.id)}
            onClick={() => toggleTask(task)}
            className="rounded bg-blue-600 px-3 py-2 text-white disabled:opacity-50"
          >
            {pendingIds.includes(task.id)
              ? "Saving..."
              : task.completed
                ? "Mark Incomplete"
                : "Complete"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default OptimisticTasks;
