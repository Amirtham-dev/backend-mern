import { useContext } from "react";
import UserContext from "../context/Context";

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h1 className="mb-4 text-2xl font-bold text-blue-700">USER DETAILS</h1>

      <p className="text-lg">Name: {user.name }</p>

      <p className="text-lg">Role: {user.role }</p>
    </div>
  );
};

export default Profile;
