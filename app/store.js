import { configureStore } from "@reduxjs/toolkit";
import productReducerss from "./productSlice";
import cartReducers from "./cartSlice";
import userSessionSlice from "./sessionSlice";

export const store = configureStore({
  reducer: {
    productList: productReducerss,
    cart: cartReducers,
    // doc: To fetch the session from useSession and place it in session slice
    sessionSlice: userSessionSlice,
  },
});
