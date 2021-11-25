import { loadingSubRedditAuthor } from "./loadingSubRedditAuthor"

export const loadingSubRedditInfo = () => {
    return (
        <div className="loading-subreddit-info">
            {loadingSubRedditAuthor()}
            <div className="loading-subreddit-info__description">
                <div className="loading-subreddit-info__text"></div>
                <div className="loading-subreddit-info__text"></div>
                <div className="loading-subreddit-info__text"></div>
            </div>
            <div className="loading-subreddit-info__members">
                <div className="loading-subreddit-info__active"></div>
                <div className="loading-subreddit-info__active"></div>
            </div>
        </div>
    )
}
