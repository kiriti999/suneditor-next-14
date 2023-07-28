import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BlogAPI } from '../../pages/api/v1/';

const initialState = {
    articles: [{
        _id: "",
        title: "",
        description: "",
        categoryName: "",
        categoryImage: "",
        author: "",
        updatedAt: ""
    }],
    loading: true,
    error: ''
};

export const getPosts =
    createAsyncThunk('blog/posts', async (page) => {
        return await BlogAPI.getPosts(page.start, page.limit)
    });

export const getPostsByCategory =
    createAsyncThunk('category/posts/category', async (id) => await BlogAPI.getPostsByCategory(id));

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.loading = false;
                state.error = '';
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = false;
                state.articles = [];
                state.error = action.error.message
            })
            .addCase(getPostsByCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPostsByCategory.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.loading = false;
                state.error = '';
            })
            .addCase(getPostsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.articles = [];
                state.error = action.error.message
            })
    },
});
export const blogReducer = blogSlice.reducer