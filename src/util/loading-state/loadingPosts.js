import { loadingPostItem } from "./loadingPostItem"

export const loadingPosts = () => {
    return (
        <div className="posts-loading">
            {[1, 2, 3, 4, 5].map(loadingPostItem)}
        </div>
    )
}
