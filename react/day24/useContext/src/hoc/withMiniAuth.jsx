import { useContext } from "react";
import { MiniAuthContext } from "../context/MiniAuthContext";

const withMiniAuth = (Component) => {
  const ProtectedComponent = (props) => {
    const { user } = useContext(MiniAuthContext);

    if (!user) {
      return (
        <h2 className="text-center text-xl font-bold text-red-600">
          Please Login
        </h2>
      );
    }

    return <Component {...props} />;
  };

  return ProtectedComponent;
};

export default withMiniAuth;