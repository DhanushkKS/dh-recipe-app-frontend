import { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext.js";
import PropTypes from "prop-types";
import { LOGIN, LOGOUT } from "../constants.js";
//constants
const initialState = {
  user: null,
};
export const authReducer = (state, action) => {
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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
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
