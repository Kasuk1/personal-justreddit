import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Post } from "../../components/items/Post/Post";
import { loadingPosts } from "../../util/loading-state/loadingPosts";

import { getPopularPosts, searchPosts, selectGetPostsError, selectGetPostsLoading, selectPosts, } from "./postsSlice";

export const Posts = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const posts = useSelector(selectPosts);
  const postsLoading = useSelector(selectGetPostsLoading);
  const postsError = useSelector(selectGetPostsError);

  useEffect(() => {
    if (params.searchText) {
      dispatch(searchPosts(params.searchText));
      return;
    }

    if (params.filter) {
      dispatch(getPopularPosts(params.filter));
      return;
    }

    dispatch(getPopularPosts("top"))

  }, [dispatch, params]);

  if (postsLoading) return loadingPosts();
  if (postsError) return <h1>Error...</h1>;
  if (posts.length === 0) return <h1>No posts found</h1>

  return posts.map((post) => <Post key={post.id} {...post} />);
};
