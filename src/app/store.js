import { configureStore } from '@reduxjs/toolkit';

import postsSlice from '../features/posts/postsSlice';
import subRedditSlice from '../features/subReddit/subRedditSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    subReddit: subRedditSlice
  },
});
