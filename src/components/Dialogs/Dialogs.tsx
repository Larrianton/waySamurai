import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {newMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {ActionTypes, rootStateType} from "../../redux/store";

type dialogsType = {
    state: rootStateType
    dispatch: (action: ActionTypes) => void
}

export const Dialogs = (props: dialogsType) => {


    let dialogElements = props.state.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} image={d.image}/>);
    let messageElements = props.state.dialogsPage.messagesData.map(m => <MessageItem message={m.message}/>)

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
                <textarea value={props.state.dialogsPage.newMessageText} onChange={changeMessageBody}></textarea>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>

    )

}