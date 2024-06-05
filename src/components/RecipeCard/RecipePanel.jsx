import { Box } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { RecipeCard } from "./RecipeCard.jsx";

export const RecipePanel = ({ recipes, category, favourites }) => {
  return (
    <>
      <Box
        component={"div"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"flex-start"}
      >
        {recipes &&
          recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              recipe={recipe}
              category={category}
              favourites={favourites}
            />
          ))}
      </Box>
    </>
  );
};
RecipePanel.propTypes = {
  recipes: PropTypes.object,
  favourites: PropTypes.bool,
};
