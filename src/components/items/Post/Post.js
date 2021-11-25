import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronCircleUp, faChevronDown, faChevronCircleDown, } from "@fortawesome/free-solid-svg-icons";

import { SubRedditMini } from "../../mini-components/SubRedditMini";

import { abbreviateNum } from "../../../util/functions/abbreviationNumber";
import { useDispatch } from "react-redux";
import { getPostComments } from "../../../features/postDetail/postDetailSlice";

export const Post = ({ id, title, is_video, url, num_comments, score, author, subRedditData, }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [arrowUp, setArrowUp] = useState(false);
    const [arrowDown, setArrowDown] = useState(false);

    const handleCommentsClick = () => {
        dispatch(getPostComments(id));
        navigate(`/post/${id}`);
    };

    return (
        <div className="post-item">
            {!is_video && url.includes(".jpg") && (
                <div className="post-item__image">
                    <img src={url} alt="" />
                </div>
            )}
            <div className="post-item__info">
                <div className="post-item__info--left">
                    <SubRedditMini author={author} subRedditData={subRedditData} from="post" />
                    <h1 className="post-item__title paragraph">{title}</h1>
                    <button
                        className="post-item__button-comments"
                        onClick={handleCommentsClick}
                    >
                        {abbreviateNum(num_comments, 1)} Comments
                    </button>
                </div>
                <div className="post-item__info--right">
                    <div className="post-item__score">
                        <FontAwesomeIcon
                            className="post-item__score--icon"
                            icon={arrowUp ? faChevronCircleUp : faChevronUp}
                            onMouseEnter={() => setArrowUp(true)}
                            onMouseLeave={() => setArrowUp(false)}
                        />
                        {abbreviateNum(score, 1)}
                        <FontAwesomeIcon
                            className="post-item__score--icon"
                            icon={arrowDown ? faChevronCircleDown : faChevronDown}
                            onMouseEnter={() => setArrowDown(true)}
                            onMouseLeave={() => setArrowDown(false)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
