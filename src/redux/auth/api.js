import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HTTP_METHODS } from "../../constants.js";

export const authenticationApi = createApi({
  reducerPath: "authenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4444/api/users/", //should replace with env variable
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (payload) => ({
        url: "signIn",
        method: HTTP_METHODS.POST,
        body: payload,
      }),
    }),
    register: builder.mutation({
      query: (payload) => ({
        url: "register",
        method: HTTP_METHODS.POST,
        body: payload,
      }),
    }),
  }),
});

export const { useSignInMutation, useRegisterMutation } = authenticationApi;
