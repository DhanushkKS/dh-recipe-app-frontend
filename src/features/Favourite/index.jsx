import { useFavourites } from "./hooks/useFavourites.js";
import { RecipePanel } from "../../components/RecipeCard/RecipePanel.jsx";

export const FavouriteItems = () => {
  const { favouriteRecipes } = useFavourites();
  console.log("FavouriteItems", favouriteRecipes);
  return <>{<RecipePanel recipes={favouriteRecipes} favourites />}</>;
};
