

export const Reddit = {

    async getPopularPosts(filter) {
        const endpoint = `https://www.reddit.com/r/popular/${filter ? filter : ""}.json`;
        const response = await fetch(endpoint)

        const json = await response.json();

        const dataPostsArr = json.data.children.map(({data}) => data);
        
        const popularPosts = dataPostsArr.map(async ({id, title, is_video, url, num_comments, score, author, subreddit}) => {
            const subRedditAbout = await Reddit.getAboutSubReddit(subreddit);
            const {data: subRedditData} = subRedditAbout;
            const {display_name, display_name_prefixed, icon_img} = subRedditData;

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
                    icon_img
                }
            };
        });

        const finaPostsResolved = await Promise.all(popularPosts);

        return finaPostsResolved;
    },

    async getPosts(subReddit) {

    },

    async getAboutSubReddit(subreddit) {
        const endpoint = `https://www.reddit.com/r/${subreddit}/about.json`;
        const response = await fetch(endpoint);
        
        const json = await response.json();
        return json;
    }


}