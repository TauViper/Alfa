import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../Api/api';
const initialState = [];
export const cartsPage = createAsyncThunk('carts/getCarts', async () => {
    const res = await instance.get('/products');
    return res.data;
});
export const deleteCart = createAsyncThunk('cart/deleteCart', async (id) => {
    await instance.delete(`/products/${id}`);
    return id;
});
export const addCart = createAsyncThunk('cart/addCart', async (cart) => {
    await instance.post('/products', cart);
    return cart;
});
export const cartsSlice = createSlice({
    name: 'carts',
    initialState: initialState,
    reducers: {
        toggleFavorite(state, action) {
            return state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, favorite: !item.favorite };
                }
                return item;
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cartsPage.fulfilled, (state, action) => {
            return action.payload.map((item) => ({ ...item, favorite: false }));
        });
        builder.addCase(deleteCart.fulfilled, (state, action) => {
            return state.filter(item => item.id !== action.payload);
        });
        builder.addCase(addCart.fulfilled, (state, action) => {
            return [...state, action.payload];
        });
    },
});
export const cartsReducer = cartsSlice.reducer;
export const { toggleFavorite } = cartsSlice.actions;
