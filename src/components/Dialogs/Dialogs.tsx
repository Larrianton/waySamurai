import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {dialogsData} from "../../App";
import {messagesData} from "../../App";

type DialogsType ={
    dialogsData: Array<dialogsData>
    messagesData: Array<messagesData>
}


export const Dialogs = (props:DialogsType) => {


    let dialogElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.messagesData.map(m => <MessageItem message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}

            </div>
            <div className={s.messages}>
                {messageElements}

            </div>
        </div>

    )

}