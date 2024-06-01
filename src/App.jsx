import "./App.css";
import { LoginPage } from "./pages/Login/Login.jsx";
import { RegisterPage } from "./pages/Register/Register.jsx";
import { Helmet } from "react-helmet-async";
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

function App() {
  //
  const { user } = useAuthContext();
  console.log("User is", user);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/register"
          element={!user ? <RegisterPage /> : <Navigate to="/" />}
        ></Route>
        {/*<Route path="/home" element={<Home />}></Route>*/}
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
