import {v1} from "uuid";
import {dialogsPageType} from "./store";


export const newMessageBodyActionCreator = (body: string): newMessageBodyActionType => ({type: NEW_MESSAGE_BODY, body})
export const sendMessageActionCreator = (): sendMessageBodyActionType => ({type: SEND_MESSAGE})

const NEW_MESSAGE_BODY = "NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"


let initialState = {
    newMessageText: "",
    dialogsData: [
        {
            id: v1(),
            name: "Katya",
            image: "https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"
        },
        {
            id: v1(),
            name: "Sveta",
            image: "https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"
        },
        {
            id: v1(),
            name: "Valery",
            image: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
        },
        {
            id: v1(),
            name: "Alexander",
            image: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
        },
        {
            id: v1(),
            name: "Dmitriy",
            image: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
        }
    ],
    messagesData: [
        {id: v1(), message: "Hello what is your name ?"},
        {id: v1(), message: "how are you"},
        {id: v1(), message: "Relax take it easy!"},
        {id: v1(), message: "yo Man!"},
        {id: v1(), message: "Hey chicks!"}
    ]
}
type DialogsReducerType =  newMessageBodyActionType | sendMessageBodyActionType

export type newMessageBodyActionType = {
    type: "NEW-MESSAGE-BODY"
    body: string
}
export type sendMessageBodyActionType = {
    type: "SEND-MESSAGE"
}

export const dialogsReducer = (state: dialogsPageType = initialState, action: DialogsReducerType): dialogsPageType => {
    switch (action.type) {
        case NEW_MESSAGE_BODY :
            return {
                ...state,
                newMessageText: action.body
            }

        case SEND_MESSAGE :
            let newMessage = {
                id: v1(),
                message: state.newMessageText
            };
            return {
                ...state,
                newMessageText: "",
                messagesData: [...state.messagesData, newMessage],
            }
        default:
            return {...state}
    }


}
