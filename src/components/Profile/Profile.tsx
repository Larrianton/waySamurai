import React from 'react';
import s from './Profile.module.css'
import {Myposts} from "./Myposts/Myposts";
import {profilePageType} from "../../redux/State";
type profileType ={
    profilePage:profilePageType
}

export const Profile = (props:profileType) => {



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
            <Myposts postsData={props.profilePage.postsData}/>
        </div>

    );
}

