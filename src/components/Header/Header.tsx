import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null
    email: string | null
    isAuth:boolean
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <div className={s.header}>
            <img className={s.logo}
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5IdkZGOBECwRAqpYx6HH_Pr4Wy164El1Cg&usqp=CAU'
                 alt="logo"/>
            {props.isAuth ? props.login : <NavLink to={"/login"}><span>Login</span> </NavLink> }


        </div>
    );
}

