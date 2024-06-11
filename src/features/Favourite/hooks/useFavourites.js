import { useGetFavouriteRecipesQuery } from "../../../redux/recieps/api.js";

export const useFavourites = () => {
  //
  const { data: favouriteRecipes } = useGetFavouriteRecipesQuery();
  return { favouriteRecipes };
};
