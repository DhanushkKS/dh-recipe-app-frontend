import CardActions from "@mui/material/CardActions";
import { Button, Link, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
export const FormFooter = ({ columns, isLogin, fullWidth, isLoading }) => {
  return (
    <>
      <CardActions sx={{ padding: "16px" }}>
        <Grid container spacing={1} rowSpacing={2}>
          <Grid item sm={columns} md={columns}>
            <Button
              disabled={isLoading}
              sx={{ backgroundColor: "#fe5e7f" }}
              variant="contained"
              type="submit"
              fullWidth={fullWidth}
              margin="normal"
            >
              {isLogin && "Sign In"}
              {!isLogin && "Create Account"}
            </Button>
          </Grid>
        </Grid>
      </CardActions>
      <Grid container spacing={2} mt={2}>
        <Grid
          item
          sm={12}
          md={12}
          xs={12}
          display={"flex"}
          justifyContent="center"
        >
          <Typography variant="caption">
            {isLogin && "Don't have an account?"}
            {!isLogin && "Have an account?"}
            &nbsp;
            {
              <Link
                component={RouterLink}
                to={isLogin === true ? "/register" : "/login"}
                variant="caption"
                underline="none"
                color={"#fe5e7f"}
              >
                {isLogin && "Create account"}
                {!isLogin && "Sign In"}
              </Link>
            }
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
FormFooter.propTypes = {
  columns: PropTypes.number,
  isLogin: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
};
