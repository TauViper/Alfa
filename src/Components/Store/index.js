import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { cartsReducer } from './CartsPage';
import { cartReducer } from './SingleCart';
import { filterReducer } from './Filter';
export const store = configureStore({
    reducer: {
        cartReducer,
        cartsReducer,
        filterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
export const useAppSelector = useSelector;
export const useAppDispatch = useDispatch.withTypes();
