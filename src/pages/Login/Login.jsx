// import LoginFeature from "src/features/Login/index.jsx";
import { Box } from "@mui/material";
import LoginFeature from "../../features/Login/index.jsx";
export const LoginPage = () => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        component="main"
        minWidth="100vw"
        minHeight="100vh"
        py={0}
        sx={{ background: "#e0e0e0" }}
      >
        <LoginFeature />
      </Box>
    </>
  );
};
