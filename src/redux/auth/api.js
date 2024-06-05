import { createApi } from "@reduxjs/toolkit/query/react";
import { HTTP_METHODS } from "../../constants.js";
import { baseQuery } from "../apiService.js";
import { REGISTER, SIGN_IN, USERS } from "../../helpers/url.js";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery,
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (payload) => ({
        url: `${USERS}/${SIGN_IN}`,
        method: HTTP_METHODS.POST,
        body: payload,
      }),
    }),
    register: builder.mutation({
      query: (payload) => ({
        url: `${USERS}/${REGISTER}`,
        method: HTTP_METHODS.POST,
        body: payload,
      }),
    }),
  }),
});

export const { useSignInMutation, useRegisterMutation } = authenticationApi;
