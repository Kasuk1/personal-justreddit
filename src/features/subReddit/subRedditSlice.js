import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Reddit } from "../../util/RedditAPI";

export const getAboutSubReddit = createAsyncThunk(
  "subReddit/getAboutSubReddit",
  (subreddit) => Reddit.getAboutSubReddit(subreddit)
);

export const subRedditSlice = createSlice({
  name: "subReddit",
  initialState: {
    subReddit: {},
    getAboutSubRedditLoading: false,
    getAboutSubRedditError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAboutSubReddit.pending, (state) => {
        state.getAboutSubRedditLoading = true;
        state.getAboutSubRedditError = false;
      })
      .addCase(getAboutSubReddit.fulfilled, (state, action) => {
        state.getAboutSubRedditLoading = false;
        state.getAboutSubRedditError = false;
      })
      .addCase(getAboutSubReddit.rejected, (state) => {
        state.getAboutSubRedditLoading = false;
        state.getAboutSubRedditError = true;
      });
  },
});

export const selectSubReddit = (state) => state.subReddit.subReddit;
export const selectGetAboutSubRedditLoading = (state) =>
  state.subReddit.getAboutSubRedditLoading;
export const selectGetAboutSubRedditError = (state) =>
  state.subReddit.getAboutSubRedditError;

export default subRedditSlice.reducer;
