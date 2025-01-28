import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ragAPI = createApi({
  reducerPath: "ragAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_RAG_API,
    prepareHeaders: (headers, { getState }) => {
        // Retrieve the access token from your state or storage
        const apiKey = import.meta.env.VITE_RAG_API_KEY; // Example: from localStorage
  
        // If the token exists, add it to the headers
        if (apiKey) {
            headers.set("access_token", apiKey);  // Add the access token to the header
          }
        return headers;
      },
  }),
  endpoints: (builder) => ({
    queryRAG: builder.mutation<{answer:any, sources:any}, { query: string }>({
      query: (body) => {
        return {
          url: "/api/query",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useQueryRAGMutation } = ragAPI;
