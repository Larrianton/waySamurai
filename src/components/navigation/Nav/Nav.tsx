import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "../Friends/Friends";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {friendsDataType} from "../../../redux/store";


export const Nav = () => {

    return (
        <div className={s.nav}>
            <div className={s.nav_wrapper}>
                <ul>
                    <li className={`${s.item} ${s.active}`}>
                        <NavLink to={`/profile`} activeClassName={s.activeLink}>Profile</NavLink>
                    </li>
                    <li className={`${s.item} ${s.active}`}>
                        <NavLink to={`/dialogs`} activeClassName={s.activeLink}>Messages</NavLink>
                    </li>
                    <li className={`${s.item} ${s.active}`}>
                        <NavLink to={`/users`} activeClassName={s.activeLink}>Users</NavLink>
                    </li>
                    <li className={`${s.item} ${s.active}`}>
                        <NavLink to={`/news`} activeClassName={s.activeLink}>News</NavLink>
                    </li>
                    <li className={`${s.item} ${s.active}`}>
                        <NavLink to={`/music`} activeClassName={s.activeLink}>Music</NavLink>
                    </li>
                    <li className={`${s.item} ${s.active}`}>
                        <NavLink to={`/settings`} activeClassName={s.activeLink}>Settings</NavLink>
                    </li>

                </ul>
            </div>
            <FriendsContainer/>

        </div>
    );
}
type mapStateToProps = {
    friendsData: Array<friendsDataType>
}
const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        friendsData: state.sideBar.friendsData
    }
}
const mapDispatchToProps = () => {
    return {}
}
export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
