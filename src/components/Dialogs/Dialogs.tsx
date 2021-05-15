import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {dialogsPageType} from "../../redux/State";


export const Dialogs = (props: dialogsPageType) => {


    let dialogElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} image={d.image}/>);
    let messageElements = props.messagesData.map(m => <MessageItem message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}

            </div>
            <div className={s.dialogsMessages}>
                {messageElements}

            </div>
        </div>

    )

}