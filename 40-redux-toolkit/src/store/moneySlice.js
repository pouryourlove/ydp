import { createSlice } from "@reduxjs/toolkit";

const moneySlice = createSlice({
  name: "money",
  initialState: 0,
  reducers: {
    deposit: (state, action) => state + action.payload,
    withdraw: (state, action) => state - action.payload,
  },
});

export const { deposit, withdraw } = moneySlice.actions;
export default moneySlice.reducer;
