import { authenticationApi } from "../redux/auth/api.js";

export const rootMiddleware = [authenticationApi.middleware];
