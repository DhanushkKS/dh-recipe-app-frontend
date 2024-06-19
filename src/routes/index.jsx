//Login
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { RootLayout } from "../components/RootLayout.jsx";
import { lazy, Suspense } from "react";
import { LoginPage } from "../pages/Login/Login.jsx";
import { RegisterPage } from "../pages/Register/Register.jsx";
// import { HomePage } from "./homePage.jsx";

const HomePage = lazy(() => import("/src/pages/Home/HomePage.jsx"));
const FavoritePage = lazy(() => import("/src/pages/Favourite/Favourite.jsx"));

export const useRouters = (user) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/"
          element={user ? <RootLayout /> : <Navigate to="/login" />}
        >
          <Route
            path={"home"}
            element={
              <Suspense fallback={"Loading Home page"}>
                <HomePage />
              </Suspense>
            }
          ></Route>
          <Route
            path={"favourites"}
            element={
              <Suspense fallback={"Loading Favourites page"}>
                <FavoritePage />
              </Suspense>
            }
          ></Route>
        </Route>

        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/register"
          element={!user ? <RegisterPage /> : <Navigate to="/" />}
        ></Route>
      </>,
    ),
  );
  return { router };
};
