import { Box } from "@mui/material";
import { useHome } from "./hooks/useHome.js";
import React from "react";
import { CategoryBar } from "./components/CategoryBar.jsx";
import { RecipePanel } from "../../components/RecipeCard/RecipePanel.jsx";

const Home = () => {
  const { category, handleCategory, user, recipesByCategory, categories } =
    useHome();
  return (
    <React.Fragment>
      <CategoryBar
        categories={categories}
        handleCategory={handleCategory}
        category={category}
      />
      <RecipePanel recipes={recipesByCategory} category={category} />
    </React.Fragment>
  );
};
export default Home;
