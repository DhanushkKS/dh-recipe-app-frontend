import { Box } from "@mui/material";
import PropTypes from "prop-types";

export const MainFormContainer = ({ children }) => {
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
        {children}
      </Box>
    </>
  );
};
MainFormContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
