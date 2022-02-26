import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const backendApi = createApi({
  reducerPath: "backendApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3003/" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (name) => "singleuser",
    }),
  }),
});

export const { useGetUserQuery } = backendApi;
