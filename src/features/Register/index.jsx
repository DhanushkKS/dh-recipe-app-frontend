import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { CardMedia, Grid } from "@mui/material";
import Logo from "../../assets/main-logo.svg";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted!");
  };

  return (
    <Card>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          image={Logo}
          alt="logo"
          sx={{
            maxWidth: "150px",
            maxHeight: "60px",
            objectFit: "contain",
          }}
        />
      </div>
      <CardHeader
        title={
          <Typography variant="h6" gutterBottom>
            Register
          </Typography>
        }
      />
      <CardContent>
        <Grid container spacing={2} direction="row" px={4}>
          <Grid container spacing={2} xs={6} direction="row">
            <Grid container xs={12}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </Grid>
            <Grid container xs={12}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </Grid>
            <Grid container xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </Grid>
            <Grid container xs={12}>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  onClick={handleSubmit}
                >
                  Create Account
                </Button>
              </CardActions>
            </Grid>
          </Grid>

          <Grid container spacing={2} xs={6} direction="row" marginLeft={2}>
            <Grid xs={12} container m={0} p={0}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
              />
            </Grid>

            <Grid xs={12} container m={0} p={0}>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </Grid>

            <Grid xs={12} container m={0} p={0}>
              <TextField
                label="Confirm Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </Grid>
            <Grid xs={12} container m={0} p={0}></Grid>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Link href="#" variant="body2">
          Already have an account? Sign in
        </Link>
      </CardActions>
    </Card>
  );
};
