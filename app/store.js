import { configureStore } from "@reduxjs/toolkit";
import productReducerss from "./productSlice";
import cartReducers from "./cartSlice";

export const store = configureStore({
  reducer: {
    productList: productReducerss,
    cart: cartReducers,
  },
});

//doc hdjjdj
