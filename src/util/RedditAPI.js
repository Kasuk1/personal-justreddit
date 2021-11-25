export const Reddit = {
    async processPostSubRedditInfo({ id, title, is_video, url, num_comments, score, author, subreddit, }) {
        const subRedditAbout = await Reddit.getAboutSubReddit(subreddit);
        const { data: subRedditData } = subRedditAbout;
        const { display_name, display_name_prefixed, public_description, subscribers, accounts_active, created, icon_img, } = subRedditData;

        return {
            id,
            title,
            is_video,
            url,
            num_comments,
            score,
            author,
            subRedditData: {
                display_name,
                display_name_prefixed,
                public_description,
                subscribers,
                accounts_active,
                created,
                icon_img,
            },
        };
    },

    async processCommentsUserInfo(comment) {
        const userInfo = await Reddit.getAboutUser(comment.author);

        return {
            ...comment,
            userInfo: userInfo.data
        }
    },

    async getPopularPosts(filter) {
        const endpoint = `https://www.reddit.com/r/popular/${filter ? filter : ""
            }.json`;
        const response = await fetch(endpoint);

        const json = await response.json();

        //Pointing result json data
        const dataPostsArr = json.data.children.map(({ data }) => data);

        //Mapping and processing through post data obtained with subreddit together
        const popularPosts = dataPostsArr.map(this.processPostSubRedditInfo);

        //Resolving promises returned from processPostSubRedditInfo()
        const finalPostsResolved = await Promise.all(popularPosts);

        return finalPostsResolved;
    },

    async getPostComments(postId) {
        const endpoint = `https://www.reddit.com/comments/${postId}.json`;
        const response = await fetch(endpoint);

        const json = await response.json();

        //Processing postInfo data obtained from first position of json response
        const postInfoDesordered = json[0].data.children[0].data;
        const postInfo = await Reddit.processPostSubRedditInfo(postInfoDesordered);

        //Processing postComments data obtained from second position of json response
        const postCommentsDesordered = json[1].data.children.filter(({ kind }) => kind !== "more")
            .map(({ data }) => {
                return {
                    id: data.id,
                    author: data.author,
                    body: data.body,
                    body_html: data.body_html,
                    score: data.score,
                    created: data.created
                }

            });

        const postComments = postCommentsDesordered.map(Reddit.processCommentsUserInfo);
        const finalCommentsResolved = await Promise.all(postComments);

        return { postInfo, postComments: finalCommentsResolved };
    },

    async getAboutSubReddit(subreddit) {
        const endpoint = `https://www.reddit.com/r/${subreddit}/about.json`;
        const response = await fetch(endpoint);

        const json = await response.json();
        return json;
    },

    async getAboutUser(user) {
        const endpoint = `https://www.reddit.com/user/${user}/about.json`;
        const response = await fetch(endpoint);

        const json = await response.json();
        return json;
    }
};
