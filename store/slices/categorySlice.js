import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CategoryAPI } from '../../pages/api/v1';

const initialState = {
    categories: [],
    loading: true,
    error: ''
};

export const getCategories =
    createAsyncThunk('categories', async () => await CategoryAPI.getCategories());

export const getArticleCountByCategory =
    createAsyncThunk('getArticleCountByCategory', async () => await CategoryAPI.getArticleCountByCategory());

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loading = false;
                state.error = '';
            })
            .addCase(getCategories.rejected, (state: { loading: boolean; categories: never[]; error: any; }, action: { error: { message: any; }; }) => {
                state.loading = false;
                state.categories = [];
                state.error = action.error.message
            })
            .addCase(getArticleCountByCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(getArticleCountByCategory.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loading = false;
                state.error = '';
            })
            .addCase(getArticleCountByCategory.rejected, (state, action) => {
                state.loading = false;
                state.categories = [];
                state.error = action.error.message
            });
    },
});
export const categoryReducer = categorySlice.reducer