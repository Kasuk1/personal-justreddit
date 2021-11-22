
export const SubRedditAuthor = ({author, subRedditData: {display_name, display_name_prefixed, icon_img} }) => {
    
    return (
        <div className="sub-reddit-author">
            <div className="sub-reddit-author__image" style={ {backgroundColor: `${icon_img && "transparent"}` } }>
                { icon_img && <img src={icon_img} alt="" /> }
            </div>
            <div className="sub-reddit-author__info">
                <p className="sub-reddit-author__prefixed">{display_name_prefixed}</p>
                <p className="sub-reddit-author__author">Posted by {author}</p>
            </div>
        </div>
    )
}
