import React from 'react';
import s from './Profile.module.css'
import {Myposts} from "./Myposts/Myposts";
import {ActionTypes, rootStateType} from "../../redux/store";
import {MypostsContainer} from "./Myposts/MypostsContainer";

type profileType = {
    state: rootStateType
    dispatch: (action: ActionTypes) => void
}

export const Profile = (props: profileType) => {


    return (

        <div className={s.content}>
            <div>
                <img className={s.background}
                     src="https://img1.goodfon.ru/wallpaper/big/3/4a/mlechnyy-put-kosmos-zvezdy-3734.jpg"
                     alt="background"/>
            </div>
            <div>
                ava + description
            </div>

            <MypostsContainer state={props.state}
                     dispatch={props.dispatch}/>
        </div>

    );
}

