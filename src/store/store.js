import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    //TODO: add more slices here for posts
  },
});
export default store;
