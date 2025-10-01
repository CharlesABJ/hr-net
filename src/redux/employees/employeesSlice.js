import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeesList: [],
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employeesList.unshift({
        employeeId: Date.now(),
        ...action.payload,
      });
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
