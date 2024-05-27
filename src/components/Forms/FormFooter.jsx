import CardActions from "@mui/material/CardActions";
import { Button, Grid, Link, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const FormFooter = ({ columns, isLogin }) => {
  return (
    <>
      <CardActions sx={{ padding: "16px" }}>
        <Grid container spacing={1} rowSpacing={2}>
          <Grid item sm={columns} md={columns}>
            <Button
              sx={{ backgroundColor: "#fe5e7f" }}
              variant="contained"
              type="submit"
              fullWidth
              margin="normal"
            >
              {isLogin && "Sign In"}
              {!isLogin && "Register"}
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
                href="#"
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
};
