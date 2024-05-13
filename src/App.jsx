import "./App.css";
import { Login } from "./features/Login/index.jsx";
import { Container, Stack } from "@mui/material";
import { Register } from "./features/Register/index.jsx";
import { NavBar } from "./components/Nav/NavBar.jsx";
import { Home } from "./features/Home/index.jsx";

function App() {
  return (
    <>
      <Container
        maxWidth="100vw"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/*<Stack spacing={8} justifyContent="center" alignItems="center">*/}
        {/*<Login />*/}
        <NavBar />

        {/*<Register />*/}
        <Home />
        {/*</Stack>*/}
      </Container>
    </>
  );
}

export default App;
