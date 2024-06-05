import { useAuthContext } from "../../../hooks/useAuthContext.js";
import { useState } from "react";
import { useGetRecipesByCategoryQuery } from "../../../redux/recieps/api.js";

export const useHome = () => {
  /**<b>If you need more categories, add them to here.</b>*/
  const categories = ["chicken", "pork", "beef", "Dessert", "Lamb"];
  const [category, setCategory] = useState(categories[0]);

  const handleCategory = (event, newCategory) => {
    if (newCategory !== null) {
      setCategory(newCategory);
    }
  };

  const { data: recipesByCategory } = useGetRecipesByCategoryQuery(category);

  const { user } = useAuthContext();

  return {
    category,
    user,
    handleCategory,
    // activeButtonStyles,
    recipesByCategory,
    categories,
  };
};
