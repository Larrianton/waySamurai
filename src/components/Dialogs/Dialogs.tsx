import React, {ChangeEvent, MouseEventHandler} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {newMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {ActionTypes, dialogsPageType} from "../../redux/State";

type dialogsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: ActionTypes) => void
}

export const Dialogs = (props: dialogsType) => {


    let dialogElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} image={d.image}/>);
    let messageElements = props.dialogsPage.messagesData.map(m => <MessageItem message={m.message}/>)

    const sendMessage = () => {
       props.dispatch(sendMessageActionCreator())

    }
    const changeMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(newMessageBodyActionCreator(e.currentTarget.value))

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}

            </div>
            <div className={s.dialogsMessages}>
                {messageElements}

            </div>
            <div>
                <textarea value={props.dialogsPage.newMessageText} onChange={changeMessageBody}></textarea>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>

    )

}