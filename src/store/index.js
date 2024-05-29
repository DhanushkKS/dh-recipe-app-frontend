import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer.js";
import { rootMiddleware } from "./rootMiddleware.js";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware().concat([...rootMiddleware]);
  },
});
