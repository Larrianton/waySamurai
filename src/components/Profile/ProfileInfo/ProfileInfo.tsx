import React, {useState} from 'react';
import s from './Profile.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'
type ProfileInfoPropsType = {
    userProfile: ProfileType | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

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
                <img src={props.userProfile.photos.small || "https://avt-29.foto.mail.ru/mail/broonson/_avatar180?"}/>
                <span>{props.userProfile.fullName}</span>
                <ProfileStatus status={"hello"} />
            </div>

        </div>

    );
}

