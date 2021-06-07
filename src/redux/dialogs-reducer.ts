import {v1} from "uuid";
import {ActionTypes, dialogsPageType, newMessageBodyActionType, sendMessageBodyActionType} from "./State";


export const newMessageBodyActionCreator = (body: string): newMessageBodyActionType => ({type: new_message_body, body})
export const sendMessageActionCreator = (): sendMessageBodyActionType => ({type: send_message})

const new_message_body = "NEW-MESSAGE-BODY"
const send_message = "SEND-MESSAGE"
export type dialogsReducerType = {
    state: dialogsPageType
    action: ActionTypes
}

const dialogsReducer = (state: dialogsPageType, action: ActionTypes) => {
    switch (action.type) {
        case new_message_body :
            state.newMessageText = action.body
            return {...state}
        case send_message :
            let newMessage = {
                id: v1(),
                message: state.newMessageText
            };
            state.messagesData.push(newMessage)
            return {...state}

        default:
            return {...state}
    }


}
export default dialogsReducer