import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  allOrders: [],
  allOrdersFailur: false,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrdersStart: (state) => {
      state.isLoading = true;
    },
    getOrdersSucces: (state, action) => {
      state.isLoading = false;
      state.allOrders = action.payload;
    },
    getOrdersFailur: (state) => {
      state.isLoading = false;
      state.allOrdersFailur = true;
    },
  },
});

export const { getOrdersStart, getOrdersSucces, getOrdersFailur } =
  orderSlice.actions;

export default orderSlice.reducer;
