import { useGetFavouriteRecipesQuery } from "../../../redux/recieps/api.js";
import { useEffect } from "react";

export const useFavourites = () => {
  //
  const { data: favouriteRecipes } = useGetFavouriteRecipesQuery();
  useEffect(() => {
    console.log("Favourite Recipes", favouriteRecipes);
  }, [favouriteRecipes]);

  return { favouriteRecipes };
};
