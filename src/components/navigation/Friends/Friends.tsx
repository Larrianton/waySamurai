import React from 'react';
import s from './Friends.module.css'
import {friendsDataType} from "../../../redux/store";

type friendsType = {
    friendsData: Array<friendsDataType>
}

export const Friends = (props: friendsType) => {

    const friendElements = props.friendsData.map((f) => {
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

