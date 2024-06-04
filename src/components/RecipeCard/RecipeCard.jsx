import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  SvgIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import PropTypes from "prop-types";
import { FavoriteBorder, HeartBroken } from "@mui/icons-material";

export const RecipeCard = ({ recipe, key, category }) => {
  const fullRecipeTitle = recipe?.strMeal;
  const recipeTitle =
    fullRecipeTitle.length > 20
      ? `${fullRecipeTitle.slice(0, 17)}...`
      : `${fullRecipeTitle}`;
  return (
    <Box m={1}>
      <Card sx={{ width: 200, maxHeight: 300 }} key={key}>
        <CardMedia
          sx={{ height: 140, width: 180 }}
          image={recipe?.strMealThumb}
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant={"caption"}
            component="div"
            textTransform={"uppercase"}
          >
            {category}
          </Typography>
          <SvgIcon>
            <FavoriteBorder />
          </SvgIcon>
          <Tooltip title={fullRecipeTitle}>
            <Typography gutterBottom variant={"subtitle1"} component="div">
              {recipeTitle}
            </Typography>
          </Tooltip>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
RecipeCard.propTypes = {
  recipe: PropTypes.object,
  key: PropTypes.any,
};
