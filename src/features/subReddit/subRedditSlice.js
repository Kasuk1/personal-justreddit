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
        const { display_name, display_name_prefixed, icon_img } =
          action.payload.data;
        state.subReddit = { display_name, display_name_prefixed, icon_img };
        /* state.subReddit = {
                    ...state.subReddit,
                    [display_name] : {display_name, display_name_prefixed, icon_img}
                }; */
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
