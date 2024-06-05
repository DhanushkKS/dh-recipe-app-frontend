import { useState } from "react";
import { useCreateFavouriteRecipeMutation } from "../../../redux/recieps/api.js";

export const useRecipeCard = (recipe) => {
  //
  const [isFavourite, setIsFavourite] = useState(false);
  const [addFavourite, { isLoading, isSuccess, error, isError }] =
    useCreateFavouriteRecipeMutation();

  const addFavouriteOnSubmit = async (values) => {
    await addFavourite({ mealId: values });
  };

  const handleClick = async () => {
    setIsFavourite(!isFavourite);
    await addFavouriteOnSubmit(recipe?.idMeal);
    //  setRecipeId(recipe?.);
  };
  const fullRecipeTitle = recipe?.strMeal;
  const recipeTitle =
    fullRecipeTitle.length > 40
      ? `${fullRecipeTitle.slice(0, 37)}...`
      : `${fullRecipeTitle}`;

  return { handleClick, recipeTitle, isFavourite, fullRecipeTitle };
};
