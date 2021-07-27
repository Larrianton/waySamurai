import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null
    email: string | null
    setAuthUserData: (id: string, email: string, login: string) => void,
    setIsFetching: (isFetching: boolean) => void
}

export const Header: React.FC<HeaderPropsType> = () => {
    return (
        <div className={s.header}>
            <img className={s.logo}
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5IdkZGOBECwRAqpYx6HH_Pr4Wy164El1Cg&usqp=CAU'
                 alt="logo"/>

                <NavLink to={"/login"}><span>Login</span> </NavLink>

        </div>
    );
}

