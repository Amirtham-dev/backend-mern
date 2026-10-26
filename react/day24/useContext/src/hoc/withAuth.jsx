import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const withAuth = (Component) => {
  const ProtectedComponent = (props) => {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
      return (
        <h2 className="text-center text-xl font-bold">
          Please Login
        </h2>
      );
    }

    return <Component {...props} />;
  };

  return ProtectedComponent;
};

export default withAuth;