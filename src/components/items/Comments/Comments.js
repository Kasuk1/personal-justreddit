import { Comment } from "./Comment";

export const Comments = ({ postComments }) => {

    return (
        <div className="comments">
            {postComments.map(comment => <Comment key={comment.id} {...comment} />)}
        </div>
    )
}
