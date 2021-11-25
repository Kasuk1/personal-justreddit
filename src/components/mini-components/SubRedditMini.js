import { timeConverter } from "../../util/functions/timeConverter";

export const SubRedditMini = ({ from, author, subRedditData: { display_name, display_name_prefixed, created, icon_img }, }) => {
  return (
    <div className="sub-reddit-mini">
      <div
        className="sub-reddit-mini__image"
        style={{ backgroundColor: `${icon_img && "transparent"}` }}
      >
        {icon_img && <img src={icon_img} alt="" />}
      </div>
      <div className="sub-reddit-mini__info">
        <p className="sub-reddit-mini__prefixed">{display_name_prefixed}</p>
        {from === "post" && <p className="sub-reddit-mini__author">Posted by {author}</p>}
        {from === "subredditinfo" && <p className="sub-reddit-mini__author">Created {timeConverter(created)}</p>}
      </div>
    </div>
  );
};
