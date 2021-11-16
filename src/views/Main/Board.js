import React from 'react'
import { Categories } from './Categories/Categories'
import { Posts } from './Posts/Posts'

export const Board = () => {
    return (
        <div className="board">
            <Categories />
            <Posts />
        </div>
    )
}
