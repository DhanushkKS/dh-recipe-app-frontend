import { combineReducers } from "@reduxjs/toolkit";
import { authenticationApi } from "../redux/auth/api.js";
import { recipesApi } from "../redux/recieps/api.js";

export const rootReducer = combineReducers({
  [authenticationApi.reducerPath]: authenticationApi.reducer,
  [recipesApi.reducerPath]: recipesApi.reducer,
});
