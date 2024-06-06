import { combineReducers } from "@reduxjs/toolkit";
import { authenticationApi } from "../redux/auth/api.js";
import { recipesApi } from "../redux/recieps/api.js";
import recipes from "../redux/recipeSlice.js";
export const rootReducer = combineReducers({
  recipes,
  [authenticationApi.reducerPath]: authenticationApi.reducer,
  [recipesApi.reducerPath]: recipesApi.reducer,
});
