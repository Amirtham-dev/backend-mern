import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const username = "Bala";

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, username, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;