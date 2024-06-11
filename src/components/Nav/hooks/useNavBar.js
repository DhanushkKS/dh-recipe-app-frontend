import { useAuthContext } from "../../../hooks/useAuthContext.js";
import { useLocalStorage } from "../../../hooks/useLocalStorage.js";
import { LOGOUT } from "../../../constants.js";
import { useDispatch } from "../../../store/index.js";
import { setRecipes } from "../../../redux/recipeSlice.js";

export const useNavBar = () => {
  //
  const { dispatch } = useAuthContext();
  const { dispatch: recipesDispatch } = useDispatch();
  const { removeItem } = useLocalStorage("user");
  const handleLogout = () => {
    removeItem("user");
    dispatch({ type: LOGOUT });
    // recipesDispatch(setRecipes(null));
  };

  return { handleLogout };
};
