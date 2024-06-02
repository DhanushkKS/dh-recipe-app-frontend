import { NavBar } from "./Nav/NavBar.jsx";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export const RootLayout = () => {
  return (
    <>
      root
      <Box component="div" mx={20} sx={{ background: "gray" }}>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </Box>
    </>
  );
};
