import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://mini-proyectos-back-production.up.railway.app";

export const fetchSearchs = createAsyncThunk('products/fetchProducts', async ( name ) => {
  const response = await axios.get(`${URL}/bazar/items?name=${name}`); 
  return response.data;
});

export const fetchById = createAsyncThunk('products/fetchById', async ( id ) => {
  const response = await axios.get(`${URL}/bazar/items/${id}`); 
  return response.data;
});

const initialState = {
  searchsResults: [],
  status: "idle",
  error: null,
  productDetails: [],
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,

  reducers: {},
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchsResults = action.payload;
      })
      .addCase(fetchSearchs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

      builder
      .addCase(fetchById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productDetails = action.payload || [];
      })
      .addCase(fetchById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    
  }
});

export default bazarSlice.reducer;