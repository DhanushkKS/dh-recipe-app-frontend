import { combineReducers } from "@reduxjs/toolkit";
import { authenticationApi } from "../redux/auth/api.js";

export const rootReducer = combineReducers({
  [authenticationApi.reducerPath]: authenticationApi.reducer,
});
