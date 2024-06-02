import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { useState } from "react";
import MainLogo from "../../assets/main-logo.svg"; // Import the SVG file
import { Link as RouterLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
const MainLogoIcon = (props) => (
  <img src={MainLogo} alt="logo" style={{ maxWidth: "100px" }} />
);

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        component="nav"
        sx={{ border: "solid 1px red" }}
        display="flex"
        width="100%"
        // p={8}
      >
        <Grid container xs={12} sx={{ border: "solid 1px green" }} px={5}>
          <Grid item xs={4} sx={{ border: "solid 1px yellow" }}>
            <MainLogoIcon />
          </Grid>
          <Grid container item xs={4} sx={{ border: "solid 1px green" }}>
            <Grid
              item
              xs={6}
              sx={{ border: "solid 1px red" }}
              p={2}
              display="flex"
              justifyContent={"flex-end"}
            >
              <Link
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
          <Grid
            p={2}
            item
            xs={4}
            sx={{ border: "solid 1px yellow" }}
            display="flex"
            justifyContent={"flex-end"}
          >
            <LogoutIcon />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
