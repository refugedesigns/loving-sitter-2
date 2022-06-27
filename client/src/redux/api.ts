import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "../interface/user";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    signUpUser: builder.mutation<
      User,
      { fullName: string; email: string; password: string }
    >({
      query: (userInfo) => ({
        url: "/user/auth/signup",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["User"],
    }),
    fetchUser: builder.query<
      { success: boolean; msg: string; user: User },
      undefined
    >({
      query: () => ({
        url: "/user/auth/login/success",
      }),
      transformResponse: (responseData: {
        success: boolean;
        msg: string;
        user: User;
      }) => {
        console.log(responseData);
        return responseData;
      },
      providesTags: ["User"],
    }),
    login: builder.mutation<User, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/user/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useSignUpUserMutation, useFetchUserQuery, useLoginMutation } =
  api;
