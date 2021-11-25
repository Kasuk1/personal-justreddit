import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate, useNavigate } from "react-router-dom";

import { Post } from "../../components/items/Post/Post";
import { SubRedditInfo } from "../../components/items/SubReddit/SubRedditInfo";
import { Comments } from "../../components/items/Comments/Comments";


import { getPostComments, selectGetPostCommentsError, selectGetPostCommentsLoading, selectPostComments, selectPostInfo, } from "./postDetailSlice";

import { loadingPosts } from "../../util/loading-state/loadingPosts";
import { loadingSubRedditInfo } from "../../util/loading-state/loadingSubRedditInfo";
import { ButtonReturn } from "../../components/forms/Buttons/ButtonReturn";

export const PostDetail = () => {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const navigate = useNavigate();

    const postInfo = useSelector(selectPostInfo);
    const postComments = useSelector(selectPostComments);
    const loadingComments = useSelector(selectGetPostCommentsLoading);
    const errorComments = useSelector(selectGetPostCommentsError);

    //TODO: We need to fix this. Is not quite good because it has three calls to the getPostComments method
    useMemo(() => {
        dispatch(getPostComments(postId));
    }, [dispatch, postId]);

    const handleReturn = () => {
        navigate(-1);
    }

    if (loadingComments) {
        return (
            <>
                <div className="left-side">
                    {loadingSubRedditInfo()}
                </div>
                <div className="right-side">
                    {loadingPosts()}
                </div>
            </>
        )
    }

    if (errorComments) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <div className="left-side">
                <SubRedditInfo {...postInfo} />
            </div>
            <div className="right-side">
                <ButtonReturn handleReturn={handleReturn} />
                <div className="posts">
                    <Post {...postInfo} />
                    <Comments postComments={postComments} />
                </div>
            </div>
        </>

    );
};
