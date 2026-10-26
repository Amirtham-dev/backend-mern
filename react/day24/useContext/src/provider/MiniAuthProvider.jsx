import { useState } from "react";
import { MiniAuthContext } from "../context/MiniAuthContext";

const MiniAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      name: "Bala",
      role: "Developer",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <MiniAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </MiniAuthContext.Provider>
  );
};

export default MiniAuthProvider;
