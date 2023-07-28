import { configureStore } from '@reduxjs/toolkit';
import { blogReducer } from './slices/blogSlice';
import { createWrapper } from 'next-redux-wrapper';
import { cartReducer } from './slices/cartSlice';
import { categoryReducer } from './slices/categorySlice';
import { sidebarReducer } from './slices/sidebarSlice';

export const store = configureStore({
    reducer: {
        blog: blogReducer,
        cart: cartReducer,
        sidebar: sidebarReducer,
        category: categoryReducer
    },
    devTools: true
})

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);