import { configureStore } from "@reduxjs/toolkit";
import { ProductsSlice } from "./products/ProductsSlice";
import { CartSlice } from "./cart/CartSlice";

const store = configureStore({
    reducer: {
        data: ProductsSlice.reducer,
        cart: CartSlice.reducer
    }
})
export default store;