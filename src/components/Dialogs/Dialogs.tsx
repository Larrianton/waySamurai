import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {dialogsPageType} from "../../redux/store";

type dialogsType = {
    sendMessage: () => void
    changeMessage: (text: string) => void
    messageBody: string
    dialogsPage:dialogsPageType
}

export const Dialogs = (props: dialogsType) => {


    let dialogElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}
                                                                                  image={d.image}/>);
    let messageElements = props.dialogsPage.messagesData.map(m => <MessageItem message={m.message}/>)

    const sendMessage = () => {
        props.sendMessage()

    }
    const changeMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeMessage((e.currentTarget.value))

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
                <textarea value={props.messageBody} onChange={changeMessageBody}></textarea>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>

    )

}