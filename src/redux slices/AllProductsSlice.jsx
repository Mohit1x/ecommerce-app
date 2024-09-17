import { createSlice } from "@reduxjs/toolkit";

const AllProductsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    cartProducts: [],
    wishListProducts: [],
    userData: [],
    orderProducts: [],
    grandTotal: 0,
  },
  reducers: {
    addProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    addToCart: (state, action) => {
      state.cartProducts.push({ ...action.payload, quantity: 1 });
    },
    addToWishList: (state, action) => {
      state.wishListProducts.push(action.payload);
    },
    deleteProduct: (state, action) => {
      console.log(action);
      state.cartProducts.splice(action.payload, 1);
    },
    deleteWishListProduct: (state, action) => {
      state.wishListProducts.splice(action.payload, 1);
    },
    increaseProduct: (state, action) => {
      const tempState = [...state.cartProducts];
      tempState[action.payload].quantity += 1;
      state.cartProducts = tempState;
    },
    decreaseProduct: (state, action) => {
      const temp = [...state.cartProducts];
      temp[action.payload].quantity -= 1;
      state.cartProducts = temp;
    },
    addUserData: (state, action) => {
      state.userData = action.payload;
    },
    addGrandTotal: (state, action) => {
      state.grandTotal = action.payload;
    },
    addOrder: (state) => {
      console.log(state.cartProducts, state.orderProducts, "slice");
      state.orderProducts = [...state.cartProducts, ...state.orderProducts];
      state.cartProducts = [];
    },
    deleteOrders: (state) => {
      state.orderProducts = [];
    },
  },
});

export const {
  addProducts,
  addToCart,
  increaseProduct,
  decreaseProduct,
  deleteProduct,
  addToWishList,
  deleteWishListProduct,
  addUserData,
  addGrandTotal,
  addOrder,
  deleteOrders,
} = AllProductsSlice.actions;

export default AllProductsSlice.reducer;
