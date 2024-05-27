import { Grid } from "@mui/material";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard.jsx";

export const FavouriteItems = () => {
  return (
    <>
      <Grid container spacing={2}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </Grid>
    </>
  );
};
