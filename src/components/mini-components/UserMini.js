import React from 'react'
import { timeConverter } from '../../util/functions/timeConverter'

export const UserMini = ({ created, name, snoovatar_img }) => {
    return (
        <div className="user-mini">
            <div className="user-mini__image">
                <img src={snoovatar_img} alt="" />
            </div>
            <p className="user-mini__name">{name} &#8226; <small className="user-mini__created">{timeConverter(created)}</small></p>
        </div>
    )
}
