import { createSlice } from '@reduxjs/toolkit';
const initialState = 'all';
export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        filter(state, action) {
            return action.payload;
        },
    },
});
export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
