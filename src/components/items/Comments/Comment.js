import parse from 'html-react-parser';
import { marked } from 'marked';
import { UserMini } from '../../mini-components/UserMini';

export const Comment = ({ body, body_html, created, userInfo }) => {
    return (
        <div className="comment">
            <UserMini created={created} {...userInfo} />
            <div className="comment__body">
                {parse(marked(`${body}`))}
            </div>
        </div>
    )
}
