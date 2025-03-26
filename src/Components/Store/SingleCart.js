import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../Api/api';
const initialState = {};
export const cartPage = createAsyncThunk('cart/getCart', async (id) => {
    const res = await instance.get(`/products/${id}`);
    return res.data;
});
export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(cartPage.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});
export const cartReducer = cartSlice.reducer;
export const {} = cartSlice.actions;
