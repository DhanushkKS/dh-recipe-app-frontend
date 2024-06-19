import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

import { useAuthContext } from "./hooks/useAuthContext.js";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/index.js";
import { useRouters } from "./routes/index.jsx";
import ErrorBoundary from "./components/ErrorBoundary.js";

//lazy

function App() {
  //
  const { user } = useAuthContext();
  const { router } = useRouters(user);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ErrorBoundary>
            <RouterProvider router={router} />
          </ErrorBoundary>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
