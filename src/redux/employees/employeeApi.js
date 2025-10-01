import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/datas/" }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => "current-employees.json",
    }),
  }),
});

export const { useGetEmployeesQuery } = employeeApi;
