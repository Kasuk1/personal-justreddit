import React from "react";
import { Filter } from "../../../components/filter/Filter";
import { Posts } from "../../../features/posts/Posts";
import { Categories } from "../../../components/lists/Categories/Categories";

export const PopularPosts = () => {

    return (
        <>
            <div className="left-side">
                <h2 className="heading-2">Categories</h2>
                <Categories />
            </div>
            <div className="right-side">
                <h2 className="heading-2">Popular Posts</h2>
                <Filter />
                <div className="posts">
                    <Posts />
                </div>
            </div>
        </>
    );
};
