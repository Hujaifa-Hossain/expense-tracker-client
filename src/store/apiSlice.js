import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = "http://localhost:5000/api/";

export const apiSlice = createApi({
  reducerPath: "expense",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories",
    }),
  }),
});

export default apiSlice;
