import { configureStore } from "@reduxjs/toolkit";
import AllProductsReducer from "./AllProductsSlice"

const store = configureStore({
  reducer: {
    products:AllProductsReducer
  },  
});

export default store;
