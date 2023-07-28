import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SidebarAPI } from '../../pages/api/v1';

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

export const getPopular =
    createAsyncThunk('blog/popular', async () => await SidebarAPI.getPopular());

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPopular.pending, (state) => {
                state.loading = true;
            })
            .addCase(getPopular.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.loading = false;
                state.error = '';
            })
            .addCase(getPopular.rejected, (state, action) => {
                state.loading = false;
                state.articles = [];
                state.error = action.error.message
            })
    },
});
export const sidebarReducer = sidebarSlice.reducer