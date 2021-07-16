import React from 'react';
import s from './Profile.module.css'
import {MypostsContainer} from "./Myposts/MypostsContainer";


export const ProfileInfo = () => {


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

        </div>

    );
}

