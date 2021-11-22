import { loadingSubRedditAuthor } from "./loadingSubRedditAuthor"

export const loadingPostItem = () => {
    return (
        <div className="post-item-loading">
            <div className="post-item-loading__image"></div>
            <div className="post-item-loading__info">
                <div className="post-item-loading__info--left">
                    {loadingSubRedditAuthor()}
                    <div className="post-item-loading__title">
                        <div className="post-item-loading__title--paragraph-1"></div>
                        <div className="post-item-loading__title--paragraph-2"></div>

                    </div>
                    <div className="post-item-loading__button"></div>
                </div>
                <div className="post-item-loading__info--right">
                    <div className="post-item-loading__score"></div>
                </div>
            </div>
        </div>
    )
}
