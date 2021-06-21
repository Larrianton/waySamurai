import React from 'react';
import {newMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";


export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    const sendMessage = () => {
                        store.dispatch(sendMessageActionCreator())
                    }
                    const changeMessageBody = (text: string) => {
                        store.dispatch(newMessageBodyActionCreator(text))
                    }
                    const messageBody = state.dialogsPage.newMessageText
                    return <Dialogs
                        state={state}
                        sendMessage={sendMessage}
                        changeMessage={changeMessageBody}
                        messageBody={messageBody}

                    />
                }
            }</StoreContext.Consumer>

    )

}