import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../../assets/main-logo.svg";
import { useState } from "react";

export const Login = () => {
  console.log(Logo);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    //

    <Box
      sx={{ p: 0 }}
      maxWidth="350px"
      maxHeight="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <form>
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
              <Typography variant="h6" sx={{ textAlign: "left" }}>
                Login
              </Typography>
            }
          />
          <Divider />
          <CardContent sx={{ py: 4, mt: 2 }}>
            <Grid
              container
              spacing={4}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid xs={12} sm={12} md={12} spacing={4} mb={2}>
                <TextField
                  label="Email address"
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  error={error}
                  helperText={error && "Invalid email or password"}
                  required
                  fullWidth
                />
              </Grid>
              <Grid xs={12} sm={12} md={12} spacing={4} mb={2}>
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  error={error}
                  helperText={error && "Invalid email or password"}
                  required
                  fullWidth
                />
              </Grid>
              <Grid spacing={4} mb={2}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                  margin="normal"
                >
                  SIGN IN
                </Button>
              </Grid>
              <Grid spacing={4} mb={2}>
                {error && (
                  <Typography variant="body2" color="error" gutterBottom>
                    Invalid email or password
                  </Typography>
                )}
              </Grid>
              <Grid spacing={4} sx={{ p: 3 }}>
                Don't have an account?
                <Link href="#" variant="body2">
                  Create an account
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </Box>
  );
};
