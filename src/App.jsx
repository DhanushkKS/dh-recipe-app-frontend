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
import { Home } from "./features/Home/index.jsx";
import { useAuthContext } from "./hooks/useAuthContext.js";
import { RootLayout } from "./components/RootLayout.jsx";
import { FavouriteItems } from "./features/Favourite/index.jsx";

function App() {
  //
  const { user } = useAuthContext();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/"
          // element={user ? <Home /> : <Navigate to="/login" />}
          element={user ? <RootLayout /> : <Navigate to="/login" />}
        >
          <Route path={"home"} element={<Home />}></Route>
          <Route path={"favourites"} element={<FavouriteItems />}></Route>
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
    //
  );
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
