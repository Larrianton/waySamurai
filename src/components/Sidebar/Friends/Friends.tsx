import React from 'react';
import s from './Friends.module.css'
import {navDataType} from "../../../redux/State";


export const Friends = (props:navDataType) => {


    return (
        <div className={s.friendsWrapper} >
            Friends
        </div>
    )
}