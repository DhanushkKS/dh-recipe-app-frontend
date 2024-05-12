import "./App.css";
import { Login } from "./features/Login/index.jsx";
import { Container, Stack } from "@mui/material";

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
        }}
      >
        <Stack spacing={8} justifyContent="center" alignItems="center">
          <Login />
        </Stack>
      </Container>
    </>
  );
}

export default App;
