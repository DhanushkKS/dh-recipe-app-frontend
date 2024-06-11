import { Box, Grid, IconButton, Link } from "@mui/material";
import MainLogo from "../../assets/main-logo.svg"; // Import the SVG file
import { Link as RouterLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavBar } from "./hooks/useNavBar.js";
import { useAuthContext } from "../../hooks/useAuthContext.js";

const MainLogoIcon = (props) => (
  <img src={MainLogo} alt="logo" style={{ maxWidth: "100px" }} />
);

export const NavBar = () => {
  const { handleLogout } = useNavBar();
  const { user } = useAuthContext();
  return (
    <>
      <Box component="nav" display="flex" width="100%">
        <Grid container xs={12} px={0}>
          <Grid item xs={4}>
            <MainLogoIcon />
          </Grid>
          <Grid container xs={4}>
            <Grid item xs={6} p={2} display="flex" justifyContent={"flex-end"}>
              <Link
                fontFamily={"roboto"}
                component={RouterLink}
                to={"home"}
                variant={"text"}
                href={"#"}
                sx={{ textTransform: "upperCase" }}
                underline={"none"}
                color={"black"}
              >
                Home
              </Link>
            </Grid>
            <Grid
              item
              xs={6}
              p={2}
              display="flex"
              justifyContent={"flex-start"}
            >
              <Link
                fontFamily={"roboto"}
                component={RouterLink}
                to={"favourites"}
                variant={"text"}
                href={"#"}
                sx={{ textTransform: "upperCase" }}
                underline={"none"}
                color={"black"}
              >
                Favourite
              </Link>
            </Grid>
          </Grid>
          <Grid p={2} item xs={4} display="flex" justifyContent={"flex-end"}>
            <IconButton onClick={handleLogout} title={"Logout"}>
              <LogoutIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
