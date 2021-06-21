import React from 'react';
import s from './Friends.module.css'
import {rootStateType} from "../../../redux/store";

type friendsType = {
    state: rootStateType
}

export const Friends = (props: friendsType) => {

    const friendElements =props.state.sideBar.friendsData.map((f) => {
        return (
            <div className={s.friendsItem}>
                <img src={f.image} className={s.friendsItemImg}/>
                <div className={s.friendsItemName}>{f.name}</div>
            </div>
        )
    })

    return (
        <div className={s.friends}>
            Friends
            <div className={s.friendsItems}>


                {friendElements}


            </div>
        </div>
    )
}