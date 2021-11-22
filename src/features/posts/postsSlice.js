import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Reddit } from "../../util/RedditAPI";

export const getPopularPosts = createAsyncThunk(
    "posts/getPopularPosts",
    (filter) => Reddit.getPopularPosts(filter)
);

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        getPostsLoading: false,
        getPostsError: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getPopularPosts.pending, (state) => {
                state.getPostsLoading = true;
                state.getPostsError = false;
            })
            .addCase(getPopularPosts.fulfilled, (state, action) => {
                state.getPostsLoading = false;
                state.getPostsError = false;
                /* console.log(action.payload) */
                state.posts = action.payload;
            })
            .addCase(getPopularPosts.rejected, (state) => {
                state.getPostsLoading = false;
                state.getPostsError = true;
            })
    }
});

export const selectPosts = (state) => state.posts.posts;
export const selectGetPostsLoading = (state) => state.posts.getPostsLoading;
export const selectGetPostsError = (state) => state.posts.getPostsError;

export default postsSlice.reducer;