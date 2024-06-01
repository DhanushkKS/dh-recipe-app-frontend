import { RecipeCard } from "../../components/RecipeCard/RecipeCard.jsx";
import { Grid } from "@mui/material";
import { useAuthContext } from "../../hooks/useAuthContext.js";

export const Home = () => {
  const { user } = useAuthContext();
  console.log(user && user.email);
  return (
    <>
      <Grid container spacing={2}>
        hello {user && user.email}
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </Grid>
    </>
  );
};
