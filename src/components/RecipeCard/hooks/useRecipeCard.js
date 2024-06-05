import { useState } from "react";
import { useCreateFavouriteRecipeMutation } from "../../../redux/recieps/api.js";

export const useRecipeCard = (recipe, favourites) => {
  //
  const [isFavourite, setIsFavourite] = useState(false);
  const [addFavourite, { isLoading, isSuccess, error, isError }] =
    useCreateFavouriteRecipeMutation();

  const addFavouriteOnSubmit = async (values) => {
    if (!favourites) {
      await addFavourite({ mealId: values });
    }
  };

  const handleClick = async () => {
    setIsFavourite(!isFavourite);
    await addFavouriteOnSubmit(recipe?.idMeal);
    //  setRecipeId(recipe?.);
  };
  const fullRecipeTitle = recipe?.strMeal || recipe?.name;
  const recipeTitle =
    fullRecipeTitle.length > 40
      ? `${fullRecipeTitle.slice(0, 37)}...`
      : `${fullRecipeTitle}`;

  return { handleClick, recipeTitle, isFavourite, fullRecipeTitle, isLoading };
};
