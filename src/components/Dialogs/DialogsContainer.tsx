import React from 'react';
import {newMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {dialogsPageType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";


type mapStateToProps = {
    dialogsPage: dialogsPageType
    messageBody: string
}
type mapDispatchToProps = {
    sendMessage: () => void
    changeMessage: (text: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
        messageBody: state.dialogsPage.newMessageText,

    }
}
const mapDispatchToProps = (dispatch: any): mapDispatchToProps => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        changeMessage: (text: string) => {
            dispatch(newMessageBodyActionCreator(text))

        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);