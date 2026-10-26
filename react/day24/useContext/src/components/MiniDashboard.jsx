import { useContext } from "react";
import { MiniAuthContext } from "../context/MiniAuthContext";

const MiniDashboard = () => {
  const { user } = useContext(MiniAuthContext);

  return (
    <div className="rounded-xl bg-white p-8 text-center shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-blue-700">
        Dashboard
      </h2>

      <p>Welcome {user.name}</p>
      <p className="mt-2">Role: {user.role}</p>
    </div>
  );
};

export default MiniDashboard;