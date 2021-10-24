import React from 'react';
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {dialogsPageType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";


type mapStateToProps = {
    dialogsPage: dialogsPageType
}
type mapDispatchToProps = {
    sendMessage: (message:string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: any): mapDispatchToProps => {
    return {
        sendMessage: (message:string) => {
            dispatch(sendMessageActionCreator(message))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);