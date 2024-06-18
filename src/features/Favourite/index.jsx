import { useFavourites } from "./hooks/useFavourites.js";
import { RecipePanel } from "../../components/RecipeCard/RecipePanel.jsx";

const FavouriteItems = () => {
  const { favouriteRecipes } = useFavourites();
  return <>{<RecipePanel recipes={favouriteRecipes} favourites />}</>;
};

export default FavouriteItems;
