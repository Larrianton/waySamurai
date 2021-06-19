import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {dialogsDataType} from "../../../redux/store";


export const DialogItem = (props: dialogsDataType) => {
    let path = "/dialogs/" + props.id
    return (

        <div className={`${s.item}  ${s.active}`}>
            <img className={s.item_img} src={props.image}></img>
            <NavLink to={path}> {props.name} </NavLink>
        </div>

    )
};

