import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";

export const RecipeCard = ({ recipe, key, category }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [recipeId, setRecipeId] = useState("");
  const handleClick = () => {
    setIsFavourite(!isFavourite);
    //  setRecipeId(recipe?.);
  };
  const fullRecipeTitle = recipe?.strMeal;
  const recipeTitle =
    fullRecipeTitle.length > 40
      ? `${fullRecipeTitle.slice(0, 37)}...`
      : `${fullRecipeTitle}`;
  return (
    <Box m={1} pr={0.5} my={2}>
      <Card
        sx={{
          width: 200,
          minHeight: 250,
        }}
        key={recipe?.idMeal}
      >
        <CardMedia
          sx={{ height: 140, width: 200, border: "solid 1px yellow" }}
          image={recipe?.strMealThumb}
          title="green iguana"
        />

        <CardContent sx={{ border: "solid 2px pink", pl: 1 }}>
          <Stack
            direction="row"
            spacing={1}
            mb={1}
            border={"solid 1px green"}
            alignItems="center"
          >
            <Typography
              variant={"caption"}
              component="div"
              textTransform={"uppercase"}
            >
              {category}
            </Typography>
            <IconButton
              size={"small"}
              sx={{ color: "#fe5e7f", p: 0 }}
              cursor={"pointer"}
              onClick={handleClick}
            >
              {isFavourite ? (
                <Favorite fontSize="small" />
              ) : (
                <FavoriteBorder fontSize={"small"} />
              )}
            </IconButton>
          </Stack>

          <Tooltip title={fullRecipeTitle}>
            <Typography
              variant={"body2"}
              component="div"
              fontWeight={"600"}
              fontSize={"0.8rem"}
            >
              {recipeTitle}
            </Typography>
          </Tooltip>
        </CardContent>
      </Card>
    </Box>
  );
};
RecipeCard.propTypes = {
  recipe: PropTypes.object,
  key: PropTypes.any,
  category: PropTypes.string,
};
