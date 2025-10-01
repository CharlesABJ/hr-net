import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employees/employeesSlice";
import { employeeApi } from "./employees/employeeApi";

const store = configureStore({
  reducer: {
    employees: employeesReducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
});

export default store;
