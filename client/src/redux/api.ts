import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User } from "../interface/user";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
  }),
  tagTypes: ["User", "Dogsitter"],
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
      any
    >({
      query: () => ({
        url: "/user/auth/login/success",
        credentials: "include"
      }),
      transformResponse: (responseData: {
        success: boolean;
        msg: string;
        user: User;
      }) => {

        return responseData;
      },
      providesTags: ["User"],
    }),
    login: builder.mutation<{success: boolean, msg: string, user: User}, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/user/auth/login",
        method: "POST",
        body: { email: credentials.email, password: credentials.password },
        credentials: "include"
      }),
      invalidatesTags: ["User"],
    }),
    fetchAllDogsitters: builder.query<User[], any>({
      query: () => ({
        url: "/dogsitters",
        credentials: "include"
      })
    })
  }),
});

export const { useSignUpUserMutation, useFetchUserQuery, useLoginMutation, useFetchAllDogsittersQuery } =
  api;
