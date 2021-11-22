import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Post } from '../../components/items/Post/Post';
import { loadingPosts } from '../../util/loading-state/loadingPosts';

import { getPopularPosts, selectGetPostsError, selectGetPostsLoading, selectPosts } from './postsSlice';

export const Posts = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectPosts);
    const postsLoading = useSelector(selectGetPostsLoading);
    const postsError = useSelector(selectGetPostsError);

    useEffect(() => {
        dispatch(getPopularPosts("top"));
    }, [dispatch]);


    if(postsLoading) return loadingPosts();
    if(postsError) return <h1>Error...</h1>

    return posts.map(post => <Post key={post.id} {...post} /> )
}
