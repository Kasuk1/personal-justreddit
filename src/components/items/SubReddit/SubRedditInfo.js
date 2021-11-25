
import { abbreviateNum } from "../../../util/functions/abbreviationNumber";
import { SubRedditMini } from "../../mini-components/SubRedditMini";

export const SubRedditInfo = ({ subRedditData }) => {
    const { public_description, subscribers, accounts_active } = subRedditData;

    return (
        <div className="subreddit-info">
            <SubRedditMini from="subredditinfo" subRedditData={subRedditData} />
            <p className="subreddit-info__description">{public_description}</p>
            <div className="subreddit-info__members">
                <p className="subreddit-info__subscribers">{abbreviateNum(subscribers, 1)} members</p>
                <p className="subreddit-info__actives">{abbreviateNum(accounts_active, 1)} online</p>
            </div>
        </div>
    )
}
