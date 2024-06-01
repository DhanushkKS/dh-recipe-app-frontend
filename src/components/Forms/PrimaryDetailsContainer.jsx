import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Logo from "../../assets/main-logo.svg";
import { FormFooter } from "./FormFooter.jsx";

export const PrimaryDetailsContainer = ({
  children,
  width,
  title,
  columns,
  isLogin,
  onSubmit,
  fullWidth,
  isLoading,
}) => {
  //
  return (
    <Box width={width} p={4}>
      <Box
        width="100%"
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <form onSubmit={onSubmit}>
          <Card
            sx={{ border: "none", padding: "32px", borderRadius: "20px" }}
            elevation={5}
          >
            <Box
              component={"div"}
              display={"flex"}
              width="100%"
              justifyContent="center"
            >
              <CardMedia
                component="img"
                image={Logo}
                alt="logo"
                sx={{
                  paddingTop: "16px",
                  maxWidth: "150px",
                  maxHeight: "60px",
                  objectFit: "contain",
                }}
              />
            </Box>
            <CardHeader
              title={
                <Typography variant={"h5"} component="div">
                  {title}
                </Typography>
              }
            />
            <CardContent>{children}</CardContent>
            <FormFooter
              columns={columns}
              isLogin={isLogin}
              fullWidth={fullWidth}
              isLoading={isLoading}
            />
          </Card>
        </form>
      </Box>
    </Box>
  );
};
PrimaryDetailsContainer.propTypes = {
  children: PropTypes.node,
  width: PropTypes.any,
  title: PropTypes.string,
  columns: PropTypes.number,
  isLogin: PropTypes.bool,
  onSubmit: PropTypes.func,
  fullWidth: PropTypes.bool,
};
