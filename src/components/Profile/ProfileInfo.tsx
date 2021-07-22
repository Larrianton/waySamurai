import React from 'react';
import s from './Profile.module.css'
import {MypostsContainer} from "./Myposts/MypostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    userProfile: ProfileType | null
}

export const ProfileInfo = (props:ProfileInfoPropsType) => {

    if (!props.userProfile) {
        return <Preloader/>
    }
    return (

        <div className={s.content}>
            <div>
                <img className={s.background}
                     src="https://img1.goodfon.ru/wallpaper/big/3/4a/mlechnyy-put-kosmos-zvezdy-3734.jpg"
                     alt="background"/>
            </div>
            <div>
               <img src={props.userProfile?.photo.small} />
               <span>{props.userProfile?.fullName}</span>
            </div>

        </div>

    );
}

