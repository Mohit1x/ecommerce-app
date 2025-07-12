import { configureStore } from "@reduxjs/toolkit";
import AllProductsReducer from "./AllProductsSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    products: AllProductsReducer,
    auth: authReducer,
  },
});

export default store;
