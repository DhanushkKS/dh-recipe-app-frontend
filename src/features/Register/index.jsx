import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box, CardMedia, Grid } from "@mui/material";
import Logo from "../../assets/main-logo.svg";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(!error);
    console.log("Form submitted!");
  };

  return (
    <Box sx={{ border: "solid 1px red" }} width={"50%"} p={4}>
      <Box
        width="100%"
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <form>
          <Card
            sx={{ border: "none", padding: "32px", borderRadius: "20px" }}
            elevation={5}
          >
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              width="100%"
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
                  Register
                </Typography>
              }
            />
            <CardContent>
              <Grid container spacing={2}>
                {/*Render fields here*/}
                <Grid item xs={6} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label={"First Name"}
                    type={"text"}
                    value={firstName}
                    helperText={error && "First Name is required"}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label={"Last Name"}
                    type={"text"}
                    value={lastName}
                    helperText={error && "First Name is required"}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </Grid>

                <Grid item xs={6} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label={"Email"}
                    type={"email"}
                    value={email}
                    helperText={error && "Email is required"}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label={"Phone Number"}
                    type={"tel"}
                    value={phoneNumber}
                    helperText={error && "Phone Number is required"}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label={"Password"}
                    type={"password"}
                    value={password}
                    helperText={error && "Password is Required"}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Grid>

                <Grid item xs={6} md={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label={"Confirm Password"}
                    type={"password"}
                    value={confirmPassword}
                    helperText={error && "Confirm Password is required"}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{ padding: "16px" }}>
              <Grid container spacing={1} rowSpacing={2}>
                <Grid item sm={6} md={6}>
                  <Button
                    sx={{ backgroundColor: "#fe5e7f" }}
                    variant="contained"
                    type="submit"
                    margin="normal"
                    onClick={handleSubmit}
                  >
                    Create Account
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                <Typography variant={"caption"}>
                  Already have an account? &nbsp;
                  {
                    <Link
                      href="#"
                      variant="caption"
                      underline="none"
                      color={"#fe5e7f"}
                    >
                      Sign in
                    </Link>
                  }
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </form>
      </Box>
    </Box>
  );
};
export default Register;
