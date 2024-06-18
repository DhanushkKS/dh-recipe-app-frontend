import "./App.css";
import { LoginPage } from "./pages/Login/Login.jsx";
import { RegisterPage } from "./pages/Register/Register.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

import { useAuthContext } from "./hooks/useAuthContext.js";
import { RootLayout } from "./components/RootLayout.jsx";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/index.js";
import { lazy, Suspense } from "react";
import { useRouters } from "./routes/index.jsx";

//lazy

function App() {
  //
  const { user } = useAuthContext();
  const { router } = useRouters(user);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
