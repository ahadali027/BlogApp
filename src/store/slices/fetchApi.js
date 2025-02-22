import { getToken } from "@/api/axios/token";
import { BACKEND_URL } from "@/config/config";

import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const stateQueryApi = createApi({
  reducerPath: "stateQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: (headers) => {
      const token = getToken();

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});


