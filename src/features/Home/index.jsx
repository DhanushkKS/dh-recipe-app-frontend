import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard.jsx";
import { useHome } from "./hooks/useHome.js";
import React, { useState } from "react";
import { CategoryBar } from "./components/CategoryBar.jsx";
import { RecipePanel } from "../../components/RecipeCard/RecipePanel.jsx";

export const Home = () => {
  const { category, handleCategory, user, recipesByCategory, categories } =
    useHome();
  return (
    <React.Fragment>
      <Box>
        <CategoryBar
          categories={categories}
          handleCategory={handleCategory}
          category={category}
        />
        <RecipePanel recipes={recipesByCategory} category={category} />
      </Box>
    </React.Fragment>
  );
};
