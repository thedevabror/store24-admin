import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slice/auth";
import ProductAndCategoriSlice from "../slice/products";
import Orders from "../slice/order";

export default configureStore({
  reducer: {
    auth: AuthSlice,
    productCategory: ProductAndCategoriSlice,
    orders: Orders
  },
});
