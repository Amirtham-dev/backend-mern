import { createContext } from "react";

export const MiniAuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});
