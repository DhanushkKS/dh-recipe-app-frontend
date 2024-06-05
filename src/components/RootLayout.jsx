import { NavBar } from "./Nav/NavBar.jsx";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export const RootLayout = () => {
  return (
    <>
      <Box component="div" mx={20} mr={24} mt={2}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Box>
    </>
  );
};
