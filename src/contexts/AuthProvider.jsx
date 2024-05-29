import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext.js";
import PropTypes from "prop-types";
import { useSignInMutation } from "../redux/auth/api.js";
//constants
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const initialState = {
  user: null,
  // token: null,
};
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return { user: null };
    default:
      return state;
  }
};
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [
    signIn,
    {
      isError: signInIsError,
      error: signInError,
      isSuccess: signInIsSuccess,
      data: signInData,
    },
  ] = useSignInMutation();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch({ type: LOGIN, payload: user });
    }
  }, [dispatch]);
  const valueObject = {
    ...state,
    dispatch,
  };
  return (
    <AuthContext.Provider value={valueObject}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default AuthProvider;
