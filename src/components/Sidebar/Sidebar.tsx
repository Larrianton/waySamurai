import React from 'react';
import s from '../Sidebar/Sidebar.module.css'
import {Nav} from "./Nav/Nav";
import {Friends} from "./Friends/Friends";
import {sideBarType} from "../../redux/State";


export const Sidebar = (props:sideBarType) => {
    return (
    <div className={s.sidebar}>
        <Nav navData={props.navData} />
        <Friends friendsData={props.friendsData}/>
    </div>



)
}