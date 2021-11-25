import { configureStore } from "@reduxjs/toolkit";

import postsSlice from "../features/posts/postsSlice";
import postDetailSlice from "../features/postDetail/postDetailSlice";
import subRedditSlice from "../features/subReddit/subRedditSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    postDetail: postDetailSlice,
    subReddit: subRedditSlice,
  },
});
