import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Reddit } from "../../util/RedditAPI";

export const getPostComments = createAsyncThunk(
    "postDetail/getPostComments",
    (postId) => Reddit.getPostComments(postId)
);

export const postDetailSlice = createSlice({
    name: "postDetail",
    initialState: {
        postInfo: {},
        postComments: [],
        getPostCommentsLoading: false,
        getPostCommentsError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPostComments.pending, (state) => {
                state.getPostCommentsLoading = true;
                state.getPostCommentsError = false;
            })
            .addCase(getPostComments.fulfilled, (state, action) => {
                state.getPostCommentsLoading = false;
                state.getPostCommentsError = false;
                console.log(action.payload);
                state.postInfo = action.payload.postInfo;
                state.postComments = action.payload.postComments;
            })
            .addCase(getPostComments.rejected, (state) => {
                state.getPostCommentsLoading = false;
                state.getPostCommentsError = true;
            });
    },
});

export const selectPostInfo = (state) => state.postDetail.postInfo;
export const selectPostComments = (state) => state.postDetail.postComments;
export const selectGetPostCommentsLoading = (state) => state.postDetail.getPostCommentsLoading;
export const selectGetPostCommentsError = (state) => state.postDetail.getPostCommentsError;

export default postDetailSlice.reducer;
