import { authenticationApi } from "../redux/auth/api.js";
import { recipesApi } from "../redux/recieps/api.js";

export const rootMiddleware = [
  authenticationApi.middleware,
  recipesApi.middleware,
];
