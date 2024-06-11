import { useFavourites } from "./hooks/useFavourites.js";
import { RecipePanel } from "../../components/RecipeCard/RecipePanel.jsx";

export const FavouriteItems = () => {
  const { favouriteRecipes } = useFavourites();
  return <>{<RecipePanel recipes={favouriteRecipes} favourites />}</>;
};
