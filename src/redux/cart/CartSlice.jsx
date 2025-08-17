import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: 0
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state) => {
            state.items += 1;
        }
    }
})

export const {increment} = CartSlice.actions;
export default CartSlice.reducer;