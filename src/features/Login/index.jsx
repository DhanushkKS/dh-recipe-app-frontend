import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Logo from "../../assets/main-logo.svg";
import { useState } from "react";
import CardActions from "@mui/material/CardActions";
import Form from "./components/Form.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <>
      <Form columns={12} isLogin title={"Log In"} width={"25%"} />
    </>
    // <Box width="25%" p={4}>
    //   <Box
    //     width="100%"
    //     component="div"
    //     display="flex"
    //     alignItems="center"
    //     justifyContent="center"
    //   >
    //     <form>
    //       <Card
    //         sx={{ border: "none", padding: "32px", borderRadius: "20px" }}
    //         elevation={5}
    //       >
    //         <Box
    //           component={"div"}
    //           display={"flex"}
    //           width="100%"
    //           justifyContent="center"
    //         >
    //           <CardMedia
    //             component="img"
    //             image={Logo}
    //             alt="logo"
    //             sx={{
    //               paddingTop: "16px",
    //               maxWidth: "150px",
    //               maxHeight: "60px",
    //               objectFit: "contain",
    //             }}
    //           />
    //         </Box>
    //
    //         <CardHeader
    //           title={
    //             <Typography variant={"h5"} component="div">
    //               Login
    //             </Typography>
    //           }
    //         />
    //         <CardContent>
    //           <Grid container spacing={2}>
    //             <Grid item sm={12} md={12}>
    //               <TextField
    //                 fullWidth
    //                 name={"email"}
    //                 variant="outlined"
    //                 label={"Email"}
    //                 type={"email"}
    //                 value={email}
    //                 helperText={error && "Email is required"}
    //                 onChange={(event) => setEmail(event.target.value)}
    //               />
    //             </Grid>
    //             <Grid item xs={12} md={12}>
    //               <TextField
    //                 fullWidth
    //                 variant="outlined"
    //                 label={"Password"}
    //                 type={"password"}
    //                 value={password}
    //                 helperText={error && "Password is required"}
    //                 onChange={(event) => setPassword(event.target.value)}
    //               />
    //             </Grid>
    //           </Grid>
    //         </CardContent>
    //
    //         <CardActions sx={{ padding: "16px" }}>
    //           <Grid container spacing={1} rowSpacing={2}>
    //             <Grid item sm={12} md={12}>
    //               <Button
    //                 sx={{ backgroundColor: "#fe5e7f" }}
    //                 variant="contained"
    //                 type="submit"
    //                 fullWidth
    //                 margin="normal"
    //               >
    //                 Sign In
    //               </Button>
    //             </Grid>
    //           </Grid>
    //         </CardActions>
    //         <Grid container spacing={2} mt={2}>
    //           <Grid
    //             item
    //             sm={12}
    //             md={12}
    //             xs={12}
    //             display={"flex"}
    //             justifyContent="center"
    //           >
    //             <Typography variant={"caption"}>
    //               Don't have an account? &nbsp;
    //               {
    //                 <Link
    //                   href="#"
    //                   variant="caption"
    //                   underline="none"
    //                   color={"#fe5e7f"}
    //                 >
    //                   Create an account
    //                 </Link>
    //               }
    //             </Typography>
    //           </Grid>
    //         </Grid>
    //       </Card>
    //     </form>
    //   </Box>
    // </Box>
  );
};
export default Login;
