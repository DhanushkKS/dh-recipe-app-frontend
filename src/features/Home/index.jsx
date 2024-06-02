import { RecipeCard } from "../../components/RecipeCard/RecipeCard.jsx";
import { Grid } from "@mui/material";
import { useAuthContext } from "../../hooks/useAuthContext.js";
import { NavBar } from "../../components/Nav/NavBar.jsx";
import { Outlet } from "react-router-dom";

export const Home = () => {
  const { user } = useAuthContext();
  console.log(user && user.email);
  return (
    <>
      home
      {/*<Grid container spacing={2}>*/}
      {/*  <RecipeCard />*/}
      {/*  /!*<RecipeCard />*!/*/}
      {/*  /!*<RecipeCard />*!/*/}
      {/*  /!*<RecipeCard />*!/*/}
      {/*</Grid>*/}
    </>
  );
};
