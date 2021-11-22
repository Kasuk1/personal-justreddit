import React from 'react'

import { Search } from '../../forms/Search/Search'

import { useMediaQuery } from '../../../hooks/useMediaQuery';

export const Navbar = () => {
    const matchMedia = useMediaQuery("(max-width: 600px");

    return (
        <div className="navbar">
            <div className="logo">
                <span className="logo__left">{matchMedia ? "J" : "Just"}</span>
                <span className="logo__right">{matchMedia ? "R" : "Reddit"}</span>
            </div>
            <Search />
        </div>
    )
}
