import { useAuthContext } from "../../../hooks/useAuthContext.js";
import { useLocalStorage } from "../../../hooks/useLocalStorage.js";
import { LOGOUT } from "../../../constants.js";
import { useDispatch } from "../../../store/index.js";
import { useState } from "react";

export const useNavBar = () => {
  //
  const { user } = useAuthContext();
  const [activeNav, setActiveNav] = useState("/home");
  const { dispatch } = useAuthContext();
  const { dispatch: recipesDispatch } = useDispatch();
  const { removeItem } = useLocalStorage("user");
  const handleLogout = () => {
    removeItem("user");
    dispatch({ type: LOGOUT });
    // recipesDispatch(setRecipes(null));
  };

  const handleActiveNav = (navLink) => {
    setActiveNav(navLink);
  };

  const userEmail = user?.email;
  return { handleLogout, handleActiveNav, activeNav, userEmail };
};
