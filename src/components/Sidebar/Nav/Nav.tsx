import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {navDataType} from "../../../redux/State";


export const Nav:React.FC= (props:navDataType) => {
    return (
        <div className={s.nav}>
            <div className={s.nav_wrapper}>
                <ul>
                    <li className={`${s.item} ${s.active}`}>
                        <NavLink to="/profile" activeClassName={s.activeLink}>Profile </NavLink>
                    </li>
                    <li className={`${s.item} ${s.active}`}>
                        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                    </li>
                    <li className={`${s.item} ${s.active}`}>
                        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                    </li>
                    <li className={`${s.item} ${s.active}`}>
                        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                    </li>
                    <li className={`${s.item} ${s.active}`}>
                        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    );
}

