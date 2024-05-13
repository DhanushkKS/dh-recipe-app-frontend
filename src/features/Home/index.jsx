import { RecipeCard } from "../../components/RecipeCard/RecipeCard.jsx";
import { Grid } from "@mui/material";

export const Home = () => {
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
