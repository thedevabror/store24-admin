import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  allOrders: [],
  allOrdersFailur: false,
  singleOrder: {},
  singleOrderFailur: false,
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
    getSingleOrderStart: (state) => {
      state.isLoading = true;
    },
    getSingleOrderSucces: (state, action) => {
      state.isLoading = false;
      state.singleOrder = action.payload;
    },
    getSingleOrderFailur: (state) => {
      state.isLoading = false;
      state.singleOrderFailur = true;
    },
  },
});

export const {
  getOrdersStart,
  getOrdersSucces,
  getOrdersFailur,
  getSingleOrderStart,
  getSingleOrderSucces,
  getSingleOrderFailur,
} = orderSlice.actions;

export default orderSlice.reducer;
