import { Box, Grid, IconButton, Link } from "@mui/material";
import MainLogo from "../../assets/main-logo.svg"; // Import the SVG file
import { Link as RouterLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavBar } from "./hooks/useNavBar.js";

const MainLogoIcon = (props) => (
  <img src={MainLogo} alt="logo" style={{ maxWidth: "100px" }} />
);

export const NavBar = () => {
  const { handleLogout } = useNavBar();
  return (
    <>
      <Box component="nav" display="flex" width="100%">
        <Grid container px={0}>
          <Grid item xs={4}>
            <MainLogoIcon />
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              sx={{ textTransform: "upperCase" }}
              fontFamily={"roboto"}
            >
              <Grid
                item
                xs={6}
                p={2}
                display="flex"
                justifyContent={"flex-end"}
              >
                <Link
                  component={RouterLink}
                  to={"home"}
                  variant={"text"}
                  href={"#"}
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
                  component={RouterLink}
                  to={"favourites"}
                  variant={"text"}
                  href={"#"}
                  underline={"none"}
                  color={"black"}
                >
                  Favourite
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            py={0}
            pr={1}
            item
            xs={4}
            display="flex"
            justifyContent={"flex-end"}
          >
            <IconButton
              onClick={handleLogout}
              title={"Logout"}
              color={"primary"}
            >
              <LogoutIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
