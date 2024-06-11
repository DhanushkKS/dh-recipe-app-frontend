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
import { useRecipeCard } from "./hooks/useRecipeCard.js";

export const RecipeCard = ({ recipe, rKey, category, favourites }) => {
  const { recipeTitle, isFavourite, handleClick, fullRecipeTitle, isLoading } =
    useRecipeCard(recipe, favourites);
  return (
    <Box m={1} pr={0.5} my={2}>
      <Card
        sx={{
          width: 200,
          minHeight: 250,
        }}
        key={rKey}
      >
        <CardMedia
          sx={{ height: 140, width: 200 }}
          image={recipe?.strMealThumb || recipe?.image}
          title="green iguana"
        />

        <CardContent sx={{ pl: 1 }}>
          <Stack direction="row" spacing={1} mb={1} alignItems="center">
            <Typography
              variant={"caption"}
              component="div"
              textTransform={"uppercase"}
            >
              {category || recipe?.category}
            </Typography>
            <IconButton
              size={"small"}
              sx={{ color: "#fe5e7f", p: 0 }}
              cursor={"pointer"}
              onClick={handleClick}
              disabled={favourites || isLoading}
            >
              {isFavourite || favourites ? (
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
  rKey: PropTypes.any,
  category: PropTypes.string,
  favourites: PropTypes.bool,
};
