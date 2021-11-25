import React from "react";
import { Filter } from "../../../components/filter/Filter";
import { Posts } from "../../../features/posts/Posts";

export const PopularPosts = () => {
    return (
        <div className="right-side">
            <h2 className="heading-2">Popular Posts</h2>
            <Filter />
            <div className="posts">
                <Posts />
            </div>
        </div>
    );
};
