import { createAsyncThunk, createSlice, Reducer } from '@reduxjs/toolkit';

import { instance } from '../Api/api';
import { Photo } from './CartsPage';


const initialState: Photo = {};
export const cartPage = createAsyncThunk(
  'cart/getCart',
  async (id: string) => {
    const res = await instance.get(`/products/${id}`);
    return res.data;
  },
);
export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(cartPage.fulfilled, (state: Photo, action) => {
      return action.payload;
    });
  },
});


export const cartReducer: Reducer = cartSlice.reducer;

export const {} = cartSlice.actions;