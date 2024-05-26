import RegisterFeature from "../../features/Register/index.jsx";
import { Box } from "@mui/material";

export const RegisterPage = () => {
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
        <RegisterFeature />
      </Box>
    </>
  );
};
