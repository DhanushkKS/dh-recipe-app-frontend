import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.js";

export const useAuthContext = () => {
  //
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within the AuthProvider");
  }
  return context;
};
