import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("/products/fetch", async () => {
  try {
    let res = await fetch(`${import.meta.env.BASE_URL}db.json`);
    console.log("Fetch status:", res.status);
    let data = await res.json();
    console.log("Fetched data:", data);
    return data;
 
    // console.log(articles)
  } catch (error) {
    console.log(error.message);
  }
});

export const ProductsSlice = createSlice({
  name: "data",
  initialState: {
    products: [],
    loading: true,
    error: "",
    dailyDiscountRight: [],
    dailyDiscountLeft: [],
    availableNow: [],
    bestSellers: [],
    articles: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
         const data = action.payload;
        state.loading = false;
        state.error = "";
        state.data = action.payload;
        state.dailyDiscountRight = data.dailyDiscount?.right || [];
        state.dailyDiscountLeft = data.dailyDiscount?.left || [];
        state.availableNow = data.availableNow || [];
        state.bestSellers = data.bestSellers || [];
        state.articles = data.articles || [];
      })
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.rejected, (state) => {
        state.error = "server rejected...!";
      });
  },
});
export default ProductsSlice.reducer;
