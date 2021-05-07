import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}
const DialogItem = (props:DialogItemType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={`${s.item}  ${s.active}`}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>

    )
}

type DialogsType = {
    message: string
}
export const Dialogs = (props: DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Katya" id={1} />
                <div className={s.item}>
                    Sveta
                </div>
                <div className={s.item}>
                    Valery
                </div>
                <div className={s.item}>
                    Alexander
                </div>
                <div className={s.item}>
                    Dmitriy
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    How are you ?
                </div>
                <div className={s.message}>
                    Im fine thanks !
                </div>
            </div>
        </div>

    )

}