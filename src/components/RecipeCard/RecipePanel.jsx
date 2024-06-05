import { Box, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { RecipeCard } from "./RecipeCard.jsx";

export const RecipePanel = ({ recipes, category }) => {
  return (
    <>
      <Box
        component={"div"}
        sx={{ border: "solid 1px  blue" }}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"flex-start"}
      >
        {recipes &&
          recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} category={category} />
          ))}
      </Box>
    </>
  );
};
RecipePanel.propTypes = {
  recipes: PropTypes.object,
};
