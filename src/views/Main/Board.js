import React from 'react'
import { Categories } from './Categories/Categories'
import { PopularPosts } from './PopularPosts/PopularPosts'

export const Board = () => {
    return (
        <div className="board">
            <Categories />
            <PopularPosts />
        </div>
    )
}
